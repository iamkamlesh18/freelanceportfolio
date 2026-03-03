#!/bin/bash

echo "Updating FULL_PROJECT_DUMP.txt..."

find . \
\( -path "./node_modules" -o -path "./.next" -o -path "./out" -o -path "./.git" \) -prune \
-o -type f \
\( -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.js" -o -name "*.mjs" \) \
-print \
| while read file; do
  echo -e "\n\n================================================="
  echo "FILE: $file"
  echo "================================================="
  cat "$file"
done > FULL_PROJECT_DUMP.txt

echo "FULL_PROJECT_DUMP.txt updated."
