const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    'assets/main.css',
    'assets/css/style.css',
  ],
  head: {
    title: 'nuxt_project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',integrity:'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',crossorigin:'anonymous' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'jquery',
      'assets/js/jquery.js',
      'assets/js/app.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
      }),
    ]
  }
}
