<template>
  <div class="w-full flex py-4">
    <nav class="nav">
      <g-link class="nav__link" to="/#about">About</g-link>
      <g-link class="nav__link" to="/#career">Career</g-link>
      <g-link class="nav__link" to="/#expertise">Expertise</g-link>
      <g-link class="nav__link" to="/#contact">Contact</g-link>
    </nav>
    <div class="ml-auto">
      <a
        class="text-gray-600 mr-3"
        href="https://www.linkedin.com/in/lukasfigura"
        target="_blank"
        rel="noopener"
        aria-label="Linkedin anchor"
      >
        <span class="fab fa-linkedin-in" />
      </a>
      <a
        class="text-gray-600"
        href="mailto:join@lukas.life"
        target="_blank"
        rel="noopener"
        aria-label="Mail anchor"
      >
        <span class="fas fa-at" />
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
