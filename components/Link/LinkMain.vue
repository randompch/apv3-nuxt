<template>
  <a
    :href="href"
    :target="target"
    :class="['link', ...classes]"
    :alt="alt"
    :aria-label="alt"
    @click.prevent="handler"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LinkMain extends Vue {
  @Prop({ type: String, default: '' }) href: string
  @Prop({ type: String, default: '' }) alt: string
  @Prop({ type: Boolean, default: true }) blank: boolean
  @Prop({ type: Array, default: () => ['green'] }) classes: any[]

  public get target (): string {
    return this.blank ? '_blank' : ''
  }

  public handler (): void {
    if (this.href)
      window.open(this.href, this.blank ? '_blank' : '')
    this.$emit('link-click')
  }
}
</script>

<style lang="scss" scoped>
.link {
  font-size: rem(18px);
  color: $apiGreyHeavy;
  font-weight: $freg;
  transition: all .2s ease-in-out;
  line-height: 1.2;

  &:hover {
    color: $apiGreyHeavy;
    text-decoration: none;
  }

  &.green {
    border-bottom: 1px solid $apiGreen;
    box-shadow: inset 0 -2px 0 0 $apiGreen;

    &:hover {
      box-shadow: inset 0 -10px 0 0 $apiGreen;
    }
  }

  &.lrlv-alt {
    color: $apiGreyMid;
    border-bottom: 1px solid $lrlv;
    box-shadow: inset 0 -2px 0 0 $lrlv;

    &:hover {
      box-shadow: inset 0 -10px 0 0 $lrlv;
    }
  }

  &.alt {
    span.title {
      border-bottom: 0px solid $apiGreen;
      box-shadow: inset 0 0 0 0 $apiGreen;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $apiGreen;
        box-shadow: inset 0 -20px 0 0 $apiGreen;
      }
    }
  }

  &.lrlv {
    span.title {
      border-bottom: 0px solid $lrlv;
      box-shadow: inset 0 0 0 0 $lrlv;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $lrlv;
        box-shadow: inset 0 -20px 0 0 $lrlv;
      }
    }
  }

  &.lvdf {
    span.title {
      border-bottom: 0px solid $lvdf;
      box-shadow: inset 0 0 0 0 $lvdf;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $lvdf;
        box-shadow: inset 0 -20px 0 0 $lvdf;
      }
    }
  }

  &.adnstudio {
    span.title {
      border-bottom: 0px solid $adnstudio;
      box-shadow: inset 0 0 0 0 $adnstudio;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $adnstudio;
        box-shadow: inset 0 -20px 0 0 $adnstudio;
      }
    }
  }

  &.adlead {
    span.title {
      border-bottom: 0px solid $adlead;
      box-shadow: inset 0 0 0 0 $adlead;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $adlead;
        box-shadow: inset 0 -20px 0 0 $adlead;
      }
    }
  }

  &.adnrealty {
    span.title {
      border-bottom: 0px solid $adnrealty;
      box-shadow: inset 0 0 0 0 $adnrealty;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $adnrealty;
        box-shadow: inset 0 -20px 0 0 $adnrealty;
      }
    }
  }

  &.vorimmo {
    span.title {
      border-bottom: 0px solid $vorimmo;
      box-shadow: inset 0 0 0 0 $vorimmo;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $vorimmo;
        box-shadow: inset 0 -20px 0 0 $vorimmo;
      }
    }
  }

  &.citydrop {
    span.title {
      border-bottom: 0px solid $citydrop;
      box-shadow: inset 0 0 0 0 $citydrop;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $citydrop;
        box-shadow: inset 0 -20px 0 0 $citydrop;
      }
    }
  }

  &.bop {
    span.title {
      border-bottom: 0px solid $bop;
      box-shadow: inset 0 0 0 0 $bop;
    }

    &:hover {
      span.title {
        border-bottom: 1px solid $bop;
        box-shadow: inset 0 -20px 0 0 $bop;
      }
    }
  }
}
</style>
