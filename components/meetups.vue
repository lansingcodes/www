<template>
  <section
    id="meetups"
    class="container mx-auto flex flex-wrap justify-start px-4 md:px-12"
  >
    <section-heading
      heading="Free Meetups"
      subheading="learn and network with peers"
      class="w-full"/>
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
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2 md:mb-4"
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
