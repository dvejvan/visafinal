// @ts-nocheck
const { getFileErrorDefinitions } = require("./get-error-file-definitions");
const fs = require("fs");

// Get command line arguments (skip the first two which are node and script path)
const args = process.argv.slice(2);

// Display usage if no arguments provided
if (args.length === 0) {
  console.log("Example: node path-to/ts-check-with-types.js app/page.tsx");
  process.exit(1);
}

// Parse arguments
let tsConfigPath = "tsconfig.json";
const filePaths = [];

args.forEach((arg) => {
  if (arg.startsWith("--tsconfig=")) {
    tsConfigPath = arg.substring("--tsconfig=".length);
  } else {
    filePaths.push(arg);
  }
});

// Validate file paths
filePaths.forEach((filePath) => {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }
});

console.log(
  `Analyzing ${filePaths.length} file(s) with tsconfig: ${tsConfigPath}`
);

// Get error definitions
try {
  const errorDefinitions = getFileErrorDefinitions(filePaths, tsConfigPath);

  // Output results
  console.log("\nResults:");
  console.log(JSON.stringify(errorDefinitions, null, 2));

  // Summary
  console.log(`\nFound ${errorDefinitions.length} error definition(s).`);
} catch (error) {
  console.error("Error analyzing files:", error);
  process.exit(1);
}
