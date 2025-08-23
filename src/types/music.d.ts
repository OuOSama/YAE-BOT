// src/types/music.d.ts

import type { Riffy } from 'riffy'

declare module 'seyfert' {
	interface Client {
		riffy: Riffy
	}
	interface UsingClient {
		riffy: Riffy
	}
}
