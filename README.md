![Logo](assets/YAE.png)

<div align="center">
  <img src="https://img.shields.io/github/license/OuOSama/YAE-BOT" alt="License">
  <img src="https://img.shields.io/github/stars/OuOSama/YAE-BOT" alt="Stars">
</div>


🦊 “YAE — Your All-in-one Discord Music Companion” 🌸

### 📋 Prerequisites
Before awake Yae, make sure you have the following installed:
- 😸 **[Git](https://git-scm.com/)** – Version Control
- ⚡ **[Bun](https://bun.sh/)** – super fast JavaScript/TypeScript runtime
- 🐳 **[Docker](https://www.docker.com/)** – required for running Lavalink audio server
- 🔑 **Discord Bot [Token](https://discord.com/developers/docs/intro)** – create a bot in Discord Developer Portal

## 🚀 Getting Started

### 💻 Installation

Clone the project

```bash
git clone https://github.com/OuOSama/YAE-BOT.git yae
```

Go to the project directory

```bash
cd yae
```

Install dependencies

```bash
bun install
```

<div align="center">
    <h1>Setup Lavalink and Yae</h1>
</div>

## 📝 Configuration
To run this project, copy `.env.example` into the **root project directory** and rename it to `.env.local`.

> ⚠️ **Important:** Make sure to fill in all required values inside `.env.local` before running the project.

Make sure your `.env.local` contains:

```env
# 🔑 Discord Bot Token
TOKEN       = your_discord_bot_token

# 🎵 Lavalink Config
HOST        = localhost
PASSWORD    = youshallnotpass
PORT        = 2333
SECURE      = false
```

and then
```bash
bun run lavalink-setup
```

<div align="center">
    <h1>Awake YAE!</h1>
</div>

```bash
bun run dev
```

## 🎯 Usage

Once Yae is running, invite the bot to your Discord server and use the following commands:

| Command           | Description                         |
|-------------------|------------------------------------|
| `/play <song>`    | 🎵 Play a song                     |
| `/pause`          | ⏸️ Pause current track             |
| `/resume`         | ▶️ Resume playback                 |
| `/stop`           | ⏹️ Stop playback and clear queue   |
| `/destroy`        | 🗑️ Destroy music player            |

## 🛠️ Built With

- **Bun** - Runtime environment
- **Seyfert** - Discord Framework
- **Lavalink** - Audio delivery system
- **Docker** - Containerization

## 🤝 Contributing

Contributions are always welcome! 

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 MIT License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Authors

- [@OuOSama](https://www.github.com/OuOSama) - *Initial work & Development*

## 🙏 Acknowledgments

- Thanks to the [Lavalink team](https://github.com/lavalink-devs) for the amazing audio server
- Seyfert [community](https://discord.com/invite/hEeJNaSqnS) for the excellent documentation
- All contributors who help improve Yae

<div align="center">
  <b>YAE Sama!</b>
</div>
