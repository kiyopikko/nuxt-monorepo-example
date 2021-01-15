import defaultConfig from 'base/nuxt.config'

export default {
  ...defaultConfig,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/foundation.scss'],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [...defaultConfig.modules, 'base/module'],
}
