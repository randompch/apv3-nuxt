<template>
  <header>
    <transition name="slide-fade" appear>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Hi! 👋 I'm Antoine Piché<span class="is-green">,</span></h1>
            <p>
              a FullStack Developer (TS) / VueJS enthusiast based in Paris
              <span class="is-grey-lite">
                <br class="d-none d-md-block">currently working at <a href="https://la-releve.com" target="_blank" alt="La Relève website" aria-label="La Relève website" class="is-link is-link--green"><span class="content">La Relève</span></a>
                <br class="d-none d-md-block">as a FullStack Developer (Nuxt.js, Express, MySQL, Serverless, GO)
              </span>
            </p>
          </div>
          <div class="col-12">
            <transition @enter="slide_down" @leave="slide_up">
              <p v-show="active" class="resume">
                Right after getting my <i>Baccalauréat ES with honours</i> in 2012, I started following a licence called <a href="https://humanites.parisnanterre.fr/" target="_blank" alt="Humanités Licence website" aria-label="Humanités Licence website" class="is-link is-link--green">"Humanités"</a> which basically brings five licences in one : <strong>Philosophy, French Letters, History, Latin and English</strong>.
                <br>I've learnt many things throughout my "Humanités" journey but I soon realised that I didn't see myself as a teacher or librairian.
                <br>Internet has always had my attention and I felt like diving into it. I started coding my personnal website for fun and started a web school called <a href="https://www.iim.fr/" target="_blank" alt="IIM website" aria-label="IIM website" class="is-link is-link--green">Institut de l'Internet et du Multimédia</a> (IIM) based in Paris, La Défense. Though that school provides a formation to become a digital project manager, I prefer being a developer. More info on my <a href="https://www.linkedin.com/in/antoinepiche/" target="_blank" alt="Linkedin profile" aria-label="Linkedin profile" class="is-link is-link--green">linkedin</a>.
                <br><br>Since then I've kept improving my skills by teaching myself through Medium articles, documentation reading and online courses.
                <br>I'm really committed to my work, learning new things is what keeps me motivated. I'm currently working on my back-end skills (and loving it), I'm learning GOlang and I keep practicing VueJS, of course.
              </p>
            </transition>
            <a href="javascript:void(0)" class="is-link is-link--green readmore" @click="readMore">
              <span v-if="!active">Read more</span>
            </a>
            <p class="seework">
              Or see my selected works below<span class="is-green">.</span>👇
            </p>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppHeader extends Vue {
  active: boolean = false

  // Methods
  readMore () {
    const s = !this.active
    this.active = !this.active
    return s
  }

  slide_down (el: any, done: any) {
    (this as any).$velocity(el, 'slideDown', {
      duration: 'fast',
      complete: done,
    })
  }

  slide_up (el:any, done: any) {
    (this as any).$velocity(el, 'slideUp', {
      duration: 'fast',
      complete: done,
    })
  }
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
    transform: translateY(10px);
    opacity: 0;
  }
</style>
