import '~/assets/css/global.css'
import Container from '~/components/Container'
import DefaultLayout from '~/layouts/Default.vue'
import Heading from '~/components/Heading'

require('@fortawesome/fontawesome-free/css/all.min.css')

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)
  Vue.component('Heading', Heading)
}
