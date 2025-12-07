# Understanding GitHub Rate Limits

## Rate Limit Tiers

GitHub applies different rate limits based on account age, activity, and reputation.

### Established Accounts
- Core API: 5,000 requests/hour
- GraphQL: 5,000 requests/hour
- Search: 30 requests/minute

### New/Restricted Accounts
- Core API: 60 requests/hour
- GraphQL: 0 requests/hour (blocked)
- Search: 10 requests/minute

## Building Reputation

New bot accounts can build reputation through:

### Legitimate Activity
- Regular git commits
- Push changes to repositories
- Meaningful code contributions
- Consistent activity patterns

### Timeline
Rate limit increases typically occur over:
- **Days 1-7:** Restricted limits
- **Days 7-30:** Gradual increases
- **30+ days:** Full limits (if activity is legitimate)

## Monitoring

Check current limits:
```bash
gh api rate_limit
```

## Best Practices

- Stay within current limits
- Focus on git operations initially
- Build consistent activity patterns
- Avoid burst/spam patterns
