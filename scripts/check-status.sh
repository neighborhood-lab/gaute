#!/bin/bash
# Check gaute-bot configuration and status

echo "=== Gaute Bot Status ==="
echo ""

echo "Git Configuration:"
git config user.name
git config user.email
echo ""

echo "GitHub CLI Authentication:"
gh auth status
echo ""

echo "Rate Limits:"
gh api rate_limit | jq '{core: .resources.core, graphql: .resources.graphql}'
