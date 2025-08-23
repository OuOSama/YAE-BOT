// src/managers/createManager.ts

import type { LavalinkNode } from 'riffy'
import { Riffy } from 'riffy'
import { client } from 'src/app'

// 📒 Riffy config
const nodes: LavalinkNode[] = [
	{
		host: process.env.HOST,
		password: process.env.PASSWORD,
		port: process.env.PORT,
		secure: false,
	},
]

export function createManager(): Riffy {
	return new Riffy(client, nodes, {
		send(payload) {
			const guild = client.cache.guilds?.get(payload.d.guild_id)
			if (guild) guild?.shard?.send(true, payload)
		},
		defaultSearchPlatform: 'ytsearch',
		restVersion: 'v4',
		bypassChecks: {
			nodeFetchInfo: true,
		},
	})
}
