<template functional>
  <component :is="injections.components.AppearTransition" class="w-full">
    <div class="w-full flex flex-wrap min-h-48">
      <div
        v-if="props.right"
        class="w-1/2 px-8 pt-4"
        :class="{ 'hidden md:block': props.right }"
      >
        <component
          class="text-right"
          :is="injections.components.AchievementBlock"
          :achievements="props.careerEntry.achievements"
          :right="!props.right"
          :author="props.careerEntry.author"
        />
      </div>

      <div
        class="w-full md:w-1/2 border-dashed border-green-400 relative pl-6 md:px-8 py-4"
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
        <h3 class="text-2xl font-baloo leading-none">
          {{ props.careerEntry.name }}
        </h3>
        <small>{{ props.careerEntry.location }}</small>

        <g-image
          v-if="props.careerEntry.volunteer"
          class="absolute top-6 opacity-5 w-12 h-16 md:w-auto md:h-auto"
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
                :classes="
                  !props.right ? 'mr-1 pr-1 md:ml-1 md:pl-1' : 'mr-1 pr-1'
                "
                v-for="(tech, index3) in timeEntry.tech"
                :tag="tech"
                :key="index3 + 'tech'"
              />
            </p>
          </li>
        </ul>

        <component
          class="block md:hidden"
          :is="injections.components.AchievementBlock"
          :achievements="props.careerEntry.achievements"
          :author="props.careerEntry.author"
          :right="!props.right"
        />
      </div>
      <div class="hidden md:block w-1/2 px-8 pt-4" v-if="!props.right">
        <component
          :is="injections.components.AchievementBlock"
          :achievements="props.careerEntry.achievements"
          :author="props.careerEntry.author"
          :right="!props.right"
        />
      </div>
    </div>
  </component>
</template>

<script>
import TechnologyLabel from './TechnologyLabel'
import AchievementBlock from './AchievementBlock'
import AppearTransition from './AppearTransition'

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
        TechnologyLabel,
        AchievementBlock,
        AppearTransition
      }
    }
  }
}
</script>

<style lang="postcss" scoped></style>
