# Security Policy

## Reporting Security Issues

If you discover a security vulnerability in this repository, please report it privately.

### How to Report

1. **Do not** open a public issue
2. Contact the repository owner directly
3. Provide detailed information about the vulnerability
4. Allow reasonable time for a fix before public disclosure

## Sensitive Information

### What Not to Commit

- API tokens or keys
- Passwords or credentials
- Private keys
- Personal information
- Database connection strings

### Protected Files

The following files are in `.gitignore` and should never be committed:
- `.secrets.txt` - Contains local credentials
- Any file with actual API tokens

## Best Practices

### For Contributors

- Never commit secrets
- Use environment variables for sensitive data
- Review changes before pushing
- Report accidental commits immediately

### For Bot Operations

- Rotate tokens regularly
- Use minimal required permissions
- Monitor for unusual activity
- Keep credentials in `.secrets.txt` (gitignored)

## Scope

This is a testing repository with no production use. However, we still maintain security best practices to protect credentials and prevent accidental exposure.
