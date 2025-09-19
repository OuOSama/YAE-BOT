// src/types/env.d.ts

declare module 'bun' {
	interface Env {
		// 🌙 Application token
		TOKEN: string

		// 🎵 Lavalink
		HOST: string
		PASSWORD: string
		PORT: number
	}
}
