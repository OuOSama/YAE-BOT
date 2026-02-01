// src/scripts/remove_commands.ts

import { Client } from 'seyfert'

const client = new Client()

async function remove_commands() {
	await client.start()
	client.commands.set([])
	console.log(`✅ All commands has cleared`)
	process.exit(0)
}

remove_commands()
