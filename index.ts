import 'reflect-metadata'

import { Application } from './src/Application'
import { SERVER_PORT, SERVER_RUNNING_MESSAGE } from './src/constants'

const app = new Application()

const run = async () => {
	await app.init()
}

run().then(() => app.listen(SERVER_PORT, () =>
	console.log(SERVER_RUNNING_MESSAGE)
))
