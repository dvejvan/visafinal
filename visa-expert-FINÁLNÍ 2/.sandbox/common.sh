#!/bin/bash

# Function to check if package.json exists
check_package_json() {
  if [ ! -f "./package.json" ]; then
    echo "Error: package.json not found"
    exit 1
  fi
}

has_package_manager_field() {
  HAS_PM=$(node -e "try { const pkg = require('./package.json'); console.log(pkg.packageManager ? 'true' : 'false') } catch(e) { console.log('false') }")
  if [ "$HAS_PM" = "true" ]; then
    return 0  # Success/true in bash
  else
    return 1  # Failure/false in bash
  fi
}

# Function to extract package manager from package.json
get_package_manager() {
  # Return "unknown" instead of defaulting to npm when packageManager is not present
  PM=$(node -e "try { const pkg = require('./package.json'); console.log(pkg.packageManager ? pkg.packageManager.split('@')[0] : 'unknown') } catch(e) { console.log('unknown') }")
  
  # If package manager is unknown, check for lock files
  if [ "$PM" = "unknown" ]; then
    if [ -f "package-lock.json" ]; then
      PM="npm"
    elif [ -f "pnpm-lock.yaml" ]; then
      PM="pnpm"
    elif [ -f "bun.lock" -o -f "bun.lockb" ]; then
      PM="bun"
    elif [ -f "yarn.lock" ]; then
      PM="yarn"
    else
      # Default to npm if no lock file is found
      PM="npm"
    fi
  fi

  # Save the package manager to a file
  mkdir -p .macaly
  echo $PM > .macaly/package-manager
  
  echo $PM
}

# Function to set up logging with tee
setup_logging() {
  # Get the PID of the current process
  PID=$$

  # Set up the log file
  LOG_FILE="/var/log/server/output-${PID}.log"

  # Define jq filters to format lines as JSON
  local jq_filter_stdout='{time: now | strftime("%Y-%m-%dT%H:%M:%SZ"), stream: "stdout", log: .}'
  local jq_filter_stderr='{time: now | strftime("%Y-%m-%dT%H:%M:%SZ"), stream: "stderr", log: .}'
  
  # Send stdout through jq, then to tee and the file
  exec > >(jq --unbuffered -Rc "$jq_filter_stdout" | tee -a "$LOG_FILE")
  # Send stderr through jq, then to a separate tee instance and the same file
  exec 2> >(jq --unbuffered -Rc "$jq_filter_stderr" | tee -a "$LOG_FILE" >&2)
}

# Function to run the final command with exec
run_with_exec() {
  echo "$ $@"
  exec "$@"
}
