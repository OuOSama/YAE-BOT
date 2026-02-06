// src/commands/music/music.ts

import {
	Command,
	type CommandContext,
	createBooleanOption,
	createStringOption,
	Declare,
	Options,
} from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import { Leave } from './leave'
import { Pause } from './pause'
import { Play } from './play'
import { Resume } from './resume'

export const options = {
	play: createStringOption({
		description: 'Play a song from URL or search instantly',
	}),
	pause: createBooleanOption({
		description: 'Pause current song',
	}),
	resume: createBooleanOption({
		description: 'Resume playback',
	}),
	leave: createBooleanOption({
		description: 'Leave voice channel',
	}),
}

@Declare({
	name: 'music',
	description: 'All Music Functions',
})
@Options(options)
export default class MusicManager extends Command {
	async run(ctx: CommandContext<typeof options>) {
		const { client, guildId, channelId, member } = ctx
		const { play, pause, resume, leave } = ctx.options

		if (!member || !guildId) {
			return ctx.write({ content: 'Member or guild not found. 👻' })
		}

		// ❤️ voice state
		const voice = ctx.client.cache.voiceStates?.get(member.id, guildId)
		const voiceId = voice?.channelId
		if (!voiceId) {
			return ctx.write({
				content: 'You must be in a voice channel to play music. 🎵',
				flags: MessageFlags.Ephemeral,
			})
		}

		// ⚡ re-use player
		let player = client.kazagumo.players.get(guildId)

		if (!player) {
			try {
				player = await client.kazagumo.createPlayer({
					guildId,
					textId: channelId,
					voiceId,
					volume: 100,
				})
			} catch (error) {
				console.error('Failed to create player:', error)
				return ctx.write({
					content: 'Failed to connect to voice channel. Try again! 😭',
					flags: MessageFlags.Ephemeral,
				})
			}
		}

		// 🔥 Actions
		if (play) return Play(player, ctx, client)

		if (pause) return Pause(player, ctx)

		if (leave) return Leave(player, ctx)

		if (resume) return Resume(player, ctx)

		return ctx.write({
			content: 'Please specify an action! 🎶',
			flags: MessageFlags.Ephemeral,
		})
	}
}
