// src/types/env.d.ts

declare module 'bun' {
	interface Env {
		// 🌙 Application token
		TOKEN: string

		// Backend
		BACKEND_URL: string
		BACKEND_WS_URL: string

		// External
		GEMINI_API_KEY: string
	}
}
