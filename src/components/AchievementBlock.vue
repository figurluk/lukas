<template functional>
  <div
    class="w-full flex flex-col p-4 rounded bg-gray-200 text-gray-700"
    v-if="props.achievements !== null"
    :class="data.staticClass"
  >
    <p v-html="props.achievements" />

    <component
      v-if="props.author"
      class="text-right"
      :is="injections.components.Author"
      :author="props.author"
      :right="props.right"
    />
  </div>
</template>

<script>
import Author from './Author'

export default {
  name: 'AchievementBlock',

  props: {
    achievements: {
      type: String,
      default: null
    },
    author: {
      type: Object,
      default: null
    },
    right: {
      type: Boolean,
      default: false
    }
  },

  inject: {
    components: {
      default: {
        Author
      }
    }
  }
}
</script>

<style lang="postcss">
.highlighted-key {
  @apply text-green-500 font-semibold;
}
</style>
