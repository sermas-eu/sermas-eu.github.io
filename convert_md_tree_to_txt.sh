#!/usr/bin/env bash
# Usage: ./convert_md_tree_to_txt.sh input_dir output_dir

set -euo pipefail

INPUT_DIR="${1:-.}"
OUTPUT_DIR="${2:-./converted_txt}"

mkdir -p "$OUTPUT_DIR"

find "$INPUT_DIR" -type f -name "*.md" | while read -r mdfile; do
  # Compute relative path (remove leading input dir)
  relpath="${mdfile#"$INPUT_DIR"/}"
  
  # Replace slashes with double underscores and strip .md
  base="$(echo "$relpath" | sed 's|/|__|g; s|\.md$||')"

  # Build output file name
  outfile="${OUTPUT_DIR}/${base}.txt"

  echo "Converting: $mdfile → $outfile"

  pandoc -f markdown -t plain --wrap=none "$mdfile" -o "$outfile"
done