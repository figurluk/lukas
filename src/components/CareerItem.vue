<template>
  <div class="w-full flex min-h-48">
    <div v-if="right" class="w-1/2" :class="{ 'hidden md:block': right }" />

    <div
      class="w-full md:w-1/2 border-dashed border-green-400 relative px-8 py-4"
      :class="{
        'border-l md:-ml-px': right,
        '-mr-px border-r-0 border-l md:border-l-0 md:border-r text-left md:text-right': !right
      }"
    >
      <div
        class="w-4 h-4 bg-green-400 absolute top-6 rounded-full"
        :class="{
          '-left-2': right,
          '-left-2 md:-right-2 md:left-auto': !right
        }"
      />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerItem',

  props: {
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped></style>
