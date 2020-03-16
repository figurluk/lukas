<template functional>
  <Layout>
    <container class="bg-gray-100">
      <component :is="injections.components.Banner" />
    </container>

    <container class="bg-white">
      <component :is="injections.components.About" />
    </container>

    <container class="bg-gray-100">
      <component :is="injections.components.Career" />
    </container>

    <container class="bg-white">
      <component :is="injections.components.Expertise" />
    </container>

    <container class="bg-gray-100">
      <component :is="injections.components.Contact" />
    </container>
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
        Expertise: () => import('../components/Expertise')
      }
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
