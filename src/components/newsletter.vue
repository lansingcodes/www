<template>
  <resource-section
    id="newsletter"
    heading="Newsletter Signup"
    description="Stay informed on all things Lansing Codes"
  >
    <form @submit.prevent="subscribe" novalidate v-if="!isSubscribed">
      <div class="input-group">
        <input type="text" class="form-control input-lg" placeholder="Email address" name="EMAIL" id="EMAIL" aria-label="email address" v-model="email">
        <span class="input-group-btn">
          <button type="submit" class="btn btn-primary btn-lg">Subscribe</button>
        </span>
      </div>
      <p class="help-block text-center">{{message}}</p>
    </form>
    <div v-if="isSubscribed">
      {{message}}
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

        this.$jsonp(url, { EMAIL: this.email, callbackQuery: 'c' }).then(response => {
          console.log(response)
          if (response.result === 'error') {
            this.isSubscribed = false
            const _message = response.msg.split('-')
            this.message = (_message.length > 1) ? _message[1].trim() : 'Oh no! Something went wrong'
          } else {
            // success handler
            this.isSubscribed = true
            this.message = response.msg
          }
        }).catch(() => {
          this.isSubscribed = false
          this.message = 'Oh no!  Something went wrong.'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input-group {
    input.form-control {
      border-top-left-radius: 300px;
      border-bottom-left-radius: 300px;
    }
  }
</style>
