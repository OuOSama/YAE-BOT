import type {
	ChannelDeletePacket,
	VoicePacket,
	VoiceServer,
	VoiceState,
} from 'hoshimi'
import { createEvent } from 'seyfert'

//Discord delivers voice updates through the raw event; forward them to hoshimi.
type AnyPacket = VoicePacket | VoiceServer | VoiceState | ChannelDeletePacket

export default createEvent({
	data: { name: 'raw' },
	run(payload, client) {
		client.hoshimi.updateVoiceState(payload as AnyPacket)
	},
})
