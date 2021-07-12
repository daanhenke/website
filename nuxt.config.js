export default {
  target: 'static',

  server: {
    port: 8080
  },

  head: {
    title: 'daan.vodka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  build: {
  }
}
