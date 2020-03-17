<template>
  <div class="appear-animation" :class="{ animated: animated }">
    <slot />
  </div>
</template>

<script>
import { isScrolledIntoView } from '../helpers'

export default {
  name: 'AppearTransition',

  props: {
    percentageOffset: {
      type: Number,
      default: 0.2
    },
    timeout: {
      type: Number,
      default: 0
    },
    forceLoad: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    animated: false,
    shouldLoad: false
  }),

  mounted() {
    if (this.forceLoad) {
      this.animated = true
    } else {
      window.addEventListener('scroll', this.animateElement)
    }
  },

  destroyed() {
    window.removeEventListener('scroll', this.animateElement)
  },

  methods: {
    animateElement() {
      if (!this.animated && isScrolledIntoView(this.$el, null)) {
        this.shouldLoad = true
      }

      if (
        !this.animated &&
        isScrolledIntoView(this.$el, this.percentageOffset)
      ) {
        setTimeout(() => {
          this.animated = true
          this.removeListener()
        }, this.timeout)
      }
    },

    removeListener() {
      window.removeEventListener('scroll', this.animateElement)
    }
  }
}
</script>

<style lang="postcss" scoped>
.appear-animation {
  @apply .opacity-0;
  transform: translate3d(0, 2rem, 0);
  transition: opacity 1s cubic-bezier(0.32, 0.21, 0.4, 1.04),
    transform 1s cubic-bezier(0.32, 0.21, 0.4, 1.04);
  will-change: opacity, transform;
}

.animated {
  @apply .opacity-100;
  transform: translate3d(0, 0, 0);
}
</style>
