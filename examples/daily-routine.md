# Daily Bot Routine

## Morning Check

### 1. Verify Configuration
```bash
cd /path/to/gaute
git config user.name  # Should show: gaute-bot
git config user.email # Should show: bri.mabry.edwards@gmail.com
gh auth status        # Should show gaute-bot active
```

### 2. Check Rate Limits
```bash
./scripts/rate-limits.sh
```

### 3. Review Repository Status
```bash
git status
git log --oneline -5
```

## During Day

### Create Meaningful Commits
- Add documentation
- Create utility scripts
- Improve examples
- Update guides

### Commit Pattern
```bash
# After each logical change
git add .
git commit -m "Clear description of change"
git push
```

### Recommended Frequency
- 5-10 commits per day
- Spread throughout the day
- Avoid bursts (no 50 commits in 5 minutes)

## Evening Review

### 1. Check Day's Activity
```bash
./scripts/commit-activity.sh
```

### 2. Verify All Pushed
```bash
git status
# Should show: "Your branch is up to date with 'origin/main'"
```

### 3. Check Rate Limit Changes
```bash
./scripts/rate-limits.sh
```

### 4. Log Progress
Note any changes in:
- Rate limit values
- API behavior
- Commit counts

## Weekly Review

### Check Progress
- Total commits for week
- Rate limit improvements
- Any anomalies or issues

### Adjust Strategy
- Increase/decrease commit frequency
- Try new operation types
- Document observations

## Notes

- Consistency matters more than volume
- Quality commits over quantity
- Natural patterns (not perfectly timed)
- Document any unusual behavior
