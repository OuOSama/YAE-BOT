// src/events/music/playerEnd.ts

import { client } from 'src/app'

client.kazagumo.on('playerEnd', async (player) => {
	await player.destroy()
	client.logger.debug('SEE YA~')
})
