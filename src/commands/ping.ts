// src/commands/ping.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'ping',
	description: '🌐 Show latency with Discord',
})
export default class PingCommand extends Command {
	async run(ctx: CommandContext) {
		// Average latency between existing connections
		const ping = ctx.client.gateway.latency

		await ctx.write({
			content: `The latency is \`${ping}\``,
			flags: MessageFlags.Ephemeral,
		})
	}
}
