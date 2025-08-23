// src/managers/createPlayer.ts

import { client } from 'src/app'

export function playerCreate(
	guildId: string,
	textChannel: string,
	voiceChannel: string,
) {
	return client.riffy.createConnection({
		guildId: guildId,
		textChannel: textChannel,
		voiceChannel: voiceChannel,
		deaf: true,
	})
}
