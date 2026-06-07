# AGENTS.md

## Project overview
- This repository is a Bun + TypeScript Discord bot built with Seyfert, with music support via Kazagumo/Shoukaku.
- Primary documentation: [README.md](README.md), [docs/git.md](docs/git.md), and [TODO.md](TODO.md).

## Essential commands
- Install dependencies: `bun install`
- Start development watch mode: `bun run dev`
- Start the bot normally: `bun run start`
- Run formatting/lint checks: `bun run check`
- Remove registered slash commands: `bun run remove-commands`

## Architecture notes
- Source code lives in `src/`.
- Command modules go under `src/commands/` and use Seyfert command classes with `@Declare(...)` metadata.
- Event handlers go under `src/events/`.
- Shared helpers live in `src/managers/`.
- Types and environment declarations are under `src/types/`.
- The app entry point is `src/app.ts`, which starts the client and uploads slash commands to `commands.json`.

## Coding conventions
- Use TypeScript strict mode and keep changes aligned with the existing decorator-based Seyfert style.
- Prefer existing project aliases such as `@/*` from `tsconfig.json`.
- Follow the current file layout and naming: `commands/<area>/<name>.ts`, `events/<area>/<name>.ts`, `managers/<name>.ts`.
- Use Biome for formatting/linting; do not introduce Prettier/ESLint-specific patterns.

## Environment and runtime
- The bot expects environment variables such as `TOKEN`, `LAVALINK_NAME`, `LAVALINK_HOST`, `LAVALINK_PASSWORD`, and `LAVALINK_SECURE` as documented in [README.md](README.md).
- `commands.json` is generated at runtime by the bot and should not be hand-edited.

## Common pitfalls
- The `remove-commands` script currently points to `src/script/remove_commandst.ts`, but the actual folder in this repo is `src/scripts/`. Verify paths before running maintenance scripts.
- Keep command and event changes minimal and consistent with the existing structure to avoid breaking Seyfert’s command discovery.
