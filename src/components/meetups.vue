<template>
  <resource-section
    id="meetups"
    heading="Free Meetups"
    description="regular meetups to help you become a better coder"
  >
    <grid :columns="4">
      <div slot="item" v-for="meetup in meetups" class="text-center">
        <a :href="meetup.url" target="_blank">
          <i class="fa fa-4x {{ meetup.icon }}"></i>
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
  }
</style>
