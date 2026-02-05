// src/commands/ai/ai.ts

import {
	Command,
	type CommandContext,
	createStringOption,
	Declare,
	Options,
} from 'seyfert'

import { askAi } from './askAi'

const option = {
	chat: createStringOption({
		description: 'put text here',
		required: true,
	}),
}

@Declare({
	name: 'ai',
	description: 'All Ai features',
	guildId: ['1397230532533817459'],
})
@Options(option)
export default class Ai extends Command {
	async run(ctx: CommandContext<typeof option>) {
		await ctx.deferReply(true)
		const userText = ctx.options.chat
		const response = await askAi(userText)

		return ctx.editResponse({
			content: response.response,
		})
	}
}
