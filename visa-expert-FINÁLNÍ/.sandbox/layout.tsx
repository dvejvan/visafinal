// @ts-nocheck
import React from "react";

import { MacalySandboxBridge } from "../.sandbox/sandbox-bridge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MacalySandboxBridge>
        <body>{children}</body>
      </MacalySandboxBridge>
    </html>
  );
}
