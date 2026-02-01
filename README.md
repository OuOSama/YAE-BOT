<div align="center">

![Logo](assets/YAE.png)

# 🦊 YAE-BOT

> *Your All-in-One Discord Music Companion* 🌸

*Bring high-quality music to your Discord server with style* ✨

[Features](#-features) • [Installation](#-installation) • [Commands](#-commands) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

**YAE-BOT** is a powerful, performant Discord music bot built with Bun and Seyfert. Leveraging Lavalink for crystal-clear audio delivery, YAE brings your favorite tunes to life in your Discord voice channels with minimal latency and maximum vibes.

Whether you're hosting a listening party, coding with lofi beats, or just chilling with friends, YAE is your perfect companion. 💜

---

## ✨ Features

- 🎵 **High-Quality Audio** — Powered by Lavalink for pristine sound
- ⚡ **Lightning Fast** — Built with Bun for instant response times
- 🎯 **Slash Commands** — Modern Discord UI with intuitive commands
- 🔄 **Queue Management** — Play, pause, skip, and control your playlist
- 🐳 **Docker-Ready** — Easy setup with containerized Lavalink
- 🎨 **Clean Code** — Maintainable architecture built with Seyfert framework
- 💜 **Active Development** — Regular updates and improvements

---

## 📋 Prerequisites

Before awakening Yae, make sure you have these tools ready:

| Tool | Version | Description | Installation |
|------|---------|-------------|--------------|
| 😸 **Git** | Latest | Version control system | [Download](https://git-scm.com/) |
| ⚡ **Bun** | Latest | Super-fast JavaScript runtime | [Install](https://bun.sh/) |
| 🐳 **Docker** | Latest | Container platform for Lavalink | [Get Docker](https://www.docker.com/) |
| 🔑 **Discord Bot Token** | — | From Discord Developer Portal | [Create Bot](https://discord.com/developers/docs/intro) |

> 💡 **New to Discord bots?** Check out [this guide](https://discord.com/developers/docs/getting-started) to create your bot and get your token!

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/OuOSama/YAE-BOT.git yae
cd yae
```

### 2️⃣ Install Dependencies

```bash
bun install
```

Bun will handle all dependencies in seconds. It's built different. ⚡

---

## 📝 Configuration

### Step 1: Create Environment File

Copy the example environment file:

```bash
cp .env.example .env.local
```

### Step 2: Configure Your Bot

Open `.env.local` and fill in your credentials:

```env
# 🔑 Discord Bot Configuration
TOKEN = your_discord_bot_token_here

# 🎵 Lavalink Server Settings
LAVALINK_NAME                = Node                     # 🔥Node,Server, etc...
LAVALINK_HOST                = localhost:2333           # 🌍 host (localhost / IP) ex: localhost:2333
LAVALINK_PASSWORD            = your_lavalink_password   # 🔒 Lavalink password

# 😎 Backend
# Repository: https://github.com/OuOSama/YAE-BACKEND
BACKEND_URL         = "http://localhost:3001"           # 🛡️ URL of our Elysia backend (HTTP)
BACKEND_WS_URL      = "ws://localhost:3001"             # 🎯 URL of our Elysia backend (WebSocket)
```

> ⚠️ **Important**: Never commit your `.env.local` file to Git! It contains sensitive credentials.

---

## 🎬 Launch YAE

Time to bring your bot to life! 🦊✨

### Development Mode

```bash
bun run dev
```

### Production Mode

```bash
docker build  -t yae .
```

Once running, invite your bot to your Discord server using the OAuth2 URL from the Discord Developer Portal!

---

## 🎯 Commands

Once Yae is awake and in your server, use these slash commands:

### Music Controls

| Command | Description | Usage |
|---------|-------------|-------|
| `/play <song>` | 🎵 Play a song from YouTube, Spotify, or direct URL | `/play lofi hip hop` |
| `/pause` | ⏸️ Pause the current track | `/pause` |
| `/resume` | ▶️ Resume playback | `/resume` |
| `/skip` | ⏭️ Skip to the next song in queue | `/skip` |
| `/stop` | ⏹️ Stop playback and clear the queue | `/stop` |
| `/queue` | 📋 View the current song queue | `/queue` |
| `/nowplaying` | 🎶 Show currently playing track | `/nowplaying` |
| `/volume <0-100>` | 🔊 Adjust playback volume | `/volume 50` |
| `/destroy` | 🗑️ Destroy the music player instance | `/destroy` |

### Utility Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `/help` | 📖 Display all available commands | `/help` |
| `/ping` | 🏓 Check bot latency | `/ping` |

> 💡 **Pro tip**: Use `/play` with song names, YouTube URLs, or Spotify links!

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose | Why We Use It |
|------------|---------|---------------|
| **[Bun](https://bun.sh)** | Runtime | Lightning-fast execution, built-in TypeScript |
| **[Seyfert](https://seyfert.dev)** | Discord Framework | Modern, type-safe Discord bot development |
| **[Lavalink](https://github.com/lavalink-devs/Lavalink)** | Audio Server | High-quality, low-latency audio streaming |
| **[Docker](https://www.docker.com)** | Containerization | Easy Lavalink deployment and management |

</div>

---

## 📂 Project Structure

```
yae-bot/
├── src/
│   ├── commands/          # Slash command implementations
│   ├── events/            # Discord event handlers
│   ├── structures/        # Core bot classes
│   ├── utils/             # Helper functions
│   └── index.ts           # Entry point
├── assets/
│   └── YAE.png           # Bot logo and assets
├── .env.example           # Environment template
├── docker-compose.yml     # Lavalink container config
├── package.json           # Dependencies
└── README.md              # You are here!
```

---

## 🐛 Troubleshooting

### Common Issues

**Bot doesn't respond to commands**
- ✅ Verify your bot token in `.env.local`
- ✅ Ensure the bot has proper permissions in your server
- ✅ Check that slash commands are registered (restart the bot)

**No audio output**
- ✅ Confirm Lavalink is running: `docker ps`
- ✅ Check Lavalink credentials match your `.env.local`
- ✅ Verify the bot has permission to connect to voice channels

**Lavalink won't start**
- ✅ Ensure Docker Desktop is running
- ✅ Check if port 2333 is already in use
- ✅ View logs: `docker logs lavalink`

**"Module not found" errors**
- ✅ Run `bun install` again
- ✅ Clear cache: `rm -rf node_modules && bun install`

---

## 🌈 Roadmap

Exciting features coming soon:

- [ ] Playlist support (save and load playlists)
- [ ] Advanced queue management (shuffle, loop, remove)
- [ ] Music filters and effects
- [ ] Web dashboard for server configuration
- [ ] Multi-language support
- [ ] Spotify integration improvements
- [ ] Lyrics display
- [ ] Custom prefix support (alongside slash commands)

---

## 🤝 Contributing

We'd love your help making YAE even better! Contributions are always welcome. 💜

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'feat: add some AmazingFeature'
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Keep commits atomic and meaningful
- Be respectful and constructive

---

## 💖 Acknowledgments

Special thanks to the amazing projects and communities that made YAE possible:

- 🎵 [Lavalink Team](https://github.com/lavalink-devs) — For the incredible audio server
- 🤖 [Seyfert Community](https://discord.com/invite/hEeJNaSqnS) — For excellent framework and documentation
- ⚡ [Bun Team](https://bun.sh) — For the blazing-fast runtime
- 🦊 All contributors and supporters who help improve YAE ✨

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You're free to use, modify, and distribute this project. Just keep it based. 💜

---

## 👨‍💻 Author

**Created with 💜 by [@OuOSama](https://github.com/OuOSama)**

Part of the YAE ecosystem:
- [YAE-AI](https://github.com/OuOSama/YAE-AI) — AI VTuber framework
- [YAE-BACKEND](https://github.com/OuOSama/YAE-BACKEND) — Backend services
- [YAE-BOT](https://github.com/OuOSama/YAE-BOT) — You are here!

---

<div align="center">

### 🦊 YAE Sama! 🌸

**Made with 💜 for the Discord community**

*Stay based, stay musical* ✨

**[⭐ Star the Repo](https://github.com/OuOSama/YAE-BOT)** • **[🐛 Report Bug](https://github.com/OuOSama/YAE-BOT/issues)** • **[💡 Request Feature](https://github.com/OuOSama/YAE-BOT/discussions)**

</div>
