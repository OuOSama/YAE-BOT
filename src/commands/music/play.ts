import { LoadType } from 'hoshimi'
import {
	Command,
	type CommandContext,
	createStringOption,
	Declare,
	MessageFlags,
	Options,
} from 'seyfert'

const options = {
	query: createStringOption({
		description: 'Enter a song name or url.',
		required: true,
	}),
}

@Declare({
	name: 'play',
	description: 'Play music.',
})
@Options(options)
export default class PlayCommand extends Command {
	async run(ctx: CommandContext<typeof options>) {
		const { options, client, guildId, channelId, member, author } = ctx
		const { query } = options

		if (!guildId || !member) return

		// ✅ ใช้ REST API ดึง Voice State โดยตรง
		let voiceChannelId: string | null = null

		try {
			// ดึง Voice State จาก REST API
			const voiceState = await client.proxy
				.guilds(guildId)
				['voice-states'](member.id)
				.get()
			voiceChannelId = voiceState?.channel_id || null
		} catch {
			// ถ้า API error (404) ให้ลองเช็คจาก cache แทน
			const cached = await client.cache.voiceStates?.get(member.id, guildId)
			if (cached) {
				voiceChannelId = cached.channelId || null
			}
		}

		// ถ้ายังไม่มี voice channel ให้เช็คจาก ctx.member โดยตรง
		if (!voiceChannelId) {
			const memberVoice = ctx.member as unknown as {
				voice?: { channel_id?: string | null }
			}
			voiceChannelId = memberVoice.voice?.channel_id || null
		}

		if (!voiceChannelId) {
			return ctx.write({
				content: 'You must be in a voice channel to play music.',
				flags: MessageFlags.Ephemeral,
			})
		}

		// ตรวจสอบว่า Bot อยู่ใน Voice Channel เดียวกันหรือไม่
		let botVoiceChannelId: string | null = null
		try {
			const me = await ctx.me()
			if (me) {
				const botVoiceState = await client.proxy
					.guilds(guildId)
					['voice-states'](client.me.id)
					.get()
				botVoiceChannelId = botVoiceState?.channel_id || null
			}
		} catch {
			// ถ้า API error ให้เช็คจาก cache
			const cached = await client.cache.voiceStates?.get(client.me.id, guildId)
			if (cached) {
				botVoiceChannelId = cached.channelId || null
			}
		}

		if (botVoiceChannelId && botVoiceChannelId !== voiceChannelId) {
			return ctx.write({
				content: 'You must be in the same voice channel as me.',
				flags: MessageFlags.Ephemeral,
			})
		}

		// สร้าง Player
		const player = client.hoshimi.createPlayer({
			guildId: guildId,
			textId: channelId,
			voiceId: voiceChannelId,
			volume: 100,
		})

		await player.connect()

		// ค้นหาเพลง
		const { loadType, tracks, playlist } = await player.search({
			query,
			requester: author,
		})

		if (loadType === LoadType.Empty || loadType === LoadType.Error) {
			return ctx.write({ content: 'No results found!' })
		}

		if (loadType === LoadType.Playlist) {
			await player.queue.add(tracks)
		} else {
			await player.queue.add(tracks[0])
		}

		if (!player.playing) {
			await player.play()
		}

		return ctx.write({
			content:
				loadType === LoadType.Playlist
					? `Queued ${tracks.length} tracks from ${playlist?.info.name}`
					: `Queued ${tracks[0].info.title}`,
		})
	}
}
