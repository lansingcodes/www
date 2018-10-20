<template>
  <resource-section
    id="sponsors"
    heading="Our Sponsors"
    description="our gracious sponsors make all of this possible!"
    edit-path="src/config/sponsors.js"
  >
    <grid :columns="4">
      <div slot="item" v-for="sponsor in sponsors" class="text-center">
        <a :href="sponsor.url" target="_blank">
          <div class="spnsr-logo-wrapper">
            <img v-bind:src="getLogoImg(sponsor.logo)"
                 alt="{{ sponsor.name }} Logo"
                 class="spnsr-logo img-responsive center-block">
          </div>
          <h3>{{ sponsor.name }}</h3>
        </a>
        <p class="text-muted">{{ sponsor.desc }}</p>
      </div>
    </grid>
   
        <div class="become-a-sponser">
          <button-link
            class="fa-lg"
            type="primary"
            icon="fa-handshake-o"
            href="https://lansingcodes.typeform.com/to/ltKNRy"
            target="_blank"
          >
            Become a Sponser
          </button-link>
        </div>
 
  </resource-section>
</template>

<script>
  import sponsors from 'src/config/sponsors'
  import resourceSection from './resource-section'
  import grid from './grid'
  import buttonLink from './button-link'

  export default {
    components: {
      resourceSection, grid, buttonLink
    },
    data () {
      return {
        sponsors
      }
    },
    methods: {
      getLogoImg (logo) {
        return '/static/images/sponsors/' + logo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .spnsr-logo-wrapper {
    height: 180px;
    display: flex;
    align-items: center;
    .spnsr-logo {
      max-height: 100%;
      max-width: 180px;
    }
  }
  .become-a-sponser {
    text-align: center;
    margin-top: 50px;
  }


</style>
