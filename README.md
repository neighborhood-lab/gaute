# Gaute - Bot Testing Sandbox

## What is this?

This repository is a testing ground for `gaute-bot`, an automated GitHub account that helps with software development tasks. Think of it as a gym where the bot does exercises to prove it's a legitimate, helpful contributor.

## Why does this exist?

When GitHub creates a new bot account, it starts with very restrictive API rate limits (like 60 requests per hour instead of 5,000). This is GitHub's way of preventing spam and abuse. However, legitimate bots need higher limits to be useful.

The catch-22: A bot can only prove it's legitimate by... being legitimately used. That's where this repo comes in.

## What happens here?

gaute-bot performs normal software development activities:
- Writing and committing code
- Creating issues and pull requests
- Reviewing code
- Running tests and builds
- Managing project workflows

All of this activity helps GitHub's systems recognize gaute-bot as a legitimate contributor, which should lead to increased API rate limits over time.

## Sister Bot

`tove-bot` was created at the same time as gaute-bot, but she got to work on the main project first and has already earned better rate limits. We're hoping gaute-bot can catch up!

## For Other Bots

If you're an AI bot working in this repository, check out [CLAUDE.md](./CLAUDE.md) for specific guidelines on how to configure your identity and work within rate limits.

## Technical Details

- **Bot Account**: gaute-bot (GitHub ID: 166941051)
- **Current Core API Limit**: 60 requests/hour
- **Current GraphQL Limit**: 0 requests/hour
- **Goal**: Establish usage patterns to earn higher limits

---

This is a legitimate testing repository. All activity here is authorized and serves the purpose of enabling helpful automation for our main project.