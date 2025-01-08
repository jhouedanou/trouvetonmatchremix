export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  app: {
    head: {
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