<template>
  <resource-section
    id="newsletter"
    heading="Newsletter Signup"
    description="stay informed on all things Lansing Codes"
  >
    <form @submit.prevent="subscribe" novalidate v-if="!isSubscribed">
      <div class="input-group">
        <input
          type="text"
          class="form-control input-lg"
          placeholder="Email address"
          name="EMAIL"
          id="EMAIL"
          aria-label="Email address"
          v-model="email"
        >
        <div class="input-group-append">
          <button
            class="btn btn-primary"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
      <p class="form-text text-center text-danger">
        {{{ message }}}
      </p>
    </form>
    <div v-if="isSubscribed" class="text-center font-weight-bold">
      {{{ message }}}
    </div>
  </resource-section>
</template>

<script>
  import resourceSection from './resource-section'
  import Vue from 'vue'
  import VueJsonp from 'vue-jsonp'
  Vue.use(VueJsonp)

  export default {
    components: {
      resourceSection
    },
    data () {
      return {
        email: '',
        isSubscribed: false,
        message: ''
      }
    },
    methods: {
      subscribe () {
        const url = 'https://codes.us19.list-manage.com/subscribe/post-json?u=284c94c0d64272db7f56f4c6d&amp;id=f13ffe3703&c?'

        this.$jsonp(url, { EMAIL: this.email, callbackQuery: 'c' })
        .then(response => {
          if (response.result === 'error') {
            this.isSubscribed = false
            if (/^[\d ]+-/.test(response.msg)) {
              this.message = response.msg.slice(response.msg.indexOf('-') + 1)
            } else {
              this.message = response.msg || 'Oh no! Something went wrong.'
            }
          } else {
            // success handler
            this.isSubscribed = true
            this.message = response.msg
          }
        }).catch(() => {
          this.isSubscribed = false
          this.message = 'Oh no! Something went wrong.'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-group {
    margin: 0 auto;

    input.form-control {
      border-top-left-radius: 300px;
      border-bottom-left-radius: 300px;
    }
  }

  @media (min-width: 992px) {
    .input-group {
      max-width: 50%;
    }
  }
</style>
