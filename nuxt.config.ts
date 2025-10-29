// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      firebaseConfig: {
        apiKey: 'AIzaSyCMw8mZ1D1GAYpeotAqVCaYAMtn3URVOok',
        authDomain: 'lansing-codes.firebaseapp.com',
        databaseURL: 'https://lansing-codes.firebaseio.com',
        projectId: 'lansing-codes',
        storageBucket: 'lansing-codes.appspot.com',
        messagingSenderId: '647280182517',
        appId: '1:647280182517:web:779f72d0b90c0dd4',
      },
    },
  },

  app: {
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
          content:
            'lansing mi,lansing codes,meetups,events,code,coding,programming,hackathon,learning to code,coding resources,programming resources,learn to code',
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
          content:
            'https://www.lansing.codes/resources-for-lansing-coders.jpg',
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
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          href: '/favicon.ico?v=1',
        },
        { rel: 'image_src', type: 'image/png', href: '/favicon.ico?v=1' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico?v=1' },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@lansingcodes/webfont@latest/font-lansing-codes.css',
        },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
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
  },

  css: ['~/assets/scss/tailwind.scss'],

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    configPath: 'tailwind.config.js',
  },

  compatibilityDate: '2024-10-14',
})
