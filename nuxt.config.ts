import { Configuration } from '@nuxt/types'

import head from './modules/head'

const config: Configuration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Antoine Piché - FullStack Developer - Paris',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Antoine Piché is a FullStack Developer (Typescript) and VueJS enthusiast based in Paris' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon.png' },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'anonymous',
        type: 'font/woff',
        href: '/fonts/CircularStd-Book.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'anonymous',
        type: 'font/woff',
        href: '/fonts/CircularStd-Medium.woff',
      },
      {
        rel: 'preload',
        as: 'font',
        crossorigin: 'anonymous',
        type: 'font/woff',
        href: '/fonts/CircularStd-Bold.woff',
      },
    ],
  },
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
}

export default config