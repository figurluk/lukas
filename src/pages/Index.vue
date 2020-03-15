<template functional>
  <Layout>
    <component :is="injections.components.Container" class="bg-gray-100">
      <component :is="injections.components.Banner" />
    </component>

    <component :is="injections.components.Container" class="bg-white">
      <component :is="injections.components.About" />
    </component>

    <component :is="injections.components.Container" class="bg-gray-100">
      <component :is="injections.components.Career" />
    </component>

    <component :is="injections.components.Container" class="bg-white">
      <component :is="injections.components.Expertise" />
    </component>

    <component :is="injections.components.Container" class="bg-gray-100">
      <component :is="injections.components.Contact" />
    </component>

    <component :is="injections.components.Container" class="bg-gray-100">
      <component :is="injections.components.Footer" />
    </component>
  </Layout>
</template>

<script>
export default {
  name: 'Index',

  inject: {
    components: {
      default: {
        About: () => import('../components/About'),
        Banner: () => import('../components/Banner'),
        Career: () => import('../components/Career'),
        Contact: () => import('../components/Contact'),
        Container: () => import('../components/Container'),
        Expertise: () => import('../components/Expertise'),
        Footer: () => import('../components/Footer')
      }
    }
  },

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
