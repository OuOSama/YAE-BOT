// src/events/music/trackEnd.ts

import { client } from 'src/app'

client.riffy.on('nodeConnect', (play) => {
	// exit VC room when queue has end / no song to play anymore
	play.disconnect()
	client.logger.debug(`${client.me.name} has exit the VC Room`)
})
