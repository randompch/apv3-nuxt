<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contactme">
            <a v-for="(s, index) in social" :key="index" :href="s.link"><i :class="s.icon" /></a>
          </div>
        </div>
        <div class="col-12 justify-content-center">
          <p class="copyright">
            &copy; 2018 Antoine Piché - featured work from La Relève, U4Networks & ADN Realty
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppFooter extends Vue {
  social: any[] = [
    { link: 'mailto:antoinepiche@gmail.com', icon: 'fas fa-paper-plane' },
    { link: 'https://www.linkedin.com/in/antoinepiche/', icon: 'fab fa-linkedin-in' },
    { link: 'https://github.com/RandomPiche', icon: 'fab fa-github' },
    { link: 'https://medium.com/@randompiche', icon: 'fab fa-medium' },
    // { link: 'https://antoine-piche.com/CV_ANTOINE_PICHE.pdf', icon: 'fas fa-file' },
    { link: 'https://dev.to/randompiche', icon: 'fab fa-dev' },
  ]
}
</script>

<style lang="scss" scoped>
</style>
