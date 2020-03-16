<template>
  <section id="about" class="w-full flex flex-wrap py-16 md:py-32">
    <div class="w-full md:w-1/2 flex pl-8">
      <heading class="my-auto text-5xl" :info-char="'A'">
        About Me
      </heading>
    </div>
    <div class="w-full md:w-1/2 text-gray-700 py-8 px-8">
      <appear-transition class="mb-8">
        Product-oriented full-stack engineering lead and technology consultant.
        Experience with the full software life cycle and a multitude of
        programming languages, development & testing frameworks, databases,
        operating systems, and cloud solutions allow me to pick the right tech &
        tools for the job.
      </appear-transition>
      <appear-transition :timeout="150" class="">
        Knowledge of both the front-end & back-end components of web applications
        in all types of sizes from startup to scaleup and enterprise, maximize
        the return on your digital investment.
      </appear-transition>
    </div>
  </section>
</template>

<script>
import AppearTransition from './AppearTransition'

export default {
  name: 'About',
  components: { AppearTransition }
}
</script>

<style scoped></style>
