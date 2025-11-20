// src/commands/music/resume.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'resume',
	description: '⏯️ Resume the current song',
})
export default class ResumeMusic extends Command {
	async run(ctx: CommandContext) {
		// Player
		if (!ctx.guildId) return
		const player = ctx.client.riffy.get(ctx.guildId)

		if (!player) return
		ctx.write({ content: '❌ No active player!' })

		// is paused?
		if (!player.playing) {
			player.pause(false) // resume
			await ctx.write({
				content: '▶️ Song resumed!',
				flags: MessageFlags.Ephemeral,
			})
		} else {
			await ctx.write({
				content: 'eh... Song is already playing',
				flags: MessageFlags.Ephemeral,
			})
		}
	}
}
