<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contactme">
            <a v-for="(s, index) in social" :key="index" :href="s.link" class="is-link is-link--green">{{ s.text }}</a>
          </div>
        </div>
        <div class="col-12">
          <p class="copyright">
            &copy; 2018 Antoine Piché - featured work from La Relève, U4Networks & ADN Realty
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppWork',
  data () {
    return {
      social: [
        { link: 'mailto:antoinepiche@gmail.com', text: 'Email me' },
        { link: 'https://www.linkedin.com/in/antoinepiche/', text: 'Linkedin' },
        { link: 'https://github.com/RandomPiche', text: 'Github' },
        { link: 'https://medium.com/@randompiche', text: 'Medium' },
        { link: 'https://antoine-piche.com/CV_ANTOINE_PICHE.pdf', text: 'Resume (FR)' },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
