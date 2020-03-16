<template functional>
  <div class="form-item">
    <label class="block text-grey-dark mb-1" :for="props.name">
      {{ props.label }}
      <!--      <span v-if="props.required" class="text-base-500 text-xl">*</span>-->
    </label>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',

  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.form-item {
  @apply .mb-4 .w-full;
}
</style>
