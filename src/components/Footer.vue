<template>
  <footer class="w-full flex py-4 px-8 text-xs text-gray-600">
    <span>{{ currentYear }} &copy; Lukas Figura</span>
    <g-link class="ml-auto mr-2" to="/legal/terms" target="_blank"
      >Terms</g-link
    >
    <g-link to="/legal/privacy" target="_blank"
      >Personal data protection</g-link
    >
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
