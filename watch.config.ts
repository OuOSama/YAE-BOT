import { Watcher, type WatcherOptions } from '@slipher/watcher'

// @ts-expect-error
const watcherOptions: WatcherOptions = {
	srcPath: './src',
	filePath: './src/app.ts',
	debug: true,
}

const watcher = new Watcher(watcherOptions)
watcher.spawnShards()
