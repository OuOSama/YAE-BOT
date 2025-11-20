// src/commands/music/play.ts

import type { CommandContext, InteractionGuildMember } from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import { playerCreate } from 'src/managers/createPlayer'
import { loadTracks } from 'src/managers/loadTracks'

interface PlayType {
	query: string
	guildId: string
	voiceChannelId: string
	textChannelId: string
	requester: InteractionGuildMember
	ctx: CommandContext
}

export async function play({
	query,
	guildId,
	voiceChannelId,
	textChannelId,
	requester,
	ctx,
}: PlayType) {
	const player = playerCreate(guildId, textChannelId, voiceChannelId)
	const result = await loadTracks(query, requester)

	if (!player.connected) player.connect()

	// 📚 Reject playlists
	if (result.loadType === 'playlist') {
		return ctx.write({
			content: `can't play this playlist`,
			flags: MessageFlags.Ephemeral,
		})
	}

	// 🎵 Get the new track
	const newTrack = result.tracks[0]
	if (!newTrack) {
		return await ctx.write({
			content: "I can't find this song. ❌",
			flags: MessageFlags.Ephemeral,
		})
	}

	// If something is currently playing, save it
	const wasPlaying = player.playing
	const currentTrack = player.current

	if (wasPlaying && currentTrack) {
		// Push current track to the FRONT of queue so it plays next
		player.queue.unshift(currentTrack)
	}

	// Now play the new track immediately
	// Use player.play() with the track directly to avoid queue issues
	player.queue.add(newTrack)
	await player.play()

	try {
		await ctx.write({
			content: `Now playing: **${newTrack.info.title}** 🎶\n${newTrack.info.uri}`,
		})
	} catch {
		await ctx.write({
			content: "can't play this song TwT ❌",
			flags: MessageFlags.Ephemeral,
		})
	}
}
