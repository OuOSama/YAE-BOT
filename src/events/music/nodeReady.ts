import { createEvent } from 'seyfert'

export default createEvent({
	data: { name: 'raw' },
	run(_payload, client) {
		client.hoshimi.on('nodeReady', () => {
			console.log('Node is ready')
		})
	},
})
