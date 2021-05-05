import '../src/styles/global.css'
import '../src/styles/custom.css'
import '../src/styles/weather-icons.css'

import {worker} from '../src/mocks/browser'

// this allows you to simply use `worker.use` in your story and/or story decorators
worker.start()

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'}
}
