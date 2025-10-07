#!/usr/bin/env bash
# Usage: ./combine_md_to_one_txt.sh input_dir output_file.txt
# Converts all markdown files in input_dir (recursively) into one big text file.

set -euo pipefail

INPUT_DIR="../docs"
OUTPUT_FILE="./combined.txt"

# Clean output file
> "$OUTPUT_FILE"
echo "Cleared output file: $OUTPUT_FILE"

# Find and process all .md files
find "$INPUT_DIR" -type f -name "*.md" | sort | while read -r mdfile; do
  echo "Processing: $mdfile"
  echo -e "\n--- FILE: $mdfile ---\n" >> "$OUTPUT_FILE"
  pandoc -f markdown -t plain --wrap=none "$mdfile" >> "$OUTPUT_FILE"
  echo -e "\n" >> "$OUTPUT_FILE"
done

echo "Done! Combined text saved to: $OUTPUT_FILE"
