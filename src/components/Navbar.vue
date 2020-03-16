<template>
  <div class="w-full flex py-4 px-4 md:px-8 md:px-0">
    <nav class="nav">
      <g-link class="nav__link" to="/#about">About</g-link>
      <g-link class="nav__link" to="/#career">Career</g-link>
      <g-link class="nav__link" to="/#expertise">Expertise</g-link>
      <g-link class="nav__link" to="/#contact">Contact</g-link>
    </nav>
    <div class="ml-auto">
      <a
        class="text-gray-600 mr-3"
        href="/docs/CV-LukasFigura.pdf"
        target="_blank"
        rel="noopener"
        aria-label="CV anchor"
      >
        <span class="fas fa-file" /> </a
      ><a
        class="text-gray-600 mr-3"
        href="https://www.linkedin.com/in/lukasfigura"
        target="_blank"
        rel="noopener"
        aria-label="Linkedin anchor"
      >
        <span class="fab fa-linkedin-in" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="postcss" scoped>
.nav {
  @apply mr-auto flex;
}

.nav__link {
  @apply mr-4 border-b-0 border-gray-800 text-gray-800;
  transition: border-bottom-width 200ms ease-in-out;
  will-change: border-bottom-width;
}

.nav__link.active--exact {
  @apply border-b-2;
}
</style>
