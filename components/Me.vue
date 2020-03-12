<template>
  <div class="w-full">
    <div class="w-full flex">
      <h1>{{ cvConfig.fullName.toLowerCase() }}</h1>
      <a
        href="https://www.linkedin.com/in/lukas-figura/"
        target="_blank"
        rel="noopener"
        class="ml-auto mt-auto text-h3"
      >
        <span class="fab fa-linkedin"></span>
      </a>
    </div>
    <div class="w-full flex items-center">
      <span
        v-if="cvConfig.status === 'busy'"
        class="w-4 h-4 rounded-full bg-orange-600"
      ></span>
      <span
        v-if="cvConfig.status === 'ready'"
        class="w-4 h-4 rounded-full bg-green-400"
      ></span>
      <span class="ml-4 text-xl">{{ cvConfig.status }}</span>
    </div>
  </div>
</template>

<script>
import cv from '@/config/cv'
export default {
  name: 'Me',

  data: () => ({
    cvConfig: cv
  })
}
</script>

<style scoped></style>
