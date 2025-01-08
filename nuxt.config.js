export default defineNuxtConfig({
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
    'bootstrap/dist/css/bootstrap.css',
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

  compatibilityDate: '2025-01-08'
})