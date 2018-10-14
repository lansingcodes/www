<template>
  <resource-section
    id="newsletter"
    heading="Newsletter Signup"
    description="Stay informed on all things Lansing Codes"
  >
    <form>
      <div class="flex">
        <div class="form-group col-33">
            <label for="firstName">First Name:</label>
            <input type="text" class="form-control" id="firstName" placeholder="Jane" v-model="firstName">
        </div>
        <div class="form-group col-33">
            <label for="lastName">Last Name:</label>
            <input type="text" class="form-control" id="lastName" placeholder="Doe" v-model="lastName">
        </div>
        <div class="form-group col-33">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="jane.doe@example.com" v-model="email">
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary btn-lg btn-signup" @click="subscribe()">Signup</button>
      </div>
    </form>
  </resource-section>
</template>

<script>
  import resourceSection from './resource-section'
  import Vue from 'vue'
  import VueResource from 'vue-resource'

  Vue.use(VueResource)

  export default {
    components: {
      resourceSection
    },
    data () {
      return {
        firstName: '',
        lastName: '',
        email: ''
      }
    },
    methods: {
      subscribe () {
        const requestBody = {
          'email_address': this.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': this.firstName,
            'LNAME': this.lastName
          }
        }
        console.log(requestBody)
        Vue.http.post('https://us19.api.mailchimp.com/3.0/lists/f13ffe3703/members/', requestBody)
        .then(response => {
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .col-33 {
        width: 100%;
        padding: 5px;
    }

    .flex {
        max-width: 1000px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-bottom: 30px;
        margin: auto;

        @media (min-width: 992px) { 
            flex-direction: row;
         }
    }

    .form-group {
        label {
            padding-right: 10px;
        }
    }

    .btn-signup {
        padding: 12px 50px;
    }
</style>
