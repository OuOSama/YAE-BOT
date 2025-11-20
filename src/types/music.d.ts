// src/types/music.d.ts

import type { Player, Riffy, RiffyEvents, Track } from 'riffy'

interface TrackPayload {
	[key: string]: unknown
}

interface PlayerPayload {
	[key: string]: unknown
}

// Helper type สำหรับ event handlers ที่มี track
type TrackEventHandler = (
	player: Player,
	track: Track,
	payload: TrackPayload,
) => void
type PlayerEventHandler = (player: Player, payload: PlayerPayload) => void

// Auto-map จาก RiffyEvents
type RiffyEventMap = {
	[K in keyof RiffyEvents as K extends `${infer Name}`
		? Name
		: never]: K extends 'trackStart' | 'trackEnd' | 'trackError' | 'trackStuck'
		? TrackEventHandler
		: K extends 'socketClosed' | 'playerUpdate'
			? PlayerEventHandler
			: RiffyEvents[K]
}

declare module 'seyfert' {
	interface Client {
		riffy: Riffy
	}
	interface UsingClient {
		riffy: Riffy
	}
}

declare module 'riffy' {
	interface Riffy {
		on<K extends keyof RiffyEventMap>(
			event: K,
			listener: RiffyEventMap[K],
		): this
		once<K extends keyof RiffyEventMap>(
			event: K,
			listener: RiffyEventMap[K],
		): this
		off<K extends keyof RiffyEventMap>(
			event: K,
			listener: RiffyEventMap[K],
		): this
	}
}
