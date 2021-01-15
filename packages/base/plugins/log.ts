import { Plugin } from '@nuxt/types'

const plugin: Plugin = (_, inject) => {
  inject('log', () => {
    console.log('Hello from plugin!')
  })
}

export default plugin
