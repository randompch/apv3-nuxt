import { Configuration } from '@nuxt/types'

import head from './modules/head'
import pwa from './modules/pwa'

const config: Configuration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2eec96' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/velocity', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient)
        config.module.rules.push({ enforce: 'pre', test: /\.(ts|js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/ })
    },
  },
  pwa,
}

export default config