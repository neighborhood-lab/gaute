# Basic Workflow Example

## Daily Bot Operations

### 1. Verify Configuration
```bash
./scripts/check-status.sh
```

### 2. Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### 3. Make Changes
Edit files, add features, fix bugs.

### 4. Commit Changes
```bash
git add .
git commit -m "Descriptive commit message"
```

### 5. Push to Remote
```bash
git push -u origin feature/new-feature
```

### 6. Monitor Rate Limits
```bash
gh api rate_limit | jq '.resources.core'
```

## Best Practices

- Keep commits focused and atomic
- Write clear commit messages
- Push regularly to build activity
- Monitor rate limits to stay within bounds
- Use REST API when GraphQL is unavailable
