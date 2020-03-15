<template functional>
  <div class="layout">
    <header class="header">
      <component class="max-w-6xl mx-auto" :is="injections.components.Navbar" />
    </header>

    <slot />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Default',

  inject: {
    components: {
      default: {
        Navbar
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.layout {
  @apply flex flex-col;
}

.header {
  @apply flex sticky top-0 bg-gray-100 z-10;
}
</style>
