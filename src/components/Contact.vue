<template>
  <section
    id="contact"
    class="w-full flex flex-wrap text-sm py-12 md:py:24 lg:py-32"
  >
    <div class="w-full md:w-1/2 flex pl-8">
      <heading class="my-auto text-5xl" :info-char="'C'">
        Contact
      </heading>
    </div>
    <div
      class="w-full md:w-1/2 text-gray-700 px-8 py-8 border-l-0 md:border-l border-dashed border-green-300"
    >
      <ValidationObserver ref="observer" slim>
        <form
          class="flex-col"
          :name="formName"
          method="post"
          data-netlify="true"
          @submit.prevent="handleSubmit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" :value="formName" />
          <p class="hidden">
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>

          <form-item name="email" required label="Email">
            <ValidationProvider
              tag="div"
              name="email"
              class="flex flex-col"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                class="w-full md:w-2/3"
                :class="{ 'has-error': errors.length }"
                type="text"
                id="email"
                name="email"
                placeholder="@"
                v-model="form.email"
              />
              <small v-if="errors.length" class="text-red-400 mt-2 normal-case">
                - {{ errors[0] }}
              </small>
            </ValidationProvider>
          </form-item>
          <form-item name="message" required label="Message">
            <ValidationProvider
              tag="div"
              name="message"
              class="flex flex-col"
              rules="required"
              v-slot="{ errors }"
            >
              <textarea
                class="w-full md:w-2/3"
                :class="{ 'has-error': errors.length }"
                id="message"
                name="message"
                placeholder="Place your message here"
                v-model="form.message"
              />
              <small v-if="errors.length" class="text-red-400 mt-2 normal-case">
                - {{ errors[0] }}
              </small>
            </ValidationProvider>
          </form-item>

          <button class="btn-primary" type="submit">Submit</button>
          <transition name="fade">
            <div
              class="w-full py-4"
              v-if="hasMessage"
              :class="{
                'error-message': isErrorMsg,
                'success-message': !isErrorMsg
              }"
            >
              {{ hasMessage }}
            </div>
          </transition>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
import FormItem from './FormItem'
export default {
  name: 'Contact',

  components: { FormItem },

  data: () => ({
    formName: 'contact-form',
    hasMessage: null,
    successMessage: 'Thank you. I will answer you soon.',
    errorMessage:
      'Oh! Some bug is here. Please try again or contact me on LinkedIn.',
    form: {
      email: null,
      message: null
    }
  }),

  computed: {
    isErrorMsg() {
      return this.hasMessage === this.errorMessage
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },

    async handleSubmit() {
      if (!(await this.$refs.observer.validate())) {
        return
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': this.formName,
          ...this.form
        })
      })
        .then(() => {
          this.form = {
            email: null,
            message: null
          }
          this.$refs.observer.reset()
          this.hasMessage = this.successMessage
        })
        .catch(() => {
          this.hasMessage = this.errorMessage
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
.success-message {
  @apply text-green-500;
}
.error-message {
  @apply text-red-500;
}
</style>
