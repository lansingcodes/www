const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  ssr: false,

  env: {
    // access with process.env.firebaseWebConfig
    firebaseWebConfig: process.env.FIREBASE_WEB_CONFIG
      ? JSON.parse(process.env.FIREBASE_WEB_CONFIG)
      : {
          apiKey: 'AIzaSyCMw8mZ1D1GAYpeotAqVCaYAMtn3URVOok',
          authDomain: 'lansing-codes.firebaseapp.com',
          databaseURL: 'https://lansing-codes.firebaseio.com',
          projectId: 'lansing-codes',
          storageBucket: 'lansing-codes.appspot.com',
          messagingSenderId: '647280182517',
          appId: '1:647280182517:web:779f72d0b90c0dd4',
        },
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'Lansing Codes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Resources for coders and community organizers of Lansing, MI.',
      },
      {
        property: 'og:description',
        content:
          'Resources for coders and community organizers of Lansing, MI.',
      },
      { property: 'og:title', content: 'Lansing Codes' },
      {
        name: 'keywords',
        content: [
          'lansing mi',
          'lansing codes',
          'meetups',
          'events',
          'code',
          'coding',
          'programming',
          'hackathon',
          'learning to code',
          'coding resources',
          'programming resources',
          'learn to code',
        ].join(','),
      },
      { name: 'geo.region', content: 'US-MI' },
      { name: 'geo.placename', content: 'Greater Lansing' },
      { name: 'geo.position', content: '42.734552;-84.480615' },
      { name: 'ICBM', content: '42.734552, -84.480615' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.lansing.codes/' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Lansing Codes' },
      {
        property: 'og:image',
        content: 'https://www.lansing.codes/resources-for-lansing-coders.jpg',
      },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '2850' },
      { property: 'og:image:height', content: '1420' },
      { property: 'fb:admins', content: '2327791' },
      { property: 'fb:admins', content: '2335756' },
      { property: 'fb:admins', content: '1261535380' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lansingcodes' },
      { name: 'twitter:creator', content: '@lansingcodes' },
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.ico?v=1' },
      { rel: 'image_src', type: 'image/png', href: '/favicon.ico?v=1' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico?v=1' },
      /* Lansing Codes Web Font */
      {
        rel: 'preload',
        as: 'style',
        href: 'https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css',
      },
      /* Font MFizz */
      {
        rel: 'preload',
        as: 'style',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css',
      },
      /* Google Fonts */
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/tailwind.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/jsonp' },
    { src: '~/plugins/popover', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/google-analytics'],

  /*
   ** Build configuration
   */
  build: {
    // Set to true temporarily and `npm run build` to dissect bundle size
    analyze: false,

    postcss: {
      postcssOptions: {
        plugins: [require('tailwindcss')(tailwindJS), require('autoprefixer')],
      },
    },
    
    loaders: {
      scss: {
        sassOptions: {
          includePaths: [
            __dirname,
            'assets/scss'
          ]
        }
      }
    },

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
          exclude: /(node_modules)/,
        })
      }

      const vueRule = config.module.rules.find(
        (rule) => rule.loader === 'vue-loader'
      )

      if (vueRule && vueRule.options) {
        vueRule.options.compilerOptions = {
          ...vueRule.options.compilerOptions,
          modules: [
            ...((vueRule.options.compilerOptions &&
              vueRule.options.compilerOptions.modules) ||
              []),
            { postTransformNode: staticClassHotfix },
          ],
        }
      }

      function staticClassHotfix(el) {
        el.staticClass = el.staticClass && el.staticClass.replace(/\\\w\b/g, '')
        if (Array.isArray(el.children)) {
          el.children.map(staticClassHotfix)
        }
      }
    },
  },

  /*
   ** Module configuration
   */
  'google-analytics': {
    id: 'UA-73509402-2',
  },
}
