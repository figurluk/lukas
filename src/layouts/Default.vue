<template functional>
  <div class="layout">
    <header class="header">
      <component class="max-w-6xl mx-auto" :is="injections.components.Navbar" />
    </header>

    <slot />

    <container class="bg-gray-100">
      <component :is="injections.components.Footer" />
    </container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  name: 'Default',

  inject: {
    components: {
      default: {
        Navbar,
        Footer
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
