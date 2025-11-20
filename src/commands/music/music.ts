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
import { play } from './play'

export const options = {
	play: createStringOption({
		description: 'Play a song from URL instantly',
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
	guildId: ['1397230532533817459'],
})
@Options(options)
export default class MusicManager extends Command {
	async run(ctx: CommandContext<typeof options>) {
		// check voice state and get query
		const query = ctx.options.play
		const member = ctx.member
		const guildId = ctx.guildId
		const textChannelId = ctx.channelId

		if (!member || !guildId || !query) {
			return ctx.write({ content: 'member or guild or query not found' })
		}

		const voiceState = ctx.client.cache.voiceStates?.get(member?.id, guildId)
		if (!voiceState) {
			return ctx.write({
				content: 'Ehh, join the VC (voice chat) first..',
				flags: MessageFlags.Ephemeral,
			})
		}

		const voiceChannelId = voiceState.channelId
		if (!voiceChannelId) return ctx.client.logger.warn('No Voice Channel ID')

		// Determine which action was triggered
		const action = ctx.options.play
			? 'play'
			: ctx.options.pause
				? 'pause'
				: ctx.options.resume
					? 'resume'
					: ctx.options.leave
						? 'leave'
						: null

		switch (action) {
			case 'play':
				await play({
					query,
					guildId,
					voiceChannelId,
					textChannelId,
					requester: member,
					ctx,
				})
				break

			case 'pause':
				// TODO: implement pause logic
				await ctx.write({ content: '⏸️ Pausing playback...' })
				break

			case 'resume':
				// TODO: implement resume logic
				await ctx.write({ content: '▶️ Resuming playback...' })
				break

			case 'leave':
				// TODO: implement leave logic
				await ctx.write({ content: '👋 Leaving voice channel...' })
				break

			default:
				await ctx.write({ content: '⚠️ Please specify an action!' })
				break
		}
	}
}
