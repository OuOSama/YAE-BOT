// src/commands/music/leave.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'leave',
	description: '💥 leave from vc',
})
export default class DestroyPlayer extends Command {
	async run(ctx: CommandContext) {
		// Player
		if (!ctx.guildId) return
		const player = ctx.client.riffy.get(ctx.guildId)
		player.destroy()
		await ctx.write({
			content: 'music player has destroy',
			flags: MessageFlags.Ephemeral,
		})
	}
}
