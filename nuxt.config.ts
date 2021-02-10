import { Configuration } from '@nuxt/types'

import head from './modules/head'
import pwa from './modules/pwa'

const config: Configuration = {
  target: 'static',
  head,
  components: true,
  loading: { color: '#2eec96' },
  styleResources: {
    scss: ['@/assets/styles/scss/init.scss'],
  },
  plugins: [
    { src: '~/plugins/velocity', ssr: false },
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  build: {
    extend (config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient)
        config.module.rules.push({ enforce: 'pre', test: /\.(ts|js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/ })
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
  pwa,
}

export default config
