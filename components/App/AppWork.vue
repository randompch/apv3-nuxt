<template>
  <main>
    <section class="selected-work">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Selected work</h2>
          </div>
          <div class="col-12">
            <div class="featured-projects">
              <project-featured
                v-for="(project, index) in projects"
                :key="index"
                :project="project"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Project } from '~/types/project'

import ProjectFeatured from '~/components/Project/ProjectFeatured.vue'

@Component({
  components: {
    ProjectFeatured,
  },
})
export default class AppWork extends Vue {
  public projects: Project[] = [
    {
      title: 'La Relève',
      url: 'https://la-releve.com',
      color: 'lrlv',
      details: '// Design UX/UI / Nuxt.js - (Typescript / Vuex / Vue-Router / Axios + others) / Bootstrap 4.1.3 (custom build) / SCSS / Express / Serverless',
    },
    {
      title: 'LVDF.io',
      url: 'https://lvdf.io',
      color: 'lvdf',
      details: '// Bootstrap 4.alpha-6 SCSS custom build / jQuery 3 / Symfony 3 / AWS EB',
    },
    {
      title: 'City Drop',
      url: 'https://www.city-drop.com',
      color: 'citydrop',
      details: '// Bootstrap 4.0.0-beta SCSS custom build / jQuery 3',
    },
    {
      title: 'Studio BOP',
      url: 'https://studiobop.fr',
      color: 'bop',
      details: '// Wordpress - advanced modification of a simple wordpress theme',
    },
    {
      title: 'Adlead',
      url: 'https://www.adlead.immo',
      color: 'adlead',
      details: '// Bootstrap 4.1 SCSS custom build / jQuery 3',
    },
    {
      title: 'ADN Realty',
      url: 'https://adn-realty.com',
      color: 'adnrealty',
      details: '// Bootstrap 4.1 SCSS custom build / jQuery 3 / PHP homemade MVC framework',
    },
    {
      title: 'ADN Stud.io',
      url: 'https://www.adn-stud.io',
      color: 'adnstudio',
      details: '// Bootstrap 4.0.0-beta SCSS custom build / jQuery 3',
    },
    {
      title: 'VOR Immobilier',
      url: 'https://www.vor-immobilier.fr',
      color: 'vorimmo',
      details: '// Bootstrap 4.1 SCSS custom build / jQuery 3',
    },
    {
      title: 'Custom tech news review tool',
      url: 'http://vue.antoine-piche.com',
      color: 'alt',
      details: '// Vue.js (Axios) / Boostrap 3.3.7 / Newsapi.org',
    },
  ]
}
</script>

<style lang="scss" scoped>
section.selected-work {
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: rem(18px);
    color: $apiGreyMid;
    text-transform: uppercase;
  }

  .featured-projects {
    margin-top: 20px;
    display: inline-block;
    width: auto;

    a {
      font-size: rem(40px);
      @include mobile {
        font-size: rem(30px);
      }
    }
  }
}
</style>
