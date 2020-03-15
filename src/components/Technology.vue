<template functional>
  <div :class="data.staticClass" class="technology__container">
    <slot />

    <div class="technology__label">{{ props.alt }}</div>
  </div>
</template>

<script>
export default {
  name: 'Technology',

  props: {
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.technology__label {
  @apply opacity-0 text-gray-600 text-center mt-auto;
  transition: opacity 200ms ease-in-out;
  will-change: opacity;
}

.technology__container:hover .technology__label {
  @apply opacity-100;
}
</style>
