#!/bin/bash

echo "Updating FULL_PROJECT_DUMP.txt..."

{
echo "================================================="
echo "FULL PROJECT DUMP (AUTO-GENERATED)"
echo "================================================="
echo ""
echo "Purpose:"
echo "- This file provides a complete snapshot of the project."
echo "- Includes project structure (tree view)."
echo "- Includes all relevant source file contents."
echo "- Excludes build folders and node_modules."
echo ""
echo "Why this exists:"
echo "- For quick sharing and AI/code review analysis."
echo "- For architecture audits."
echo "- For backup visibility in a single file."
echo "- Automatically updated on every git push via Husky."
echo ""
echo "================================================="
echo "PROJECT STRUCTURE"
echo "================================================="
echo ""

tree -I "node_modules|.next|out|build|.git|hooks" -h -a -L 5

echo ""
echo ""
echo "================================================="
echo "PROJECT FILE CONTENTS"
echo "================================================="

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
done

} > FULL_PROJECT_DUMP.txt

echo "FULL_PROJECT_DUMP.txt updated."
