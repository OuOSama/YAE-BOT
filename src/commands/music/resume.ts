// src/commands/music/resume.ts

import type { KazagumoPlayer } from 'kazagumo'
import type { CommandContext } from 'seyfert/lib/commands'

export async function Resume(player: KazagumoPlayer, ctx: CommandContext) {
	player.pause(false)
	return ctx.write({ content: '▶️ Resumed.' })
}
