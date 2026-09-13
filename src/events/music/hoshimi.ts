import type { MusicClient } from '@/utils/MusicClient'

export function registerHoshimiEvents(client: MusicClient) {
	client.hoshimi.on('nodeReady', (node) => {
		client.logger.info(`Node ${node.options.id} is ready!`)
	})
}
