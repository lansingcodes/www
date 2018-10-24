<template>
  <resource-section
    id="meetups"
    heading="Free Meetups"
    description="regular meetups to help you become a better coder"
    edit-path="src/config/meetups.js"
  >
    <grid :columns="4">
      <div slot="item" v-for="meetup in meetups" class="text-center">
        <a :href="meetup.url" target="_blank">
          <i
            v-if="hasFontAwesomeIcon(meetup)"
            class="fa fa-4x {{ meetup.icon }}">
          </i>
          <i v-else class="fa fa-4x icon-just-text">{{ meetup.icon }}</i>
          <h3>{{ meetup.name }}</h3>
        </a>
        <h4 class="text-muted">{{ meetup.on }}</h4>
        <p class="text-muted">{{{ meetup.desc }}}</p>
      </div>
    </grid>
  </resource-section>
</template>

<script>
  import meetups from 'src/config/meetups'
  import resourceSection from './resource-section'
  import grid from './grid'

  export default {
    components: {
      resourceSection, grid
    },
    data () {
      return {
        meetups
      }
    },
    methods: {
      hasFontAwesomeIcon (meetup) {
        return meetup.icon.indexOf('-') !== -1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/scss/custom-bootstrap-theme";

  i {
    &.fa {
      margin-bottom: 25px;
    }

    &.fa-4x {
      height: 50px;
    }

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
    font-family: $header-font-family;
  }
</style>
