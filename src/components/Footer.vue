<template>
  <footer class="w-full py-4 text-sm text-gray-600">
    {{ currentYear }} &copy; Lukas Figura
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    currentYear: new Date().getFullYear()
  })
}
</script>

<style scoped></style>
