#!/bin/bash

COMMIT_MSG_FILE=$1

# deletes any lines from the commit message that start with //
sed -i "/^\/\/.*/d" "$COMMIT_MSG_FILE"
