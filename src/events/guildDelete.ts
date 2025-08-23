// src/events/guildDelete.ts

import { createEvent } from 'seyfert'

export default createEvent({
	data: { name: 'guildDelete' },
	run(unguild, client) {
		// unguild is the server from which the bot was removed or deleted.
		// It is also possible that the server was simply deleted.
		if (unguild.unavailable) return

		client.logger.info(`I was removed from: ${unguild.id}`)
	},
})
