<template functional>
  <div class="w-full flex min-h-48">
    <div
      v-if="props.right"
      class="w-1/2"
      :class="{ 'hidden md:block': props.right }"
    />

    <div
      class="w-full md:w-1/2 border-dashed border-green-400 relative px-8 py-4"
      :class="{
        'border-l md:-ml-px': props.right,
        '-mr-px border-r-0 border-l md:border-l-0 md:border-r text-left md:text-right': !props.right
      }"
    >
      <div
        class="w-4 h-4 bg-green-400 absolute top-6 rounded-full"
        :class="{
          '-left-2': props.right,
          '-left-2 md:-right-2 md:left-auto': !props.right
        }"
      />
      <h3 class="text-xl">{{ props.careerEntry.name }}</h3>
      <small>{{ props.careerEntry.location }}</small>

      <g-image
        v-if="props.careerEntry.volunteer"
        class="absolute top-2 opacity-5"
        :class="{
          'right-0 md:right-6': props.right,
          'right-0 md:right-auto md:left-6': !props.right
        }"
        width="100"
        src="../assets/images/volunteer.png"
        alt="Volunteer work icon"
      />

      <ul class="mt-2">
        <li
          class="mb-2"
          v-for="(timeEntry, index2) in props.careerEntry.entries"
          :key="index2 + 'time'"
        >
          <p class="text-gray-600">{{ timeEntry.period }}</p>
          <p>{{ timeEntry.position }}</p>
          <p>
            <component
              :is="injections.components.TechnologyLabel"
              :classes="index % 2 === 0 ? 'ml-1 pl-1' : 'mr-1 pr-1'"
              v-for="(tech, index3) in timeEntry.tech"
              :tag="tech"
              :key="index3 + 'tech'"
            />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TechnologyLabel from './TechnologyLabel'

export default {
  name: 'CareerItem',

  props: {
    right: {
      type: Boolean,
      default: false
    },
    careerEntry: {
      type: Object,
      required: true
    }
  },

  inject: {
    components: {
      default: {
        TechnologyLabel
      }
    }
  }
}
</script>

<style lang="postcss" scoped></style>
