<template>
  <resource-section
    id="sponsors"
    heading="Lansing Codes Sponsors"
    description="sponsors to help you become a better coder"
    edit-path="src/config/sponsors.js"
  >
    <grid :columns="4">
      <div slot="item" v-for="sponsor in sponsors" class="text-center">
        <a :href="sponsor.url" target="_blank">
          <img v-bind:src="getLogoImg(sponsor.logo)" alt="{{ sponsor.name }} Logo" class="sponsor-logo">
          <h3>{{ sponsor.name }}</h3>
        </a>
        <p class="text-muted">{{ sponsor.desc }}</p>
      </div>
    </grid>
  </resource-section>
</template>

<script>
  import sponsors from 'src/config/sponsors'
  import resourceSection from './resource-section'
  import grid from './grid'

  export default {
    components: {
      resourceSection, grid
    },
    data () {
      return {
        sponsors
      }
    },
    methods: {
      getLogoImg (logo) {
        return require('../assets/images/sponsors/' + logo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sponsor-logo {
    max-width: 180px;
    max-width: 180px;
  }
  .icon-just-text {
    line-height: 50px;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
</style>
