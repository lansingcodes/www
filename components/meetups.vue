<template>
  <section class="flex flex-wrap justify-around md:justify-between px-4 md:px-12">
    <section-heading
      heading="Free Meetups"
      subheading="learn and network with peers"
      class="w-64"/>
    <card
      v-for="meetup in meetups"
      :key="meetup.heading"
      :heading="meetup.heading"
      :url="meetup.url"
      :subheading="meetup.subheading"
      :description="meetup.description"
      :icon-set="meetup.iconSet"
      :icon-name="meetup.iconName"
      has-icon
      has-subheading
      class="mb-4"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--small'
import meetups from '~/config/meetups'
export default {
  components: {
    card,
    sectionHeading
  },
  data() {
    return {
      meetups
    }
  }
}
</script>

<style scoped>
/* makes the last row line up with the grid */
section:after {
  content: '';
  flex: auto;
}
</style>
