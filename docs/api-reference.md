# API Reference

## GitHub REST API

Gaute-bot uses the GitHub REST API for most operations due to GraphQL restrictions.

### Authentication

All API requests include an authorization token:
```bash
gh auth login
```

### Common Operations

#### Create Issue
```bash
gh api repos/OWNER/REPO/issues -X POST -f title="Title" -f body="Body"
```

#### List Issues
```bash
gh api repos/OWNER/REPO/issues
```

#### Update Issue
```bash
gh api repos/OWNER/REPO/issues/NUMBER -X PATCH -f state=closed
```

### Rate Limit Monitoring

Check current rate limits:
```bash
gh api rate_limit
```
