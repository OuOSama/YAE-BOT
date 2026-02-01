// src/commands/music/leave.ts

import type { KazagumoPlayer } from 'kazagumo'
import type { CommandContext } from 'seyfert/lib/commands'

export async function Leave(player: KazagumoPlayer, ctx: CommandContext) {
	player.destroy()
	return ctx.write({ content: '⏸️ Paused.' })
}
