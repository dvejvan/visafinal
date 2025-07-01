#!/bin/bash

# Default SCRIPT_DIR to current directory if not set
if [ -z "$SCRIPT_DIR" ]; then
  SCRIPT_DIR="$(dirname "$0")"
fi

if [ -f "./tsconfig.json" ]; then
  CONFIG_ARG="--tsconfig=$SCRIPT_DIR/tsconfig.extend.json"
else
  CONFIG_ARG="--tsconfig=$SCRIPT_DIR/tsconfig.minimal.json"
fi

node $SCRIPT_DIR/ts-check-with-types.js $CONFIG_ARG "$@"
