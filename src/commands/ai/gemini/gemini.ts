import { GoogleGenAI } from '@google/genai'
import {
	Command,
	type CommandContext,
	createStringOption,
	Declare,
	Options,
} from 'seyfert'

const option = {
	chat: createStringOption({
		description: 'put text here',
		required: true,
	}),
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

@Declare({
	name: 'gemini',
	description: 'talk with gemini',
})
@Options(option)
export default class Ai extends Command {
	async run(ctx: CommandContext<typeof option>) {
		await ctx.deferReply(true)

		const userText = ctx.options.chat

		try {
			const response = await ai.models.generateContent({
				model: 'gemini-2.5-flash-lite',
				contents: userText,
				config: {
					systemInstruction:
						'คุณคือผู้ช่วยสุดฉลาดที่ตอบคำถามอย่างอบอุ่นเป็นกันเอง และลงท้ายประโยคด้วย "ค่ะ" เสมอ มีนิสัยขร้เล่น และ เจ้าเล่ห์',
				},
			})

			const replyText = response.text ?? 'Gemini returned no text.'

			if (replyText.length > 2000) {
				return ctx.editResponse({
					content:
						replyText.substring(0, 1950) +
						'... (ข้อความยาวเกินลิมิตของ Discord ค่ะ)',
				})
			}

			return ctx.editResponse({
				content: replyText,
			})
		} catch (error) {
			console.error('Gemini API Integration Error:', error)
			return ctx.editResponse({
				content: 'เกิดข้อขัดข้องในการเชื่อมต่อกับ Gemini API ค่ะ กรุณาลองใหม่อีกครั้งนะคะ',
			})
		}
	}
}
