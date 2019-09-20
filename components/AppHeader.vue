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
                <br class="d-none d-md-block">currently working at <a href="https://la-releve.com" target="_blank" class="is-link is-link--green"><span class="content">La Relève</span></a>
                <br class="d-none d-md-block">as a FullStack Developer (Nuxt.js, Express, MySQL, Serverless, GO)
              </span>
            </p>
          </div>
          <div class="col-12">
            <transition @enter="slide_down" @leave="slide_up">
              <p v-show="active" class="resume">
                I've got my Baccalauréat ES with honours in 2012 and then started a <a href="https://humanites.parisnanterre.fr/" target="_blank" class="is-link is-link--green">licence "Humanités"</a> which basically brings five licences in one :
                <br>Philosophy, French Letters, History, Latin and English. I've learnt many things during two years before realising that I wanted to learn coding.
                <br>So I started a web school called <a href="https://www.iim.fr/" target="_blank" class="is-link is-link--green">Institut de l'Internet et du Multimédia</a> (IIM) based in Paris, La Défense, to become a digital project manager; but I prefer coding. More info on my <a href="https://www.linkedin.com/in/antoinepiche/" target="_blank" class="is-link is-link--green">linkedin</a>.
                <br><br>Since then I've kept improving my skills by teaching myself through Medium articles, documentation reading and online courses.
                <br>I'm really committed to my work, learning new things is what keeps me motivated. I'm currently working on my back-end skills (and loving it) and I keep practicing VueJS, of course.
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
