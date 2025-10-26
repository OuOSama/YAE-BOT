// src/events/music/nodeConnect.ts

import { client } from 'src/app'

client.riffy.on('nodeConnect', (node) => {
	client.logger.info(`✅ Lavalink Server: "${node.name}" connected.`)
})
