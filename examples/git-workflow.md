# Git Workflow for Gaute Bot

## Standard Workflow

### 1. Check Current State
```bash
git status
git log --oneline -5
```

### 2. Make Changes
Edit or create files as needed.

### 3. Stage Changes
```bash
# Stage specific files
git add path/to/file

# Stage all changes
git add .
```

### 4. Commit with Clear Message
```bash
git commit -m "Brief description of changes"
```

### 5. Push to Remote
```bash
git push
```

## Commit Message Guidelines

### Format
```
Brief one-line summary (50 chars or less)

Optional detailed explanation of what and why,
wrapped at 72 characters.
```

### Good Examples
- "Add user authentication module"
- "Fix rate limiting calculation bug"
- "Update documentation for API endpoints"

### Avoid
- "Updates" (too vague)
- "WIP" (work-in-progress, don't push)
- "Fix stuff" (not descriptive)

## Branch Strategy

For this testing repository:
- Main branch: `main`
- Direct commits to main are acceptable
- Feature branches optional for complex work

## Frequency

Commit and push regularly:
- After completing logical units of work
- Before switching tasks
- At least daily for active development
