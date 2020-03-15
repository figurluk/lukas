<template>
  <section id="career" class="w-full flex flex-col py-8">
    <div class="w-full flex mb-4">
      <heading class="mx-auto text-3xl">
        Career
      </heading>
    </div>

    <div class="w-full flex flex-col px-16 md:px-0">
      <career-item>
        <h3 class="text-xl">Donner Consulting Group</h3>
      </career-item>
      <career-item right>
        <h3 class="text-xl">INNOVIS</h3>
      </career-item>
      <career-item>
        <h3 class="text-xl">Web Klikem</h3>
      </career-item>
      <career-item right>
        <h3 class="text-xl">E-zone technologies</h3>
      </career-item>
    </div>
  </section>
</template>

<script>
import CareerItem from './CareerItem'

export default {
  name: 'Career',

  components: {
    CareerItem
  }
}
</script>

<style scoped></style>
