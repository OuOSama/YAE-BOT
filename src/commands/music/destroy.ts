// src/commands/music/destroy.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import { client } from 'src/app'

@Declare({
	name: 'destroy',
	description: '💥 Destroy the current music player',
})
export default class DestroyPlayer extends Command {
	async run(ctx: CommandContext) {
		// Player
		const player = client.riffy.get(ctx.guildId as string)
		player.destroy()
		await ctx.write({
			content: 'music player has destroy',
			flags: MessageFlags.Ephemeral,
		})
	}
}
