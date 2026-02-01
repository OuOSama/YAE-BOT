// src/types/env.d.ts

declare module 'bun' {
	interface Env {
		// 🌙 Application token
		TOKEN: string

		// 🎵 Lavalink
		LAVALINK_NAME: string
		LAVALINK_HOST: string
		LAVALINK_PASSWORD: string
		LAVALINK_SECURE: boolean

		// Backend
		BACKEND_URL: string
		BACKEND_WS_URL: string
	}
}
