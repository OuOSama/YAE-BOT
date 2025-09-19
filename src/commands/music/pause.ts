// src/commands/music/pause.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { client } from 'src/app'

@Declare({
	name: 'pause',
	description: '⏸️ Pause the current song',
})
export default class PauseMusic extends Command {
	async run(ctx: CommandContext) {
		// Player
		const player = client.riffy.get(ctx.guildId as string)
		player.pause(true)
		await ctx.write({ content: 'Song has pause' })
	}
}
