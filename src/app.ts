// src/app.ts

import { Client } from 'seyfert'
import createKazagumo from './managers/createKazagumo'

const client = new Client()

//Basic configuration, perfect for this case
client.kazagumo = createKazagumo()

client
	.start()
	.then(() => client.uploadCommands({ cachePath: './commands.json' }))
	.catch((err) => client.logger.error('Failed to start client', err))

export { client }
