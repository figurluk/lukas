<template>
  <section id="career" class="w-full flex flex-col py-8">
    <div class="w-full flex mb-4">
      <heading class="mx-auto text-3xl">
        Career
      </heading>
    </div>

    <div class="w-full flex flex-col px-16 md:px-0">
      <career-item
        v-for="(careerEntry, index) in careerData"
        :key="index"
        :career-entry="careerEntry"
        :right="index % 2 === 1"
      />
    </div>
  </section>
</template>

<script>
import CareerItem from './CareerItem'
import TechnologyLabel from './TechnologyLabel'
import career from '../config/career'

export default {
  name: 'Career',

  components: {
    TechnologyLabel,
    CareerItem
  },

  data: () => ({
    careerData: career
  })
}
</script>

<style scoped></style>
