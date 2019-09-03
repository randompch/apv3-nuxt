<template>
  <div id="app">
    <AppHeader />
    <main>
      <AppWork />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppWork from '@/components/AppWork'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppWork,
    AppFooter,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/scss/init.scss';
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
