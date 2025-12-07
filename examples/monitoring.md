# Monitoring Gaute Bot Activity

## Rate Limit Monitoring

### Check Current Limits
```bash
gh api rate_limit | jq '{
  core: .resources.core,
  graphql: .resources.graphql,
  search: .resources.search
}'
```

### Compare Across Accounts
```bash
# As bedwards
gh auth switch --user bedwards
gh api rate_limit | jq '.resources.core.limit'

# As tove-bot
gh auth switch --user tove-bot
gh api rate_limit | jq '.resources.core.limit'

# As gaute-bot
gh auth switch --user gaute-bot
gh api rate_limit | jq '.resources.core.limit'
```

## Commit Activity

### View Recent Activity
```bash
./scripts/commit-activity.sh
```

### Check Commits by Date
```bash
git log --since="7 days ago" --oneline --author="gaute-bot"
```

### Count Daily Commits
```bash
git log --since="24 hours ago" --author="gaute-bot" | grep "^commit" | wc -l
```

## Repository Metrics

### Total Commits
```bash
git rev-list --count HEAD
```

### Files Changed
```bash
git diff --stat $(git rev-list --max-parents=0 HEAD)
```

### Contributors
```bash
git shortlog -sn --all
```

## Tracking Progress

Keep a log of:
- Rate limit values over time
- Commit frequency
- API operation success rates
- Any errors or anomalies

## Alerts

Watch for:
- Rate limit increases
- GraphQL access granted
- Ghost issue resolution
- Unusual API responses
