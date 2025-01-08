export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  app: {
    head: {
      meta: [
        { property: 'og:title', content: 'Trouve ton match' },
        { property: 'og:image', content: 'https://sprightly-bombolone-5fafbd.netlify.app/img/logosplash.png' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/scss/style.scss'
    ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    }
  },

  build: {
    transpile: ['bootstrap']
  },

  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },
  compatibilityDate: '2025-01-08'
})