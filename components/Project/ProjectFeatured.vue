<template>
  <div class="featured-project">
    <LinkMain
      :href="project.url"
      :classes="[`${project.color}`]"
      :alt="project.title"
    >
      <span class="title">{{ project.title }}</span>
      <span
        class="details"
      >{{ project.details }}</span>
    </LinkMain>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Project } from '~/types/project'

@Component
export default class ProjectFeatured extends Vue {
  @Prop({ type: Object, default: () => ({}) }) project: Project
}
</script>

<style lang="scss" scoped>
.featured-project {
  margin-bottom: 20px;

  ::v-deep .link {
    font-size: rem(40px);
  }

  span.details {
    color: #8e8f92;
    margin-left: 5px;
    font-size: rem(14px);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.2s ease-in-out;
  }

  span.title {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    span.details {
      opacity: 1;
      transform: translateX(0px);
      transition: all 0.2s ease-in-out;
    }

    span.title {
      transition: all 0.2s ease-in-out;
    }
  }

  @include tabdown {
    span.details {
      display: none;
    }
  }
}

/deep/ .link {
  font-size: rem(40px);
}
</style>
