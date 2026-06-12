---
name: seyfert-docs
description: "Use when: you encounter unfamiliar Seyfert syntax, decorators, framework errors, or API changes. Fetch the latest official references from https://www.seyfert.dev/ before making assumptions or editing code."
---

# Seyfert Documentation Workflow

Use this skill whenever Seyfert syntax, decorators, command metadata, client setup, or framework errors are unfamiliar or seem outdated.

## Goal

Avoid guessing. Confirm the current, official behavior from the Seyfert docs before implementing or fixing code.

## Workflow

1. Identify the exact unknown item
   - decorator name
   - option helper
   - command/event pattern
   - runtime error or incorrect API usage

2. Open the official Seyfert documentation
   - Official docs: https://www.seyfert.dev/
   - Guide and setup pages: https://www.seyfert.dev/guide
   - Release notes and updates: https://www.seyfert.dev/blog
   - Prefer the latest guides, examples, and API references over memory or older snippets

3. Verify the current pattern
   - confirm the correct import path
   - confirm the supported decorator or option format
   - confirm the expected runtime behavior for the error you are seeing

4. Apply the verified pattern to the code
   - update the implementation only after the official reference matches the need
   - keep the fix minimal and consistent with the existing project style

5. Validate the result
   - run the relevant checks or build command
   - confirm the framework behavior matches the docs

## Decision Rules

- If the syntax or error is unfamiliar, consult the official docs first.
- If a snippet or old example conflicts with current docs, trust the docs.
- If the docs are unclear, note the uncertainty and gather the next relevant page before changing code.

## Completion Checklist

- Official Seyfert reference was reviewed for the relevant topic
- The implementation matches the documented API or pattern
- No guesswork was left unverified
- The fix or code change is consistent with the current project structure
