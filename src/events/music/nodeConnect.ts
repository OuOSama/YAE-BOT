// src/events/music/nodeConnect.ts

import type { Node, RiffyEvents } from 'riffy'
import { client } from 'src/app'

client.riffy.on('nodeConnect' as keyof RiffyEvents, (node: Node) => {
	client.logger.info(`Node "${node.name}" connected.`)
})
