// src/events/music/trackStart.ts

import type { Player, RiffyEvents } from 'riffy'
import { client } from 'src/app'

client.riffy.on('trackStart' as keyof RiffyEvents, (play: Player) => {
	client.logger.debug(`now playing ${play.current.info.author}`)
})
