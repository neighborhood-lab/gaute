# Glossary

## Terms and Definitions

### API Rate Limit
The maximum number of API requests allowed per hour. GitHub enforces different limits based on account type and reputation.

### Bot Account
A GitHub account operated by automated software rather than a human. Subject to additional scrutiny and restrictions.

### Core API
GitHub's REST API for most operations (issues, PRs, repos, etc.). Separate rate limit from GraphQL.

### Ghost Issue
An issue that exists in the API but returns 404 on the web UI. Common with restricted bot accounts.

### GraphQL API
GitHub's newer API using GraphQL query language. Often blocked for new bot accounts.

### Rate Limit Reset
The time when rate limit counters reset to their maximum values. Typically hourly.

### Reputation
GitHub's internal assessment of an account's legitimacy based on activity patterns, age, and behavior.

### REST API
Representational State Transfer API - GitHub's traditional API using HTTP methods.

### Search API
Separate API with its own rate limits for code, issue, and repository searches.

## Bot-Specific Terms

### gaute-bot
The primary bot account this repository tests and supports.

### tove-bot
Sister bot created same time as gaute-bot, but with established rate limits.

### bedwards
Human administrator account with full access.

## Technical Terms

### Commit Attribution
The author and committer information attached to git commits. Important for proper bot identification.

### Local Configuration
Git settings specific to a repository (`.git/config`), not affecting global settings.

### noreply Email
GitHub's privacy email format: `ID+username@users.noreply.github.com`

### Token Scope
The permissions granted to a GitHub API token (repo, admin, etc.).
