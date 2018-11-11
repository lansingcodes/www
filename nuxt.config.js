const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'Lansing Codes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.ico?v=1' },
      { rel: 'image_src', type: 'image/png', href: '/favicon.ico?v=1' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico?v=1' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/font-awesome' }],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueRule = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueRule.options.compilerOptions = {
        ...vueRule.options.compilerOptions,
        modules: [
          ...((vueRule.options.compilerOptions &&
            vueRule.options.compilerOptions.modules) ||
            []),
          { postTransformNode: staticClassHotfix }
        ]
      }

      function staticClassHotfix(el) {
        el.staticClass = el.staticClass && el.staticClass.replace(/\\\w\b/g, '')
        if (Array.isArray(el.children)) {
          el.children.map(staticClassHotfix)
        }
      }
    }
  }
}
