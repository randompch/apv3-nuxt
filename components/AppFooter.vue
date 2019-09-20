<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contactme">
            <a v-for="(s, index) in social" :key="index" :href="s.link" :alt="s.alt" :aria-label="s.alt" target="_blank"><i :class="s.icon" /></a>
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
    { link: 'mailto:antoinepiche@gmail.com', alt: 'Link to my email address', icon: 'fas fa-paper-plane' },
    { link: 'https://www.linkedin.com/in/antoinepiche/', alt: 'Link to my Linkedin profile', icon: 'fab fa-linkedin-in' },
    { link: 'https://github.com/RandomPiche', alt: 'Link to my Github profile', icon: 'fab fa-github' },
    { link: 'https://medium.com/@randompiche', alt: 'Link to my Medium profile', icon: 'fab fa-medium' },
    { link: 'https://dev.to/randompiche', alt: 'Link to dev.to profile', icon: 'fab fa-dev' },
    { link: 'https://stackoverflow.com/users/7262921/randompiche?tab=profile', alt: 'Link to my StackOverflow profile', icon: 'fab fa-stack-overflow' },
  ]
}
</script>

<style lang="scss" scoped>
</style>
