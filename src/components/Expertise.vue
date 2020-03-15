<template>
  <section id="expertise" class="w-full flex flex-col py-8">
    <div class="w-full flex mb-4">
      <heading class="mx-auto text-3xl">
        Expertise
      </heading>
    </div>
    <div class="w-full flex flex-wrap text-gray-700 justify-between pb-4 px-8">
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Nuxt">
        <g-image
          class="mx-auto"
          :alt="'Nuxt logo'"
          src="../assets/images/technologies/nuxt-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="VueJS">
        <g-image
          class="mx-auto"
          :alt="'VueJS logo'"
          src="../assets/images/technologies/vue-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col pt-4" alt="Angular">
        <g-image
          class="mx-auto"
          :alt="'Angular logo'"
          src="../assets/images/technologies/angular-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Cypress">
        <g-image
          class="mx-auto"
          :alt="'Cypress logo'"
          src="../assets/images/technologies/cypress-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Jest">
        <g-image
          class="mx-auto"
          :alt="'Jest logo'"
          src="../assets/images/technologies/jest-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="NodeJS">
        <g-image
          class="mx-auto"
          :alt="'NodeJS logo'"
          src="../assets/images/technologies/nodejs-logo.svg"
        />
      </technology>
    </div>
    <div class="w-full flex flex-wrap text-gray-700 justify-between pb-4 px-8">
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="GraphQL">
        <g-image
          class="mx-auto"
          :alt="'GraphQL logo'"
          src="../assets/images/technologies/graphql-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Laravel">
        <g-image
          class="mx-auto"
          :alt="'Laravel logo'"
          src="../assets/images/technologies/laravel-logo-light.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Java">
        <g-image
          class="mx-auto"
          :alt="'Java logo'"
          src="../assets/images/technologies/golang.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Netlify">
        <g-image
          class="mx-auto"
          :alt="'Netlify logo'"
          src="../assets/images/technologies/netlify-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Jira">
        <g-image
          class="mx-auto"
          :alt="'Jira logo'"
          src="../assets/images/technologies/jira-logo.svg"
        />
      </technology>
      <technology class="mx-4 w-24 sm:32 flex flex-col" alt="Trello">
        <g-image
          class="mx-auto"
          :alt="'Trello logo'"
          src="../assets/images/technologies/trello-light.svg"
        />
      </technology>
    </div>
  </section>
</template>

<script>
import Technology from './Technology'
export default {
  name: 'Expertise',
  components: { Technology }
}
</script>

<style scoped></style>
