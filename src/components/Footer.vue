<template functional>
  <footer class="w-full py-4 text-sm text-gray-600">
    {{ $options.getCurrentYear() }} &copy; Lukas Figura
  </footer>
</template>

<script>
const currentYear = new Date().getFullYear()
export default {
  name: 'Footer',

  getCurrentYear() {
    return currentYear
  }
}
</script>

<style scoped></style>
