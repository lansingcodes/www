<template>
  <section
    id="events"
    class="flex flex-wrap justify-start"
  >
    <section-heading
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
      class="w-full"
    />
    <div
      v-for="event in events"
      :key="event.name"
      class="px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-2 mb-4 md:mb-8"
    >
      <eventCard
        :event-name="event.attributes.name"
        :event-link="event.links.self"
        :event-date="formatDate(event.attributes.time.absolute)"
        :event-description="event.attributes.description"
        :venue="event.relationships.venue.attributes"
      />
    </div>
  </section>
</template>

<script>
import { format } from 'date-fns'
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
  },
  methods: {
    formatDate(date) {
      return format(date, 'dddd, MMMM D [at] h:mm a')
    }
  }
}
</script>
