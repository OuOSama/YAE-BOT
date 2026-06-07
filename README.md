
![YAE Bot](assets/YAE.png)

## 🌐 Overview

YAE-BOT is a lightweight Discord companion built with Bun & Seyfert.

### 📁 Project Structure

```text
src/
├── app.ts                 # Starts the bot and uploads slash commands
├── commands/              # Slash command modules for AI, music, and utilities
│   ├── ai/                # AI-related command handlers
│   ├── music/             # Music playback commands
│   └── utils/             # Helper commands such as /help
├── events/                # Bot and music event listeners
├── managers/              # Shared logic like Lavalink setup
├── scripts/               # Maintenance scripts
└── types/                 # TypeScript env and music declarations
```

## ✨ Features

### General

| Command | Description |
| --- | --- |
| `/help` | Show available slash commands and bot info |

### AI

| Command | Description |
| --- | --- |
| `/ai chat <message>` | Send a prompt to the connected AI backend |

### Music

| Command | Description |
| --- | --- |
| `/music play <query-or-url>` | Search for and play a song |
| `/music pause` | Pause the current track |
| `/music resume` | Resume playback |
| `/music leave` | Disconnect the bot from the voice channel |

## 🛠️ Tech Stack

| Tool / Library | Purpose |
| --- | --- |
| Bun | Runtime and package management |
| TypeScript | Main programming language |
| Seyfert | Discord bot framework |
| Kazagumo + Shoukaku | Lavalink music playback support |
| Biome | Formatting and linting |

## 📥 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OuOSama/YAE-BOT.git
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

4. Create or update your `.env` file with the following values:

   ```dotenv
   # 🔑 Discord Bot Token
   TOKEN               = REPLACE_WITH_YOUR_BOT_TOKEN_HERE

   # 🎵 Lavalink Config
   LAVALINK_NAME                = Node                     # 🔥Node,Server, etc...
   LAVALINK_HOST                = localhost:2333           # 🌍 host (localhost / IP) ex: localhost:2333
   LAVALINK_PASSWORD            = your_lavalink_password   # 🔒 Lavalink password
   LAVALINK_SECURE              = true                     # ❎ true/false

   # 😎 Backend
   # Repository: https://github.com/OuOSama/YAE-BACKEND
   BACKEND_URL         = "http://localhost:3001"           # 🛡️ URL of our Elysia backend (HTTP)
   BACKEND_WS_URL      = "ws://localhost:3001"             # 🎯 URL of our Elysia backend (WebSocket)
   ```

## ▶️ Running the Bot

### Development mode

```bash
bun run dev
```

### Production mode

```bash
bun run start
```

## 🔧 Useful Scripts

```bash
bun run dev
bun run start
bun run check
bun run remove-commands
```

- `bun run check` runs Biome formatting/lint checks.
- `bun run remove-commands` removes registered slash commands.

## 📝 Notes

- Slash commands are uploaded from `src/app.ts` into `commands.json` at runtime.
- Music playback requires a working Lavalink instance.

## 📜 License

This project is licensed under the MIT License.
