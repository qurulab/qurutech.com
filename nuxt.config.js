export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Quru Tech - Top Web, Mobile and Blockchain Development Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#0b0e11'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f5bc31;' },
  scripts: [
    '~/static/js/jquery-1.12.4.min.js',
    '~/static/js/popper.min.js',
    '~/static/js/bootstrap.min.js',
    '~/static/js/slick.min.js',
    '~/static/js/jquery.peity.min.js',
    '~/static/js/jquery.slimscroll.min.js',
    '~/static/js/custom.js'
  ],
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/fontawesome-all.min.css',
    '@/assets/css/themify-icons.css',
    '@/assets/css/slick.css',
    '@/assets/scss/index.scss',
    '@/assets/scss/responsive.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vueTyper.client'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
