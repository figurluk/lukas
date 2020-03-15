<template>
  <section id="about" class="w-full flex flex-wrap py-16 md:py-32">
    <div class="w-full md:w-1/2 flex pl-8">
      <heading class="my-auto text-5xl" :info-char="'A'">
        About Me
      </heading>
    </div>
    <div class="w-full md:w-1/2 text-gray-700 py-8 px-8">
      <p class="mb-8">
        Product-oriented full-stack engineering lead and technology consultant.
        Experience with the full software life cycle and multitude of
        programming languages, development & testing frameworks, databases,
        operating systems and cloud solutions allow me to pick the right tech &
        tools for the job.
      </p>
      <p class="mb-8">
        Knowledge of both the frontend & backend components of web applications
        in all type of size from startup, to scaleup and enterprise maximize the
        return on your digital investment.
      </p>
      <div class="w-full flex">
        <a class="btn-primary mr-4" href="/#career">Career</a>
        <a class="btn-secondary">Download CV</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped></style>
