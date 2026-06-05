// src/app.ts

import { Client } from 'seyfert'
import createKazagumo from '@/managers/createKazagumo.js'

const client = new Client({
	commands: {
		prefix: () => {
			// here you can handle whatever prefixes you want depending on the message data.
			return ['!', '?', '.']
		},
	},
})

//Basic configuration, perfect for this case
client.kazagumo = createKazagumo()

client
	.start()
	.then(() => client.uploadCommands({ cachePath: './commands.json' }))
	.catch((err) => client.logger.error('Failed to start client', err))

export { client }
