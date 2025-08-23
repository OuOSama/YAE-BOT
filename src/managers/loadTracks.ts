// src/managers/loadTracks.ts

import type { GuildMember } from 'seyfert'
import { client } from 'src/app'

export async function loadTracks(query: string, requester: GuildMember) {
	return client.riffy.resolve({ query, requester })
}
