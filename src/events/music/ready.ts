// src/events/music/ready.ts

import { client } from 'src/app'

client.kazagumo.shoukaku.on('ready', (name) =>
	client.logger.debug(`Lavalink ${name}: Ready!`),
)
