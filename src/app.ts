import type { ParseClient } from 'seyfert'
import { registerHoshimiEvents } from './events/music/hoshimi'
import { MusicClient } from './utils/MusicClient'

const client = new MusicClient({
	commands: {
		prefix: () => ['!', '?', '.'],
	},
})

client
	.start()
	.then(() => client.uploadCommands({ cachePath: './commands.json' }))
	.catch((err) => client.logger.error('Failed to start client', err))

// Register Hoshimi events
registerHoshimiEvents(client)

declare module 'seyfert' {
	interface SeyfertRegistry {
		client: ParseClient<MusicClient>
	}
}
