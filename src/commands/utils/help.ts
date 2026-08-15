import { Command, type CommandContext, Declare, Embed } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import { getCommandList } from '@/functions/getCommandList/getCommandList'
@Declare({
	name: 'help',
	description: '📖 Show bot info.',
})
export default class HelpCommand extends Command {
	async run(ctx: CommandContext) {
		const commandsList = await getCommandList(ctx.client)

		const embed = new Embed()
			.setTitle('📖  Command List')
			.setColor(0x00ffff)
			.setDescription(
				'```\n ⚙️Commands   | 📑Descriptions\n--------------|----------------\n' +
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
