// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Lukas Figura',
  siteUrl: 'https://lukas.life',
  siteDescription:
    'Product-oriented full-stack engineering lead and technology consultant.',
  titleTemplate: 'Lukas Figura',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://lukas.life',
        sitemap: 'https://lukas.life/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'LukasFigura',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: true,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Lukas',
        themeColor: '#ffffff',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png',
        msTileImage: '',
        msTileColor: '#ffffff'
      }
    }
  ]
}
