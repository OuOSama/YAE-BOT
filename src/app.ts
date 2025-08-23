// src/app.ts

import { Client } from 'seyfert'
import { createManager } from './managers/createManager'

const client = new Client()
client.riffy = createManager()

client
	.start()
	.then(() => client.uploadCommands({ cachePath: './commands.json' }))
	.catch((err) => client.logger.error('Failed to start client', err))

export { client }
