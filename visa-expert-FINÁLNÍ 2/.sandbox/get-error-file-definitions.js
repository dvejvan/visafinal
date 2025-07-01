// @ts-nocheck
const {
  Project,
  Node,
  SyntaxKind,
} = require("/usr/local/lib/node_modules/ts-morph");

/**
 * @typedef {Object} SymbolErrorInfo
 * @property {string} symbolName - e.g., "model2", "age", ...
 * @property {string} typeText - e.g., number | "User" | ...
 * @property {Array<{filePath: string, text: string}>} declarations - declarations of the symbol itself (as before)
 * @property {Array<{code: number, message: string}>} diagnostics - diagnostics that pointed to it
 * @property {string} [contextTypeText] - interface/type expected by the caller
 * @property {Array<{filePath: string, text: string}>} [contextTypeDeclarations] - declarations of the contextual type
 */

/**
 * @param {string[]} filePaths
 * @param {string} [tsConfig="tsconfig.json"]
 * @returns {SymbolErrorInfo[]}
 */
function getFileErrorDefinitions(filePaths, tsConfig = "tsconfig.json") {
  const project = new Project({ tsConfigFilePath: tsConfig });
  const byKey = new Map();

  for (const filePath of filePaths) {
    const source = project.getSourceFile(filePath);
    if (!source) {
      console.warn(`Source file not found: ${filePath}`);
      continue;
    }
    const diagnostics = source.getPreEmitDiagnostics();

    diagnostics.forEach((diag) => {
      const start = diag.getStart();
      if (start == null) return;

      const node = source.getDescendantAtPos(start);
      const sym = node?.getSymbol();
      if (!sym) return;

      const firstDecl = sym
        .getDeclarations()
        .find((d) => d.getSourceFile().getFilePath() === source.getFilePath());
      if (!firstDecl) return;

      const key =
        sym.getFullyQualifiedName() +
        "|" +
        firstDecl.getSourceFile().getFilePath() +
        "|" +
        firstDecl.getStartLineNumber();

      // ———————————————————————————  basic info (same as before)
      if (!byKey.has(key)) {
        byKey.set(key, {
          symbolName: sym.getName(),
          typeText: sym.getTypeAtLocation(node).getText(),
          declarations: sym.getDeclarations().map((d) => ({
            filePath: d.getSourceFile().getFilePath(),
            text: d.getText().trim(),
          })),
          diagnostics: [],
        });
      }
      byKey.get(key).diagnostics.push({
        code: diag.getCode(),
        message: diag.getMessageText(),
      });

      // ———————————————————————————  NEW: find the expected argument type
      const info = byKey.get(key);
      if (!info.contextTypeText && node) {
        let nodeForContextualType;

        // Check if the node where the diagnostic occurs is a PropertyAssignment or ShorthandPropertyAssignment
        if (
          Node.isPropertyAssignment(node) ||
          Node.isShorthandPropertyAssignment(node)
        ) {
          nodeForContextualType = node;
        } else {
          // If not, search its ancestors for the nearest PropertyAssignment or ShorthandPropertyAssignment.
          // This handles cases where the diagnostic is on a child of these nodes (e.g., an identifier or an expression).
          nodeForContextualType = node
            .getAncestors()
            .find(
              (ancestor) =>
                Node.isPropertyAssignment(ancestor) ||
                Node.isShorthandPropertyAssignment(ancestor)
            );
        }

        if (nodeForContextualType) {
          // getContextualType expects the PropertyAssignment/ShorthandPropertyAssignment node
          const ctx = getContextualType(nodeForContextualType);
          if (ctx) {
            info.contextTypeText = ctx.getText();
            info.contextTypeDeclarations = collectTypeDecls(ctx);
          }
        }
      }
    });
  }

  return [...byKey.values()];
}

/**
 * returns the contextual (expected) type for a property in an object-literal
 * @param {Node} node
 * @returns {import('ts-morph').Type | undefined}
 */
function getContextualType(node) {
  // ① is it a property assignment inside an ObjectLiteralExpression?
  const prop =
    Node.isPropertyAssignment(node) || Node.isShorthandPropertyAssignment(node)
      ? node
      : undefined;
  const obj = prop?.getParentIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!obj) return;

  // ② TypeScript checker knows what type the object should have → get its symbol
  return obj.getContextualType();
}

/**
 * collects declarations of the given type (interface, type-alias, enum, ...)
 * @param {import('ts-morph').Type} type
 * @returns {Array<{filePath: string, text: string}>}
 */
function collectTypeDecls(type) {
  const seen = new Set();
  const result = [];

  const pushDecls = (s) => {
    if (!s) return;
    s.getDeclarations().forEach((d) => {
      const id = d.getSourceFile().getFilePath() + "|" + d.getStartLineNumber();
      if (seen.has(id)) return;
      seen.add(id);
      result.push({
        filePath: d.getSourceFile().getFilePath(),
        text: d.getText().trim(),
      });
    });
  };

  pushDecls(type.getSymbol());
  type.getUnionTypes().forEach((t) => pushDecls(t.getSymbol()));
  type.getIntersectionTypes().forEach((t) => pushDecls(t.getSymbol()));
  return result;
}

module.exports = {
  getFileErrorDefinitions,
};
