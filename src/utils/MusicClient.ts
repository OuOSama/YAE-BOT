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
				host: 'lavalinkv4.serenetia.com',
				port: 443,
				password: 'https://seretia.link/discord',
				secure: true,
			},
		],
	})
}
