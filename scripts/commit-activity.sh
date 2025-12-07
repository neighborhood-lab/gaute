#!/bin/bash
# Display recent commit activity statistics

echo "=== Commit Activity Report ==="
echo ""

echo "Total commits:"
git rev-list --count HEAD
echo ""

echo "Commits by author:"
git shortlog -sn --all
echo ""

echo "Recent commits (last 10):"
git log --oneline -10 --format='%h - %s (%ar)'
echo ""

echo "Commits in last 24 hours:"
git log --since="24 hours ago" --oneline --format='%h - %s' | wc -l
