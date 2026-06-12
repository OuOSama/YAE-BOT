// src/functions/getCommandList/getCommandList.ts

import type { UsingClient } from 'seyfert'
import type { APIApplicationCommand } from 'seyfert/lib/types'

export interface CommandInfo {
	name: string
	description: string
}

// รับ client เข้ามาเป็นอาร์กิวเมนต์เพื่อใช้ดึงข้อมูลจาก Discord API ค่ะ
export async function getCommandList(
	client: UsingClient,
): Promise<CommandInfo[]> {
	// ยิง API ไปดึง Global Commands ทั้งหมดของบอทเรา
	const globalCommands: APIApplicationCommand[] = await client.proxy
		.applications(client.applicationId)
		.commands.get()

	// นำมา .map() แปลงโครงสร้างส่งกลับไปเหมือนเดิม คลีนสุดๆ
	return globalCommands.map((cmd) => ({
		name: cmd.name,
		description: cmd.description,
	}))
}
