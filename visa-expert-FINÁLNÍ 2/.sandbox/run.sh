#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Source the common functions
SCRIPT_DIR="$(dirname "$0")"
source "$SCRIPT_DIR/common.sh"

# Check if package.json exists
check_package_json

# Check if a script name was provided
if [ -z "$1" ]; then
  echo "Error: No script name provided"
  exit 1
fi

SCRIPT_NAME=$1

# Set up logging
setup_logging

# Extract package manager from package.json
PM=$(get_package_manager)

# Use the appropriate command syntax for running scripts
if [ "$PM" = "yarn" ]; then
  run_with_exec yarn $SCRIPT_NAME
elif [ "$PM" = "pnpm" ]; then
  run_with_exec pnpm $SCRIPT_NAME
elif [ "$PM" = "bun" ]; then
  run_with_exec bun run $SCRIPT_NAME
else
  run_with_exec npm run $SCRIPT_NAME
fi
