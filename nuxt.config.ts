export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/riftsync',
    jwtSecret: process.env.JWT_SECRET || 'riftsync_default_secret_key_12345!',
    public: {
      gaMeasurementId: process.env.GA_MEASUREMENT_ID || ''
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Rift Sync AI - Assistente de Voz para LoL e TFT',
      meta: [
        { name: 'description', content: 'O seu assistente de voz em tempo real para League of Legends e TFT. Suba de elo com dicas táticas e controle de mapa por meio de voz neural de alta fidelidade.' },
        { name: 'keywords', content: 'coach league of legends, coach tft, assistente de voz lol, overlay lol, overlay tft, blitz.gg, análise de composição, subir de elo lol' },
        { name: 'author', content: 'Rift Sync AI' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-LD9XB0KKRL',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LD9XB0KKRL');
          `
        }
      ]
    }
  }
})
