<template>
  <section id="banner" class="w-full flex relative">
    <div class="w-full md:w-1/2 flex py-48 px-8">
      <div class="my-auto">
        <p class="text-sm text-gray-500 font-semibold">HELLO</p>
        <h1 class="text-5xl leading-none font-baloo mb-2">I'm Lukas</h1>
        <h3 class="text-lg text-gray-600 font-baloo mb-12">
          Fullstack software engineer <br />& Tech consultant
        </h3>

        <a class="btn-primary" href="#contact">Contact</a>
      </div>
    </div>
    <div class="hidden md:block w-1/2 flex pt-8">
      <g-image
        class="h-full max-h-128"
        src="../assets/images/lukas.png"
        alt="Lukas image"
        quality="100"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
