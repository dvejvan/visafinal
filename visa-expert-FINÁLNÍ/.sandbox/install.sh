#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Source the common functions
SCRIPT_DIR="$(dirname "$0")"
source "$SCRIPT_DIR/common.sh"

# Check if package.json exists
check_package_json

# Set up logging
setup_logging

# Enable corepack first
corepack enable

# Extract package manager from package.json
PM=$(get_package_manager)

# Prepare the package manager
if has_package_manager_field; then
  echo "Package manager specified in package.json, preparing with corepack"
  # Use || true to prevent script from exiting if this command fails
  corepack prepare || {
    echo "Warning: corepack prepare failed, continuing anyway"
  }
fi

# Use the appropriate install command
if [ "$PM" = "yarn" ]; then
  run_with_exec yarn
elif [ "$PM" = "pnpm" ]; then
  run_with_exec pnpm install
elif [ "$PM" = "bun" ]; then
  run_with_exec bun install
else
  run_with_exec npm install
fi
