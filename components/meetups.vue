<template>
  <section class="flex flex-wrap justify-between px-4 md:px-12">
    <div class="w-64 p-2 self-center justify-center text-center">
      <h2 class="uppercase text-grey-darker text-3xl mb-2">Free Meetups</h2>
      <p>regular events to help you become a better coder</p>
      <hr class="border-4 border-grey-darker my-6 w-1/6 ">
    </div>
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
      class="mb-8"
    />
  </section>
</template>

<script>
import card from '~/components/card--small'
import meetups from '~/config/meetups'
export default {
  components: {
    card
  },
  data() {
    return {
      meetups
    }
  }
}
</script>
