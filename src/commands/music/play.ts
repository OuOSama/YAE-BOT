// src/commands/play.ts

import {
	Command,
	type CommandContext,
	createStringOption,
	Declare,
	Options,
} from 'seyfert'
import { MessageFlags } from 'seyfert/lib/types'
import { client } from 'src/app'
import { playerCreate } from 'src/managers/createPlayer'
import { loadTracks } from 'src/managers/loadTracks'

const option = {
	url: createStringOption({
		description: 'song URL',
		required: true,
	}),
}

@Declare({
	name: 'play',
	description: 'play a song',
})
@Options(option)
export default class Play extends Command {
	async run(ctx: CommandContext<typeof option>) {
		// ✅ Check if Riffy is initialized before doing anything
		if (!client.riffy.initiated) {
			return await ctx.write({
				content: 'Riffy was not init ⚠️',
				flags: MessageFlags.Ephemeral,
			})
		}

		const query = ctx.options.url // 🔍 get the song URL from user input
		const member = ctx.member // 👤 get the member who ran the command
		if (!member) return await ctx.write({ content: 'Member not found! ❌' })

		// 🎧 Try to get the user's voice channel ID
		let voiceChannelId: string | undefined
		try {
			voiceChannelId = (await member.voice('rest'))?.channelId ?? undefined
		} catch (err) {
			// ⚠️ Warn in console if fetching voice state fails
			client.logger.warn(`ERROR: ${err}`)
			// 📝 Inform user to join a voice channel
			return await ctx.write({
				content: 'You must enter the sound room first. 🎵',
				flags: MessageFlags.Ephemeral,
			})
		}

		// ❌ If user is not in a voice channel, send friendly warning
		if (!voiceChannelId) {
			return await ctx.write({
				content: 'You must enter the sound room first. 🎵',
				flags: MessageFlags.Ephemeral,
			})
		}

		client.logger.debug(`now Voice Room ID : ${voiceChannelId}`) // 🛠 Debug log

		try {
			// 🎶 Load tracks from URL or search query
			const result = await loadTracks(query, member)
			client.logger.debug(`result : ${result}`)

			// 🚀 Create or get a music player for this guild & channel
			const player = playerCreate(
				ctx.guildId as string,
				ctx.channelId as string,
				voiceChannelId,
			)
			await player.connect() // 🔌 Connect to voice channel

			// 📚 If it's a playlist, add all tracks to queue
			if (result.loadType === 'playlist') {
				return ctx.write({
					content: `can't play this play list`,
					flags: MessageFlags.Ephemeral,
				})
			}

			// 🎵 Play first track if not a playlist
			const track = result.tracks.shift()
			if (!track)
				return await ctx.write({
					content: "I can't find this song. ❌",
					flags: MessageFlags.Ephemeral,
				})

			client.logger.debug(`TRACK: ${[track]}`)
			await player.queue.add(track) // ➕ Add track to queue
			try {
				await player.play() // ▶️ Start playing
				await ctx.write({
					content: `Playing track ${track.info.title} 🎶 URL: ${track.info.uri}`,
				})
			} catch {
				await ctx.write({
					content: "can't play this song TwT ❌",
					flags: MessageFlags.Ephemeral,
				})
			}
		} catch (e) {
			// ⚠️ Catch unexpected errors
			await ctx.write({ content: `Some thing went wrnog ${e} ❌` })
		}
	}
}
