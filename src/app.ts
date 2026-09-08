import type { ParseClient } from 'seyfert'
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

declare module 'seyfert' {
	interface SeyfertRegistry {
		client: ParseClient<MusicClient>
	}
}

export { client }
