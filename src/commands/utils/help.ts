// src/commands/utils/help.ts

import { Command, type CommandContext, Declare, Embed } from 'seyfert'
import { type APIApplicationCommand, MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'help',
	description: '📖 Show bot info.',
})
export default class HelpCommand extends Command {
	async run(ctx: CommandContext) {
		// get commands.json data
		const raw = await Bun.file('commands.json').text()
		const json: APIApplicationCommand[] = JSON.parse(raw)
		const commandsList = json.map((cmd) => ({
			name: cmd.name,
			description: cmd.description,
		}))

		const embed = new Embed()
			.setTitle('📖  Command List')
			.setColor(0x00ffff)
			.setDescription(
				'```\n ⚙️Commands   | 📑Descriptions\n--------------|---------------------------\n' +
					commandsList
						.map((c) => `/${c.name.padEnd(12)} | ${c.description}`)
						.join('\n') +
					'\n```',
			)

		await ctx.write({
			embeds: [embed],
			flags: MessageFlags.Ephemeral,
		})
	}
}
