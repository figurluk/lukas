require('@fortawesome/fontawesome-free/css/all.min.css')

import '~/assets/css/global.css'
import DefaultLayout from '~/layouts/Default.vue'
import Heading from '~/components/Heading'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Heading', Heading)
}
