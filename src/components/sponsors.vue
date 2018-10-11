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
          <i
            v-if="hasFontAwesomeIcon(sponsor)"
            class="fa fa-4x {{ sponsor.icon }}">
          </i>
          <i v-else class="fa fa-4x icon-just-text">{{ sponsor.icon }}</i>
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
      hasFontAwesomeIcon (sponsor) {
        return sponsor.icon.indexOf('-') !== -1
      }
    }
  }
</script>

<style lang="scss" scoped>
  i.fa-4x {
    height: 50px;
  }

  i {
    &.fa-code { margin-left: -9px; }
    &.icon-html { margin-right: -10px; }
    &.icon-javascript { margin-right: -7px; }
    &.icon-java-bold { margin-right: -17px; }
    &.icon-mobile-device { margin-left: -5px; }
    &.icon-ruby { margin-right: -4px; }
    &[class|="icon"] { margin-top: 10px; }
  }

  .icon-just-text {
    line-height: 50px;
    font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  }
</style>
