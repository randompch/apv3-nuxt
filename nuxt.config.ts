import head from './modules/head';
import pwa from './modules/pwa';

export default {
  head,
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
  pwa,
};
