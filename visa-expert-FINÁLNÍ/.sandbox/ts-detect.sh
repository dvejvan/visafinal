#!/bin/bash

# Default SCRIPT_DIR to current directory if not set
if [ -z "$SCRIPT_DIR" ]; then
  SCRIPT_DIR="$(dirname "$0")"
fi

# Determine if local TypeScript exists
if [ -f "./node_modules/typescript/bin/tsc" ]; then
  TSC="./node_modules/typescript/bin/tsc"
  LOCAL_TS=1
else
  TSC="tsc"
  LOCAL_TS=0
fi

# Determine the right tsconfig
if [ -f "./tsconfig.json" ]; then
  CONFIG_ARG="--project $SCRIPT_DIR/tsconfig.extend.json"
  LOCAL_CONFIG=1
else
  CONFIG_ARG="--project $SCRIPT_DIR/tsconfig.minimal.json"
  LOCAL_CONFIG=0
fi

echo -n "${LOCAL_TS}${LOCAL_CONFIG}"
