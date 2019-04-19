<template>
  <section
    id="events"
    class="
      relative flex flex-wrap align-start justify-center
      sm:justify-start bg-blue pt-8 px-4 mb-16
    "
  >
    <section-heading
      white
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
      class="w-full"
    />

    <event-card
      v-for="event in events"
      :key="event.attributes.id"
      :event-name="event.attributes.name"
      :event-link="event.links.self"
      :event-time="event.attributes.time.absolute"
      :event-description="event.attributes.description"
      :venue="event.relationships.venue.attributes"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import eventCard from '~/components/card--event'
import truncate from '~/utils/truncate'

export default {
  components: {
    sectionHeading,
    eventCard
  },
  computed: {
    events() {
      return this.$store.state.events.upcoming
    }
  }
}
</script>
