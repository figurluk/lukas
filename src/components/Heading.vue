<template>
  <div class="heading-container">
    <h2 class="heading" :data-before-content="infoChar"><slot /></h2>
  </div>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    infoChar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.heading::before {
  @apply text-12xl bottom-0 absolute opacity-5 leading-none;
  content: attr(data-before-content);
  left: -3rem;
}

.heading::after {
  @apply w-12 h-1 bg-green-400 bottom-0 left-0 absolute;
  content: ' ';
}

.heading {
  @apply font-baloo relative;
}
</style>
