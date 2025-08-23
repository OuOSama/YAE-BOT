// src/events/music/raw.ts

import { createEvent } from 'seyfert'

export default createEvent({
	data: { once: false, name: 'raw' },
	run(user, client) {
		client.riffy.updateVoiceState(user)
	},
})
