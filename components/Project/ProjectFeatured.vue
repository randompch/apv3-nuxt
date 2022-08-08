<template>
  <div class="featured-project">
    <BaseLink
      :alt="project.title"
      :classes="[`${project.color}`]"
      :href="project.url"
    >
      <span class="title">{{ project.title }}</span>
      <span
        class="details"
      >{{ project.details }}</span>
    </BaseLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Project } from '~/types/project';

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.featured-project {
  margin-bottom: 20px;

  :deep(.link) {
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

:deep(.link) {
  font-size: rem(40px);
}
</style>
