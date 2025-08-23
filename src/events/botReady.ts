// src/events/botReady.ts

import { createEvent } from 'seyfert'

export default createEvent({
	// botReady is triggered when all shards and servers are ready.
	// `once` ensures the event runs only once.
	data: { once: true, name: 'botReady' },
	run(user, client) {
		client.riffy.init(client.botId)
		// check Riffy was init?
		if (client.riffy.initiated) {
			client.logger.info('INIT SUCCESS!')
		}
		//  We can use client.logger to display messages in the console.
		client.logger.info(`${user.username} is ready`)
	},
})
