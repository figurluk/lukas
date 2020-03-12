import { join } from 'path'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Lukas Figura',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Someone\'s personal page'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/dotenv', { filename: '.env' }],
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  manifest: {
    name: 'Sponsor.Online',
    display: 'standalone',
    short_name: 'Sponsor',
    description:
      'Game changing connections between top brands and professional football teams.',
    start_url: '/',
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#ff553f'
  },

  icon: {
    accessibleIcons: false,
    sizes: [64, 120, 144, 152, 192, 384, 512]
  },

  robots: {
    UserAgent: '*',
    Disallow: '/pseudo'
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/teams/**', '/brands/**', '/components/**', '/widgets/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },

  webfontloader: {
    google: {
      families: ['Source+Code+Pro:400,600,700']
    }
  },

  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets() {
        const targets = { ie: '11' }

        return [[require.resolve('@nuxt/babel-preset-app'), { targets }]]
      }
    },
    postcss: {
      plugins: [
        require('postcss-for'),
        require('postcss-nested-ancestors'),
        require('postcss-nested'),
        require('postcss-current-selector'),
        require('tailwindcss')(join(__dirname, 'tailwind.config.js')),
        require('autoprefixer')
      ]
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
          exclude: /(node_modules)/
        })
      }
    }
  }
}
