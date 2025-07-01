#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
DATA_FILE="$SCRIPT_DIR/ts-watch.dat"

# Source the detection script
source "$SCRIPT_DIR/ts-detect.sh"

# Save the binary values to file
echo -n "${LOCAL_TS}${LOCAL_CONFIG}" > "$DATA_FILE"

# Create log file with current PID (before exec replaces this process)
LOG_FILE="/var/log/server/ts-$$.log"

# Execute TypeScript in watch mode with output to log file
# The exec command replaces this shell with tsc while preserving the PID
exec $TSC --noEmit --watch $CONFIG_ARG > "$LOG_FILE" 2>&1
