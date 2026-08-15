import { client } from '@/app'

client.hoshimi.on('nodeReady', () => {
	console.log("i'm ready!")
})
