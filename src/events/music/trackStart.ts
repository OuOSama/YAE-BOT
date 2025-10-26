// src/events/music/trackStart.ts

import { client } from 'src/app'

client.riffy.on('trackStart', (play) => {
	client.logger.debug(`now playing ${play.current.info.author}`)
})
