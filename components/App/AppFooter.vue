<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contactme">
            <a
              v-for="(s, index) in social"
              :key="index"
              :alt="s.alt"
              :aria-label="s.alt"
              :href="s.link"
              target="_blank"
            >
              <i :class="s.icon" />
            </a>
          </div>
        </div>
        <div class="col-12 justify-content-center">
          <p class="copyright">
            featured work from La Relève & ADN Realty
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      social: [
        { link: 'mailto:antoinepiche@gmail.com', alt: 'email address', icon: 'fas fa-paper-plane' },
        { link: 'https://www.linkedin.com/in/antoinepiche/', alt: 'Linkedin profile', icon: 'fab fa-linkedin-in' },
        { link: 'https://github.com/RandomPiche', alt: 'Github profile', icon: 'fab fa-github' },
        { link: 'https://medium.com/@randompiche', alt: 'Medium profile', icon: 'fab fa-medium' },
        { link: 'https://dev.to/randompiche', alt: 'Dev.to profile', icon: 'fab fa-dev' },
        { link: 'https://stackoverflow.com/users/7262921/randompiche?tab=profile', alt: 'StackOverflow profile', icon: 'fab fa-stack-overflow' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  padding: 20px 0 40px;
  background-color: #fcfcfc;

  .copyright {
    color: $apiGreyMid;
    margin-bottom: 0;
    font-size: rem(12px);
    font-weight: $flite;
    text-align: center;
  }

  .contactme {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    a {
      font-size: rem(20px);
      padding: 20px;
      color: $apiGreyMid;
      transition: color .2s ease-in-out, transform .2s ease-in-out;

      &:hover {
        color: $apiGreen;
        transform: translateY(-3px);
        transition: color .2s ease-in-out, transform .2s ease-in-out;
      }
    }

    @include mobile {
      a {
        padding: 15px;
      }
    }
  }
}
</style>
