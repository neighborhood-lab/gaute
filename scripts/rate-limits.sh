#!/bin/bash
# Check rate limits for all bot accounts

echo "=== GitHub API Rate Limits ==="
echo ""

echo "BEDWARDS:"
gh auth switch --user bedwards > /dev/null 2>&1
gh api rate_limit | jq '{
  core: .resources.core.limit,
  core_remaining: .resources.core.remaining,
  graphql: .resources.graphql.limit,
  graphql_remaining: .resources.graphql.remaining,
  search: .resources.search.limit
}'
echo ""

echo "TOVE-BOT:"
gh auth switch --user tove-bot > /dev/null 2>&1
gh api rate_limit | jq '{
  core: .resources.core.limit,
  core_remaining: .resources.core.remaining,
  graphql: .resources.graphql.limit,
  graphql_remaining: .resources.graphql.remaining,
  search: .resources.search.limit
}'
echo ""

echo "GAUTE-BOT:"
gh auth switch --user gaute-bot > /dev/null 2>&1
gh api rate_limit | jq '{
  core: .resources.core.limit,
  core_remaining: .resources.core.remaining,
  graphql: .resources.graphql.limit,
  graphql_remaining: .resources.graphql.remaining,
  search: .resources.search.limit
}'
echo ""

# Switch back to gaute-bot
gh auth switch --user gaute-bot > /dev/null 2>&1
