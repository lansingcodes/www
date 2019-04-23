<template>
  <section
    id="meetups"
    class="container mx-auto flex flex-wrap justify-start px-4 md:px-12 mb-16"
  >
    <section-heading
      blue
      heading="Free Meetups"
      subheading="regular meetups to help you become a better coder"
      class="w-full lg:w-1/2 self-center"/>
    <card
      v-for="meetup in meetups"
      :key="meetup.heading"
      :heading="meetup.heading"
      :url="meetup.url"
      :subheading="meetup.subheading"
      :description="meetup.description"
      :icon-set="meetup.iconSet"
      :icon-name="meetup.iconName"
      :icon-text="meetup.iconText"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--figure'
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
