import { Hoshimi, SearchSources } from 'hoshimi'
import { Client } from 'seyfert'

//A custom client that holds the hoshimi manager
export class MusicClient extends Client {
	hoshimi = new Hoshimi({
		defaultSearchSource: SearchSources.Youtube,
		sendPayload: async (guildId, payload) => {
			await this.gateway.send(this.gateway.calculateShardId(guildId), payload)
		},
		nodes: [
			{
				host: process.env.LAVALINK_HOST,
				port: Number(process.env.LAVALINK_PORT),
				password: process.env.LAVALINK_PASSWORD,
				secure: true, // Set to true if your Lavalink server uses HTTPS
			},
		],
	})
}
