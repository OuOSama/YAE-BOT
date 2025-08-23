// src/commands/music/destroy.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { client } from 'src/app'

@Declare({
	name: 'destroy',
	description: 'destroy current music player',
})
export default class PauseMusic extends Command {
	async run(ctx: CommandContext) {
		// Player
		const player = client.riffy.get(ctx.guildId as string)
		player.destroy()
		await ctx.write({ content: 'music player has destroy' })
	}
}
