#!/bin/bash

# Check for argument
if [ -z "$1" ]; then
  echo "Usage: $0 \"Post Title\""
  exit 1
fi

TITLE="$1"

# Slugify the title
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')
FILENAME="./src/content/blog/${SLUG}.md"

# Get current date + 1 day in YYYY-MM-DD format
DATE=$(date -v+1d +"%Y-%m-%d")

# Create the file with boilerplate
cat > "$FILENAME" <<EOF
---
title: $TITLE
date: $DATE
subtitle: 
titleBgColor: 
titleColor: 
categories: []
---
EOF

echo "Created $FILENAME"