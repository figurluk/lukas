<template functional>
  <span
    class="text-green-500 mb-1 rounded text-xs xl:text-sm inline-block no-underline"
    :class="[data.staticClass, props.classes]"
  >
    <span class="font-bold leading-none"># </span>{{ props.tag }}
  </span>
</template>

<script>
export default {
  name: 'TechnologyLabel',

  props: {
    tag: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: 'true'
    }
  }
}
</script>

<style scoped></style>
