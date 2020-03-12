<template>
  <div class="w-full flex relative">
    <div class="w-1/2 min-h-screen p-16">
      <me />
    </div>
    <div
      class="w-1/2 min-h-screen max-h-screen overflow-auto selection-base16 bg-base16 text-base16 pt-16"
    >
      <!-- eslint-disable vue/no-v-html -->
      <pre class=" px-16 pb-16" v-html="syntaxHighlight(cvConfig)"></pre>
    </div>
    <img
      class="centered api-connector-base16 h-64 w-64"
      :src="require('../assets/images/lukas-api-symbol.svg')"
      alt="UML api connector"
    />
    <theme-selector />
  </div>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector'
import cv from '@/config/cv'
import Me from '@/components/Me'
export default {
  name: 'Index',

  components: {
    Me,
    ThemeSelector
  },

  data: () => ({
    cvConfig: cv
  }),

  mounted() {
    document.querySelectorAll('.json-url').forEach((el) => {
      el.addEventListener('click', this.goToURL)
    })
  },

  destroyed() {
    document.querySelectorAll('.json-url').forEach((el) => {
      el.removeEventListener('click', this.goToURL)
    })
  },

  methods: {
    goToURL(ele) {
      window.open(ele.target.textContent.replace(/"/g, ''), '_blank')
    },

    syntaxHighlight(json) {
      json = JSON.stringify(json, undefined, 4)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
        function(match) {
          let cls = 'number'
          if (match.startsWith('"')) {
            if (match.endsWith(':')) {
              cls = 'key'
              match = match.replace(
                ':',
                '<span class="delimiter-base16">:</span>'
              )
            } else if (match.includes('http')) {
              cls = 'json-url string'
            } else {
              cls = 'string'
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean'
          } else if (/null/.test(match)) {
            cls = 'null'
          }
          return '<span class="' + cls + '-base16">' + match + '</span>'
        }
      )
    }
  }
}
</script>

<style lang="postcss">
.json-url {
  @apply .underline .cursor-pointer;
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -141px;
}
</style>
