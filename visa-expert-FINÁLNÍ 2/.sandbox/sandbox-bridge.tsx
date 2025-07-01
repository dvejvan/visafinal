// @ts-nocheck
"use client";

import React, {
  useEffect,
  useState,
  Component,
  ErrorInfo,
  ReactNode,
} from "react";

import { useRouter } from "next/navigation";

interface MacalySandboxBridgeProps {
  children?: React.ReactNode;
}

let MacalySandboxBridge = ({ children }: MacalySandboxBridgeProps) => {
  return <>{children}</>;
};

if (typeof window !== "undefined") {
  function getElementSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`;
    }

    const path: string[] = [];
    let current = element;

    while (current && current.nodeType === Node.ELEMENT_NODE) {
      let selector = current.nodeName.toLowerCase();

      if (current.id) {
        selector = `#${current.id}`;
        path.unshift(selector);
        break;
      } else {
        const siblings = Array.from(current.parentNode?.children || []).filter(
          (sibling) => sibling.nodeName === current.nodeName
        );

        if (siblings.length > 1) {
          const index = siblings.indexOf(current as Element);
          selector += `:nth-child(${index + 1})`;
        }

        path.unshift(selector);
        current = current.parentNode as HTMLElement;
      }
    }

    return path.join(" > ");
  }

  const getReactFiber = (el: any): any => {
    const key = Object.keys(el).find(
      (k) =>
        k.startsWith("__reactFiber$") ||
        k.startsWith("__reactInternalInstance$")
    );
    return key ? el[key] : null;
  };

  interface GetComponentTypeReturn {
    type: (Function & { displayName?: string }) | null;
    serverComponent: boolean;
  }

  function getComponentType(fiber: any): GetComponentTypeReturn {
    let current = fiber;
    while (current) {
      if (
        typeof current.type === "object" &&
        (current.type === null ||
          current.type?.$$type === "Symbol(react.provider)" ||
          (current.type?.$$type === "Symbol(react.context)" &&
            current.type.displayName === "LayoutRouterContext"))
      ) {
        return { type: null, serverComponent: true };
      }
      if (typeof current.type === "function") {
        if (
          current._debugOwner?.name === "HydrateClient" ||
          current.type.name === "InnerLayoutRouter" ||
          current.type.name === "MacalySandboxBridge"
        ) {
          return { type: null, serverComponent: true };
        } else {
          return { type: current.type, serverComponent: false };
        }
      }
      current = current.return;
    }
    return { type: null, serverComponent: false };
  }

  function getDebugOwnerName(fiber: any): string | null {
    let current = fiber;
    while (current) {
      const name = current._debugOwner?.name;
      if (name && name !== "MacalySandboxBridge") {
        return current._debugOwner.name;
      }
      current = current.return;
    }
    return null;
  }

  const getComponentName = (fiber: any): string => {
    if (!fiber) return "UNKNOWN";

    const componentType = getComponentType(fiber);
    if (componentType.serverComponent) {
      return getDebugOwnerName(fiber) || "SERVER";
    }
    if (!componentType.type) return "UNKNOWN";

    return (
      componentType.type.displayName || componentType.type.name || "ANONYMOUS"
    );
  };

  interface ComponentInfo {
    element: string;
    tagName: string;
    className: string;
    id: string;
    componentName: string;
  }

  interface UseComponentInspectorReturn {
    enabled: boolean;
    toggleInspector: () => void;
  }

  const useComponentInspector = (): UseComponentInspectorReturn => {
    const [enabled, setEnabled] = useState<boolean>(false);
    const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
      null
    );
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(
      null
    );

    const clearElementStyles = (element: HTMLElement) => {
      element.style.boxShadow = "";
      element.style.borderRadius = "";
      element.style.backgroundColor = "";
      element.removeAttribute("data-inspector-selected");
      element.removeAttribute("data-inspector-original-bg");
    };

    // Restore selection on component re-render
    useEffect(() => {
      const selectedElements = document.querySelectorAll(
        '[data-inspector-selected="true"]'
      );
      selectedElements.forEach((el) => {
        (el as HTMLElement).style.boxShadow = "0 0 0 2px rgb(168, 85, 247)";
        (el as HTMLElement).style.borderRadius = "4px";
        (el as HTMLElement).style.backgroundColor = "rgba(168, 85, 247, 0.1)";
        setSelectedElement(el as HTMLElement);
      });
    }, []);

    const clearSelection = () => {
      if (selectedElement) {
        clearElementStyles(selectedElement);
      }
      const selectedElements = document.querySelectorAll(
        '[data-inspector-selected="true"]'
      );
      selectedElements.forEach((el) => {
        clearElementStyles(el as HTMLElement);
      });
      setSelectedElement(null);
    };

    useEffect(() => {
      const handleMessage = (event: MessageEvent) => {
        if (event.data.type === "ENABLE_INSPECTOR") {
          setEnabled(true);
        } else if (event.data.type === "DISABLE_INSPECTOR") {
          setEnabled(false);
          clearSelection();
        } else if (event.data.type === "RESET_INSPECTOR") {
          clearSelection();
        }
      };

      window.addEventListener("message", handleMessage);

      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "INSPECTOR_AVAILABLE",
          },
          "*"
        );
      }

      return () => {
        window.removeEventListener("message", handleMessage);
        if (window.parent !== window) {
          window.parent.postMessage(
            {
              type: "INSPECTOR_UNAVAILABLE",
            },
            "*"
          );
        }
      };
    }, []);

    useEffect(() => {
      if (!enabled) {
        if (
          hoveredElement &&
          !hoveredElement.hasAttribute("data-inspector-selected")
        ) {
          clearElementStyles(hoveredElement);
        }
        setHoveredElement(null);
        return;
      }

      const findReactComponentInfo = (
        element: HTMLElement
      ): ComponentInfo | null => {
        const fiber = getReactFiber(element);
        if (!fiber) return null;

        return {
          element: getElementSelector(element),
          tagName: element.tagName.toLowerCase(),
          className:
            typeof element.className === "string" ? element.className : "",
          id: element.id,
          componentName: getComponentName(fiber),
        };
      };

      const preventDefaultEvents = (e: Event) => {
        if (enabled) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      const handleClick = (e: MouseEvent) => {
        if (!enabled) return;

        e.preventDefault();
        e.stopPropagation();

        const target = e.target as HTMLElement;
        const info = findReactComponentInfo(target);

        if (info) {
          const isCurrentlySelected =
            target.getAttribute("data-inspector-selected") === "true";

          // Clear previous selection
          if (selectedElement && selectedElement !== target) {
            clearElementStyles(selectedElement);
          }

          // Toggle selection state
          if (isCurrentlySelected) {
            clearElementStyles(target);
            setSelectedElement(null);
            window.parent.postMessage(
              {
                type: "ELEMENT_DESELECTED",
                content: info,
              },
              "*"
            );
          } else {
            // Store original background color
            const originalBgColor = target.style.backgroundColor;
            if (originalBgColor) {
              target.setAttribute(
                "data-inspector-original-bg",
                originalBgColor
              );
            }

            target.setAttribute("data-inspector-selected", "true");
            target.style.boxShadow = "0 0 0 2px rgb(239, 68, 68)";
            target.style.borderRadius = "4px";
            target.style.backgroundColor = "rgba(168, 85, 247, 0.1)";
            setSelectedElement(target);
            window.parent.postMessage(
              {
                type: "ELEMENT_SELECTED",
                content: info,
              },
              "*"
            );
          }
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!enabled) return;

        const target = e.target as HTMLElement;

        if (hoveredElement && hoveredElement !== target) {
          if (!hoveredElement.hasAttribute("data-inspector-selected")) {
            clearElementStyles(hoveredElement);
          } else {
            // Restore purple border for selected element when unhovered
            hoveredElement.style.boxShadow = "0 0 0 2px rgb(168, 85, 247)";
          }
        }

        // Apply hover styles
        if (target.hasAttribute("data-inspector-selected")) {
          // Show red border when hovering over selected element
          target.style.boxShadow = "0 0 0 2px rgb(239, 68, 68)";
        } else {
          // Show blue border for unselected elements
          target.style.boxShadow = "0 0 0 2px rgb(37, 99, 235)";
          target.style.borderRadius = "4px";
        }

        setHoveredElement(target);
      };

      document.addEventListener("click", handleClick, { capture: true });
      document.addEventListener("mousemove", handleMouseMove, {
        capture: true,
      });
      document.addEventListener("mousedown", preventDefaultEvents, {
        capture: true,
      });
      document.addEventListener("mouseup", preventDefaultEvents, {
        capture: true,
      });
      document.addEventListener("submit", preventDefaultEvents, {
        capture: true,
      });
      document.addEventListener("keydown", preventDefaultEvents, {
        capture: true,
      });
      document.addEventListener("keyup", preventDefaultEvents, {
        capture: true,
      });
      document.addEventListener("keypress", preventDefaultEvents, {
        capture: true,
      });

      return () => {
        document.removeEventListener("click", handleClick, { capture: true });
        document.removeEventListener("mousemove", handleMouseMove, {
          capture: true,
        });
        document.removeEventListener("mousedown", preventDefaultEvents, {
          capture: true,
        });
        document.removeEventListener("mouseup", preventDefaultEvents, {
          capture: true,
        });
        document.removeEventListener("submit", preventDefaultEvents, {
          capture: true,
        });
        document.removeEventListener("keydown", preventDefaultEvents, {
          capture: true,
        });
        document.removeEventListener("keyup", preventDefaultEvents, {
          capture: true,
        });
        document.removeEventListener("keypress", preventDefaultEvents, {
          capture: true,
        });
      };
    }, [enabled, hoveredElement, selectedElement]);

    return {
      enabled,
      toggleInspector: () => setEnabled(!enabled),
    };
  };

  // Custom hooks to replace Next.js navigation hooks
  const usePathname = () => {
    const [pathname, setPathname] = useState(window?.location.pathname ?? "");

    useEffect(() => {
      if (!window) return;
      const handleLocationChange = () => {
        setPathname(window.location.pathname);
      };

      window.addEventListener("popstate", handleLocationChange);
      return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    return pathname;
  };

  const useSearchParams = () => {
    const [searchParams, setSearchParams] = useState(
      window
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams()
    );

    useEffect(() => {
      if (!window) return;
      const handleLocationChange = () => {
        setSearchParams(new URLSearchParams(window.location.search));
      };

      window.addEventListener("popstate", handleLocationChange);
      return () => window.removeEventListener("popstate", handleLocationChange);
    }, []);

    return searchParams;
  };

  const usePathnameUpdate = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "PATHNAME_CONNECTED",
          },
          "*"
        );

        return () => {
          window.parent.postMessage(
            {
              type: "PATHNAME_DISCONNECTED",
            },
            "*"
          );
        };
      }
    }, []);

    useEffect(() => {
      if (window.parent !== window) {
        // Send URL information
        const url =
          pathname +
          (searchParams.toString() ? `?${searchParams.toString()}` : "");
        window.parent.postMessage(
          {
            type: "PATHNAME_UPDATE",
            pathname: url,
          },
          "*"
        );
      }
    }, [pathname, searchParams]);
  };

  const extractFunctionNames = (stack) => {
    if (!stack) return [];

    // Split into lines and skip the first "Error" and useConsoleBridge lines
    const lines = stack.split("\n").slice(2);

    // Extract function names from each line
    return lines
      .map((line) => {
        const values = line.trim().split(" ");
        const functionName = values[1];
        if (
          !functionName ||
          !functionName.startsWith ||
          functionName.startsWith("https://")
        ) {
          return null;
        }
        return functionName;
      })
      .filter(Boolean);
  };

  // Function to safely serialize objects for postMessage
  const safeSerialize = (obj: any, visited = new WeakSet<any>()): any => {
    if (obj === null || obj === undefined) {
      return obj;
    }

    // Handle primitive types directly
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }

    // Handle circular references
    if (visited.has(obj)) {
      return "[Circular Reference]";
    }

    // Add to visited objects
    visited.add(obj);

    // Handle special non-cloneable objects
    if (obj instanceof Error) {
      return {
        __type: "Error",
        name: obj.name,
        message: obj.message,
        stack: obj.stack,
      };
    }

    if (obj instanceof Response) {
      return {
        __type: "Response",
        url: obj.url,
        status: obj.status,
        statusText: obj.statusText,
        headers: Array.from(obj.headers.entries()),
      };
    }

    if (obj instanceof Request) {
      return {
        __type: "Request",
        url: obj.url,
        method: obj.method,
      };
    }

    if (obj instanceof HTMLElement) {
      return {
        __type: "HTMLElement",
        tagName: obj.tagName,
        id: obj.id,
        className: obj.className,
      };
    }

    if (typeof obj === "function") {
      return `[Function: ${obj.name || "anonymous"}]`;
    }

    if (obj instanceof Date) {
      return {
        __type: "Date",
        value: obj.toISOString(),
      };
    }

    if (obj instanceof RegExp) {
      return {
        __type: "RegExp",
        value: obj.toString(),
      };
    }

    if (obj instanceof Map) {
      return {
        __type: "Map",
        value: Array.from(obj.entries()).map(([k, v]) => [
          safeSerialize(k, visited),
          safeSerialize(v, visited),
        ]),
      };
    }

    if (obj instanceof Set) {
      return {
        __type: "Set",
        value: Array.from(obj).map((v) => safeSerialize(v, visited)),
      };
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => safeSerialize(item, visited));
    }

    // For plain objects
    try {
      const result: Record<string, any> = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          try {
            result[key] = safeSerialize(obj[key], visited);
          } catch (e) {
            result[key] = `[Failed to serialize: ${(e as Error).message}]`;
          }
        }
      }
      return result;
    } catch (e) {
      return `[${obj.constructor?.name || "Object"}: Unable to serialize]`;
    }
  };

  const useConsoleBridge = () => {
    useEffect(() => {
      if (window.parent !== window) {
        // Store original console methods
        const originalConsoleLog = console.log;
        const originalConsoleError = console.error;
        const originalConsoleWarn = console.warn;

        // Override console methods with location-preserving wrappers
        console.log = function (...args) {
          // Call original method
          originalConsoleLog.apply(console, args);

          // Safely serialize arguments
          const safeArgs = args.map((arg) => safeSerialize(arg));

          // Forward to parent with caller info
          try {
            window.parent.postMessage(
              {
                type: "CONSOLE_LOG",
                content: safeArgs,
              },
              "*"
            );
          } catch (error) {
            originalConsoleError("Error forwarding log to parent:", error);
          }
        };

        console.error = function (...args) {
          // Call original method
          originalConsoleError.apply(console, args);

          // Capture stack trace of where console.error was called from
          const stackTrace = new Error().stack;

          const functionNames = extractFunctionNames(stackTrace);

          // Safely serialize arguments
          const safeArgs = args.map((arg) => safeSerialize(arg));

          try {
            window.parent.postMessage(
              {
                type: "CONSOLE_ERROR",
                content: safeArgs,
                functionStack: functionNames,
              },
              "*"
            );
          } catch (error) {
            originalConsoleError("Error forwarding error to parent:", error);
          }
        };

        console.warn = function (...args) {
          // Call original method
          originalConsoleWarn.apply(console, args);

          // Safely serialize arguments
          const safeArgs = args.map((arg) => safeSerialize(arg));

          try {
            window.parent.postMessage(
              {
                type: "CONSOLE_WARN",
                content: safeArgs,
              },
              "*"
            );
          } catch (error) {
            originalConsoleError("Error forwarding warning to parent:", error);
          }
        };

        // Cleanup function
        return () => {
          console.log = originalConsoleLog;
          console.error = originalConsoleError;
          console.warn = originalConsoleWarn;
        };
      }
    }, []);
  };

  const useUncaughtErrorHandling = () => {
    useEffect(() => {
      const handleError = (event: ErrorEvent) => {
        event.preventDefault();

        if (window.parent !== window) {
          const safeError = safeSerialize(
            event.error ?? new Error(event.message)
          );
          window.parent.postMessage(
            {
              type: "UNCAUGHT_ERROR",
              content: safeError,
            },
            "*"
          );
        }
      };

      window.addEventListener("error", handleError);

      // Unhandled promise rejection handling
      const handlePromiseRejection = (event: PromiseRejectionEvent) => {
        event.preventDefault();
        if (window.parent !== window && event.reason) {
          const safeError = safeSerialize(event.reason);
          window.parent.postMessage(
            {
              type: "UNHANDLED_PROMISE_REJECTION",
              content: safeError,
            },
            "*"
          );
        }
      };

      window.addEventListener("unhandledrejection", handlePromiseRejection);

      return () => {
        window.removeEventListener("error", handleError);
        window.removeEventListener(
          "unhandledrejection",
          handlePromiseRejection
        );
      };
    }, []);
  };

  const usePostHog = () => {
    useEffect(() => {
      if (window.parent !== window) {
        // PostHog initialization code
        const script = document.createElement("script");
        script.innerHTML = `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_dR8lASWm5Oh4x3KyM5RlSw5DIQRjoQjEvmQU5wi1h7S', {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        session_recording: {
          recordCrossOriginIframes: true,
        }
      });
    `;
        document.head.appendChild(script);

        // Clean up function to remove the script when component unmounts
        return () => {
          document.head.removeChild(script);
        };
      }
    }, []);
  };

  const useScreenshotCapture = () => {
    useEffect(() => {
      if (window.parent !== window) {
        // Add the modern-screenshot script to the page once
        if (
          !(window as any).modernScreenshot &&
          !document.getElementById("modern-screenshot-script")
        ) {
          // Create and add inline module script
          const script = document.createElement("script");
          script.id = "modern-screenshot-script";
          script.type = "module";
          script.textContent = `
            import { domToPng } from 'https://unpkg.com/modern-screenshot?module';
            window.modernScreenshot = { domToPng };
          `;
          document.head.appendChild(script);
        }

        // Function to handle screenshot messages
        const handleScreenshotMessage = (event: MessageEvent) => {
          if (event.data.type === "CAPTURE_SCREENSHOT") {
            // Check if library is loaded
            if ((window as any).modernScreenshot?.domToPng) {
              // Take screenshot
              (window as any).modernScreenshot
                .domToPng(document.documentElement, {
                  fetch: {
                    requestInit: {
                      cache: "no-cache",
                    },
                  },
                })
                .then((dataUrl: string) => {
                  // Send the screenshot back to parent
                  window.parent.postMessage(
                    {
                      type: "SCREENSHOT_CAPTURED",
                      dataUrl,
                    },
                    "*"
                  );
                })
                .catch((error: any) => {
                  window.parent.postMessage(
                    {
                      type: "SCREENSHOT_ERROR",
                      error: safeSerialize(error),
                    },
                    "*"
                  );
                });
            } else {
              // Library not yet loaded, retry after a delay
              setTimeout(() => {
                if ((window as any).modernScreenshot?.domToPng) {
                  // Retry the screenshot
                  (window as any).modernScreenshot
                    .domToPng(document.documentElement, {
                      fetch: {
                        requestInit: {
                          cache: "no-cache",
                        },
                      },
                    })
                    .then((dataUrl: string) => {
                      window.parent.postMessage(
                        {
                          type: "SCREENSHOT_CAPTURED",
                          dataUrl,
                        },
                        "*"
                      );
                    })
                    .catch((error: any) => {
                      window.parent.postMessage(
                        {
                          type: "SCREENSHOT_ERROR",
                          error: safeSerialize(error),
                        },
                        "*"
                      );
                    });
                } else {
                  // Still not loaded, send error
                  window.parent.postMessage(
                    {
                      type: "SCREENSHOT_ERROR",
                      error: "modernScreenshot library not available",
                    },
                    "*"
                  );
                }
              }, 1000); // Wait 1 second and retry
            }
          }
        };

        // Add the message event listener
        window.addEventListener("message", handleScreenshotMessage);

        window.parent.postMessage(
          {
            type: "SCREENSHOT_CAPTURE_AVAILABLE",
          },
          "*"
        );

        return () => {
          window.removeEventListener("message", handleScreenshotMessage);
          window.parent.postMessage(
            {
              type: "SCREENSHOT_CAPTURE_UNAVAILABLE",
            },
            "*"
          );
        };
      }
    }, []);
  };

  const useNavigationBridge = (router: NextRouter) => {
    useEffect(() => {
      if (window.parent !== window) {
        const handleNavigationMessage = (event: MessageEvent) => {
          if (event.source === window.parent) {
            switch (event.data.type) {
              case "HISTORY_GO_BACK":
                window.history.back();
                break;
              case "HISTORY_GO_FORWARD":
                window.history.forward();
                break;
              case "PATHNAME_UPDATE":
                const newPath = event.data.pathname;
                if (newPath && newPath !== window.location.pathname) {
                  router.push(newPath);
                }
                break;
            }
          }
        };

        // Keep track of navigation entries
        let navigationEntries: string[] = [window.location.pathname];
        let currentIndex = 0;

        const updateNavigationState = () => {
          const currentPath = window.location.pathname;

          // Only add to history if it's a new path
          if (currentPath !== navigationEntries[currentIndex]) {
            // Remove any forward entries when navigating to a new path
            navigationEntries = navigationEntries.slice(0, currentIndex + 1);
            navigationEntries.push(currentPath);
            currentIndex = navigationEntries.length - 1;
          }

          window.parent.postMessage(
            {
              type: "HISTORY_STATE_UPDATED",
              canGoBack: currentIndex > 0,
              canGoForward: currentIndex < navigationEntries.length - 1,
              currentPath: currentPath,
            },
            "*"
          );
        };

        // Override history methods to track navigation
        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;

        window.history.pushState = function (...args) {
          originalPushState.apply(this, args);
          updateNavigationState();
        };

        window.history.replaceState = function (...args) {
          originalReplaceState.apply(this, args);
          updateNavigationState();
        };

        window.addEventListener("message", handleNavigationMessage);
        window.addEventListener("popstate", () => {
          const currentPath = window.location.pathname;
          currentIndex = navigationEntries.indexOf(currentPath);
          if (currentIndex === -1) {
            currentIndex = navigationEntries.length;
            navigationEntries.push(currentPath);
          }
          updateNavigationState();
        });

        // Initial state update
        updateNavigationState();

        return () => {
          window.removeEventListener("message", handleNavigationMessage);
          window.removeEventListener("popstate", updateNavigationState);
          window.history.pushState = originalPushState;
          window.history.replaceState = originalReplaceState;
        };
      }
    }, []);
  };

  interface ErrorState {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
  }

  class MacalyErrorLogger extends Component<
    { children: ReactNode },
    ErrorState
  > {
    constructor(props: { children: ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorState {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      const enhancedError = {
        __type: "Error",
        name: error.name,
        message: error.message,
        componentStack: errorInfo.componentStack
          .split("\n")
          .map((line) => line.trim().split(" ")[1])
          .filter(Boolean)
          .filter(
            (c) =>
              ![
                "MacalyErrorLogger",
                "MacalySandboxBridge",
                "MacalyComponentInspector",
              ].includes(c)
          ),
      };

      // Update state with error info
      this.setState({ errorInfo });

      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: "UNCAUGHT_ERROR",
            content: enhancedError,
          },
          "*"
        );
      }

      throw error;
    }

    render(): ReactNode {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }

  interface MacalyComponentInspectorProps {
    children?: React.ReactNode;
  }

  function MacalyComponentInspector({
    children,
  }: MacalyComponentInspectorProps) {
    useComponentInspector();

    return children;
  }

  MacalySandboxBridge = ({ children }: MacalySandboxBridgeProps) => {
    const router = useRouter();

    usePathnameUpdate();
    useConsoleBridge();
    useUncaughtErrorHandling();
    usePostHog();
    useScreenshotCapture();
    useNavigationBridge(router);

    return (
      <MacalyErrorLogger>
        <MacalyComponentInspector>{children}</MacalyComponentInspector>
      </MacalyErrorLogger>
    );
  };
}

export { MacalySandboxBridge };
