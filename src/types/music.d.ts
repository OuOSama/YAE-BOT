// src/types/music.d.ts

import type { Kazagumo } from 'kazagumo'

declare module 'seyfert' {
	interface UsingClient {
		kazagumo: Kazagumo
	}

	interface Client {
		kazagumo: Kazagumo
	}
}
