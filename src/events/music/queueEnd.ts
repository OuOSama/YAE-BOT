// src/events/music/trackEnd.ts

import type { Player, RiffyEvents } from 'riffy'
import { client } from 'src/app'

client.riffy.on('queueEnd' as keyof RiffyEvents, (play: Player) => {
	// exit VC room when queue has end / no song to play anymore
	play.disconnect()
	client.logger.debug(`${client.me.name} has exit the VC Room`)
})
