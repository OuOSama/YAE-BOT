import { Client } from 'seyfert'

const client = new Client()

async function remove_commands() {
	await client.start()
	await client.commands.set([])
	console.log(`✅ All commands has cleared`)
	process.exit(0)
}

remove_commands()
