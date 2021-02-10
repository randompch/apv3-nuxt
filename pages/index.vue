<template>
  <div id="app">
    <AppHeader />
    <AppWork />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { initHeaderMeta } from '~/utils/headerMeta'

@Component({
  head () {
    return {
      htmlAttrs: { lang: 'en' },
      title: 'Antoine Piché - FullStack Developer - Paris',
      meta: initHeaderMeta({ title: `Antoine Piché - FullStack Developer - Paris`, description: `Antoine Piché is a FullStack Developer (Typescript) and VueJS enthusiast based in Paris` }),
    }
  },
})
export default class index extends Vue {}
</script>

<style lang="scss">
html,
body {
  font-family: $gfont;
  margin: 0;
  color: $apiGreyHeavy !important;

}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
