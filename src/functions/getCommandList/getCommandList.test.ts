// src/functions/getCommandList/getCommandList.test.ts

import { expect, mock, test } from 'bun:test'
import type { UsingClient } from 'seyfert'
import { type CommandInfo, getCommandList } from './getCommandList'

test('getCommandList should return the correct structure from Discord API', async () => {
	// จำลองโครงสร้าง .proxy.applications().commands.get ให้ส่งข้อมูลจำลองกลับมา
	const mockClient = {
		applicationId: '1234567890',
		proxy: {
			applications: () => ({
				commands: {
					get: mock(() =>
						Promise.resolve([
							{ name: 'ping', description: '🏓 Pong!' },
							{ name: 'help', description: '📖 Help info' },
						]),
					),
				},
			}),
		},
	} as unknown as UsingClient // หลอก TypeScript ว่านี่คือ client ของจริงนะจ๊ะ

	// ส่ง Client ร่างจำลองเข้าไปเทสฟังก์ชัน
	const result = await getCommandList(mockClient)

	// ตรวจสอบความถูกต้อง
	expect(Array.isArray(result)).toBe(true)
	expect(result.length).toBe(2) // ข้อมูลที่เราแอบยัดไว้มี 2 ชุด ต้องได้ 2 ชิ้นพอดี

	const firstCommand: CommandInfo = result[0]
	expect(firstCommand.name).toBe('ping')
	expect(firstCommand.description).toBe('🏓 Pong!')
	expect(typeof firstCommand.name).toBe('string')
})
