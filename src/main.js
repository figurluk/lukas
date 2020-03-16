import '~/assets/css/global.css'
import Container from '~/components/Container'
import DefaultLayout from '~/layouts/Default.vue'
import Heading from '~/components/Heading'
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate/dist/vee-validate.full'

require('@fortawesome/fontawesome-free/css/all.min.css')

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
  Vue.component('Container', Container)
  Vue.component('Heading', Heading)
  head.meta.push({ name: 'author', content: 'Lukas Figura' })

  head.meta.push({
    name: 'keywords',
    content:
      'nuxt,vue,javascript,laravel,go,nodejs,consultant,full-stack,engineering,lead,frontend,backend'
  })

  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: `Lukas Figura`
  })

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: 'https://lukas.life/assets/lukas.png'
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Product-oriented full-stack engineering lead and technology consultant.`
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Product-oriented full-stack engineering lead and technology consultant.`
  })

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://lukas.life' + to.path
    })
    next()
  })
}
