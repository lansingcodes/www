<template>
  <section
    id="meetups"
    class="
      container mx-auto flex flex-wrap justify-start px-4 md:px-12 mb-16 sm:mb-0
    "
  >
    <section-heading
      blue
      heading="Free Meetups"
      subheading="regular meetups to help you become a better coder"
      class="w-full lg:w-1/2 self-center"/>
    <card
      v-for="group in groups"
      :key="group.id"
      :heading="group.name"
      :url="group.url"
      :subheading="group.schedule"
      :description="group.description"
      :icon-set="group.iconSet"
      :icon-name="group.iconName"
      :icon-text="group.iconText"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import card from '~/components/card--figure'
import orderBy from 'lodash/orderBy'

export default {
  components: {
    card,
    sectionHeading
  },
  computed: {
    groups() {
      return orderBy(this.$store.state.groups.all, [
        group => group.name.toLowerCase().replace(/[^a-z]/g, '')
      ])
    }
  }
}
</script>
