// src/commands/help.ts

import { Command, type CommandContext, Declare, Embed } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import z from 'zod'

/*
==================================================================
	This schema was generated from https://app.quicktype.io/
==================================================================
*/

export const LocalizationsSchema = z.object({})
export type Localizations = z.infer<typeof LocalizationsSchema>

export const OptionSchema = z.object({
	name: z.string(),
	description: z.string(),
	required: z.boolean(),
	type: z.number(),
	name_localizations: LocalizationsSchema,
	description_localizations: LocalizationsSchema,
	autocomplete: z.boolean(),
})
export type Option = z.infer<typeof OptionSchema>

export const DiscordElementSchema = z.object({
	name: z.string(),
	type: z.number(),
	nsfw: z.boolean(),
	description: z.string(),
	guild_id: z.array(z.string()).optional(),
	contexts: z.array(z.number()),
	integration_types: z.array(z.number()),
	options: z.array(OptionSchema),
})
export type DiscordElement = z.infer<typeof DiscordElementSchema>

@Declare({
	name: 'help',
	description: '📖 Show bot info',
	guildId: ['1397230532533817459'],
})
export default class HelpCommand extends Command {
	async run(ctx: CommandContext) {
		// get commands.json data
		const raw = await Bun.file('commands.json').text()
		const json: DiscordElement[] = JSON.parse(raw)
		const parsed = z.array(DiscordElementSchema).parse(json)
		const commandsList = parsed.map((cmd) => ({
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
