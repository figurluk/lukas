<template>
  <div class="technology__container">
    <span
      v-if="favorite"
      class="text-gray-300 absolute right-2 top-2 fas fa-heart"
    />
    <slot />

    <div
      class="technology__label opacity-100 md:opacity-0 text-sm md:text-base"
    >
      {{ alt }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Technology',

  props: {
    alt: {
      type: String,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.technology__label {
  @apply text-gray-600 text-center mt-auto;
  transition: opacity 200ms ease-in-out;
  will-change: opacity;
}

.technology__container {
  @apply .relative;
}

.technology__container:hover .technology__label {
  @apply opacity-100;
}

img {
  height: 80%;
  width: auto;
}
</style>
