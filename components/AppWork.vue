<template>
  <section class="selected-work">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Selected work</h2>
        </div>
        <div class="col-12">
          <div class="featured-items">
            <div class="featured-item">
              <a href="https://la-releve.com/" target="_blank" class="is-link is-link--lrlv" alt="Link to La Relève website" aria-label="Link to La Relève website"><span class="content">La Relève</span><span class="coming"> // Design UX/UI / Nuxt.js - Vue.js SSR - (Typescript / Vuex / Vue-Router / Axios + others) / Bootstrap 4.1.3 / SCSS / Node.js / Serverless</span></a>
            </div>
            <div class="featured-item">
              <a href="https://lvdf.io/" target="_blank" class="is-link is-link--lvdf" alt="Link to LVDF website" aria-label="Link to LVDF website"><span class="content">LVDF.io</span><span class="coming"> // Bootstrap 4.alpha-6 SCSS custom build / jQuery 3 / Symfony 3 / AWS EB</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.city-drop.com/" target="_blank" class="is-link is-link--citydrop" alt="Link to City Drop website" aria-label="Link to City Drop website"><span class="content">City Drop</span><span class="coming"> // Bootstrap 4.0.0-beta SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="https://wearebop.fr/" target="_blank" class="is-link is-link--bop" alt="Link to Brewed Outta Paris website" aria-label="Link to Brewed Outta Paris website"><span class="content">Brewed Outta Paris</span><span class="coming"> // Wordpress - advanced modification of a simple wordpress theme</span></a>
            </div>
            <div class="featured-item">
              <a href="https://adn-realty.com" target="_blank" class="is-link is-link--adnrealty" alt="Link to ADN Realty website" aria-label="Link to ADN Realty website"><span class="content">ADN Realty</span><span class="coming"> /// Bootstrap 4.1 SCSS custom build / jQuery 3 / PHP homemade MVC framework</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.adn-stud.io/" target="_blank" class="is-link is-link--adnstudio" alt="Link to ADN Studio website" aria-label="Link to ADN Studio website"><span class="content">ADN Stud.io</span><span class="coming"> // Bootstrap 4.0.0-beta SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.vor-immobilier.fr/" target="_blank" class="is-link is-link--vorimmo" alt="Link to VOR Immobilier website" aria-label="Link to VOR Immobilier website"><span class="content">VOR Immobilier</span><span class="coming"> // Bootstrap 4.1 SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="http://vue.antoine-piche.com/" target="_blank" class="is-link is-link--alt" alt="Link to my custom tech news review tool" aria-label="Link to my custom tech news review tool"><span class="content">Custom tech news review tool</span><span class="coming"> // Vue.js (Axios) / Boostrap 3.3.7 / Newsapi.org</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppWork extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
