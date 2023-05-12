// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // Options
    },
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          script: [
              { src: 'https://www.googletagmanager.com/gtag/js?id=G-DFPGFGGWZG' },
              {
                innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-DFPGFGGWZG');
                `
              }
          ]
        }
      }
})
