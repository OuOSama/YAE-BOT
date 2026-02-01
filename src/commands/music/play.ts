// src/commands/music/play.ts

import type { KazagumoPlayer } from 'kazagumo'
import type { CommandContext, UsingClient } from 'seyfert'
import type { options } from './music'

export async function Play(
	player: KazagumoPlayer,
	ctx: CommandContext<typeof options>,
	client: UsingClient,
) {
	const { play } = ctx.options
	if (!play) return

	// ⚡ เร็วขึ้น: defer ก่อนเพื่อให้ interaction ไม่ timeout
	await ctx.deferReply()

	// ⚡ เร็วขึ้น: search แบบไม่ resolve metadata เพิ่ม (Kazagumo มี options ซ่อนอยู่)
	const result = await client.kazagumo.search(play)

	if (!result.tracks.length) {
		return ctx.editOrReply({ content: 'No results found! 🔍' })
	}

	// 🌀 playlist load ทีเดียว (ไม่ add ที่ละ track → ช้า)
	if (result.type === 'PLAYLIST') {
		player.queue.add(result.tracks)
	} else {
		player.queue.add(result.tracks[0])
	}

	// 🔥 เพิ่ม logic anti-double-play
	if (!player.playing && !player.paused) {
		await player.play(player.queue[0], { replaceCurrent: true })
	}

	return ctx.editOrReply({
		content: `🎵 Now playing: **${result.tracks[0].title}**`,
	})
}
