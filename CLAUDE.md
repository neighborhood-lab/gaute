# Claude Bot Guidelines for Gaute Repository

## Purpose
This repository is a testing sandbox for the `gaute-bot` GitHub account to perform legitimate automated operations and build API usage patterns.

## Bot Behavior

### Identity Configuration
When working in this repository, bots should:
1. Configure local git identity to use bot credentials
2. Verify GitHub CLI authentication as the appropriate bot
3. Check that all commits and API operations show as the bot user

Example setup:
```bash
# Set local git config (do not use --global)
git config --local user.name "gaute-bot"
git config --local user.email "166941051+gaute-bot@users.noreply.github.com"

# Switch gh CLI to gaute-bot
gh auth switch --user gaute-bot

# Verify configuration
git config user.name
gh auth status
```

### Rate Limit Monitoring
gaute-bot currently has restricted API rate limits:
- Core REST API: 60 requests/hour
- GraphQL API: 0 requests/hour (blocked)
- Search API: 10 requests/hour

**Always monitor rate limits:**
```bash
gh api rate_limit
```

When GraphQL is unavailable, use REST API directly instead of gh CLI commands.

### Legitimate Operations
Perform these operations to build usage patterns:
- Create and push commits
- Create and manage feature branches
- Create, comment on, and close issues
- Create and manage pull requests
- Add PR reviews and comments
- Create GitHub Actions workflows
- Merge pull requests

### Security
- **Never commit** `.secrets.txt` - it's already in `.gitignore`
- Use local configuration only (not global)
- Don't interfere with work in other directories

### Coordination
- This is gaute-bot's sandbox - bedwards may be working elsewhere on the same machine
- Keep all configuration changes local to this repository
- Multiple bots (gaute-bot, tove-bot) are configured on this system

## Goal
The goal is to establish legitimate usage patterns so that GitHub increases gaute-bot's API rate limits over time, similar to how tove-bot received higher limits through usage.
