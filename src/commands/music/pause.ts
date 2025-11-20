// src/commands/music/pause.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'pause',
	description: '⏸️ Pause the current song',
})
export default class PauseMusic extends Command {
	async run(ctx: CommandContext) {
		// Player
		if (!ctx.guildId) return
		const player = ctx.client.riffy.get(ctx.guildId)
		player.pause(true)
		await ctx.write({
			content: 'Song has pause',
			flags: MessageFlags.Ephemeral,
		})
	}
}
