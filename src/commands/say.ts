// src/commands/say.ts

import { Command, type CommandContext, Declare } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'

@Declare({
	name: 'say',
	description: 'Speak your message to the VC channel.',
})
export default class TTS extends Command {
	async run(ctx: CommandContext) {
		if (!ctx.member?.id || !ctx.member?.guildId) return
		const userId = ctx.member.id
		const guildId = ctx.member.guildId

		//  check user voice state
		const userVoiceState = ctx.client.cache.voiceStates?.get(userId, guildId)

		if (!userVoiceState?.channelId) {
			return ctx.write({
				content: 'คุณต้องอยู่ใน voice channel ก่อนนะคะ! 🎤',
				flags: MessageFlags.Ephemeral,
			})
		}

		// check bot voice state
		const botId = ctx.client.botId
		const botVoiceState = ctx.client.cache.voiceStates?.get(botId, guildId)

		if (!botVoiceState?.channelId) {
			return ctx.write({
				content: 'Bot ยังไม่ได้อยู่ใน voice channel นะคะ กำลัง join... 🎵',
				flags: MessageFlags.Ephemeral,
			})
		}

		if (botVoiceState.channelId !== userVoiceState.channelId) {
			return ctx.write({
				content: `Bot อยู่ใน <#${botVoiceState.channelId}> แล้วนะคะ คุณต้องมาอยู่ channel เดียวกันนาา 🎧`,
				flags: MessageFlags.Ephemeral,
			})
		}

		console.log('Voice Channel ID:', userVoiceState.channelId)
		console.log('User:', userId, 'in Guild:', guildId)
		console.log('Bot is in the same channel!')

		await ctx.write({
			content: `Perfect! เราอยู่ <#${userVoiceState.channelId}> ด้วยกันแล้ว! 🎵✨`,
			flags: MessageFlags.Ephemeral,
		})
	}
}
