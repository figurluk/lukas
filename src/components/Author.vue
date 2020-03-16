<template functional>
  <div class="w-full pt-4 flex flex-col relative text-xs md:text-sm">
    <p class="font-semibold">{{ props.author.name }}</p>
    <p>{{ props.author.position }}</p>
    <div
      class="w-full flex"
      :class="{ 'justify-start md:justify-end': !props.right }"
    >
      <a
        :href="props.author.linkedin"
        target="_blank"
        :aria-label="props.author.name"
        rel="noopener"
        ><span class="fab fa-linkedin-in"
      /></a>
    </div>

    <span
      class="absolute bottom-0 fas fa-quote-left text-5xl opacity-5 text-black"
      :class="{
        'right-0 md:right-auto md:left-0': !props.right,
        'right-0': props.right
      }"
    />
  </div>
</template>

<script>
import TechnologyLabel from './TechnologyLabel'
import AchievementBlock from './AchievementBlock'
import AppearTransition from './AppearTransition'

export default {
  name: 'Author',

  props: {
    author: {
      type: Object,
      required: true
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped></style>
