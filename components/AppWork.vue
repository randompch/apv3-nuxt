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
              <a href="https://la-releve.com/" target="_blank" class="is-link is-link--lrlv"><span class="content">La Relève</span><span class="coming"> // Design UX/UI / Nuxt.js - Vue.js SSR - (Typescript / Vuex / Vue-Router / Axios +others) / Bootstrap 4.1.3 / SCSS / Node.js / AWS S3 + EB</span></a>
            </div>
            <div class="featured-item">
              <a href="https://lvdf.io/" target="_blank" class="is-link is-link--lvdf"><span class="content">LVDF.io</span><span class="coming"> // Bootstrap 4.alpha-6 SCSS custom build / jQuery 3 / Symfony 3 / AWS EB</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.city-drop.com/" target="_blank" class="is-link is-link--citydrop"><span class="content">City Drop</span><span class="coming"> // Bootstrap 4.0.0-beta SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="https://wearebop.fr/" target="_blank" class="is-link is-link--bop"><span class="content">Brewed Outta Paris</span><span class="coming"> // Wordpress - advanced modification of a simple wordpress theme</span></a>
            </div>
            <div class="featured-item">
              <a href="javascript:void(0)" target="_blank" class="is-link is-link--alt"><span class="content">Admail</span><span class="coming"> /// Beta ~aug 2018 / Bulma 0.7.1 / PHP homemade MVC framework</span></a>
            </div>
            <div class="featured-item">
              <a href="https://adn-realty.com" target="_blank" class="is-link is-link--adnrealty"><span class="content">ADN Realty</span><span class="coming"> /// Bootstrap 4.1 SCSS custom build / jQuery 3 / PHP homemade MVC framework</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.adn-stud.io/" target="_blank" class="is-link is-link--adnstudio"><span class="content">ADN Stud.io</span><span class="coming"> // Bootstrap 4.0.0-beta SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="https://www.vor-immobilier.fr/" target="_blank" class="is-link is-link--vorimmo"><span class="content">VOR Immobilier</span><span class="coming"> // Bootstrap 4.1 SCSS custom build / jQuery 3</span></a>
            </div>
            <div class="featured-item">
              <a href="http://vue.antoine-piche.com/" target="_blank" class="is-link is-link--alt"><span class="content">Custom tech news review tool</span><span class="coming"> // Vue.js (Axios) / Boostrap 3.3.7 / Newsapi.org</span></a>
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
