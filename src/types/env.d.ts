// src/types/env.d.ts

declare module 'bun' {
	interface Env {
		// 🌙 Lunar ✨
		TOKEN: string

		// 🎵 Lavalink
		HOST: string
		PASSWORD: string
		PORT: number
		SECURE?: boolean
	}
}
