// src/managers/loadTracks.ts

import type { InteractionGuildMember } from 'seyfert'
import { client } from 'src/app'

export async function loadTracks(
	query: string,
	requester: InteractionGuildMember,
) {
	return client.riffy.resolve({ query, requester })
}
