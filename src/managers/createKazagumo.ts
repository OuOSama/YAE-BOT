// src/managers/createKazagumo.ts

import { Kazagumo } from 'kazagumo'
import { Connectors } from 'shoukaku'

import { client } from '@/app'

export default function createKazagumo(): Kazagumo {
	const kazagumo = new Kazagumo(
		{
			defaultSearchEngine: 'youtube',
			send: (guildId, payload) =>
				client.gateway.send(client.gateway.calculateShardId(guildId), payload),
		},
		new Connectors.Seyfert(client),
		[
			{
				name: process.env.LAVALINK_NAME,
				url: process.env.LAVALINK_HOST,
				auth: process.env.LAVALINK_PASSWORD,
				secure: process.env.LAVALINK_SECURE,
			},
		],
	)

	kazagumo.shoukaku.on('error', (_, error) => console.error(error))

	return kazagumo
}
