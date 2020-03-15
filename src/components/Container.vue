<template functional>
  <div class="w-full" :class="data.staticClass">
    <div class="max-w-6xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>
