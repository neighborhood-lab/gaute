# Troubleshooting

## Common Issues

### GraphQL Rate Limit Exceeded

**Problem:** GraphQL API returns "rate limit exceeded" error

**Solution:** Use REST API endpoints instead. The `gh` CLI uses GraphQL by default, so use `gh api` with REST endpoints.

### Ghost Issues

**Problem:** Issues created via API don't appear in web UI

**Cause:** New bot accounts may have restrictions that cause API operations to succeed but not persist to web UI.

**Solution:** Focus on git operations (commits, pushes) which work reliably. As the bot builds reputation, API operations will work normally.

### Attribution Issues

**Problem:** Commits show wrong author in GitHub

**Solution:** Ensure local git config uses the correct email:
```bash
git config --local user.email "bri.mabry.edwards@gmail.com"
```

### Cache Issues

**Problem:** GitHub web UI shows stale data

**Solution:** GitHub's CDN caches badges and counters. Wait 15-60 minutes or trigger a refresh by creating/closing an issue.
