<template>
  <section
    id="events"
    class="relative flex flex-wrap align-start justify-center sm:justify-start bg-blue-dark"
  >
    <section-heading
      white
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
      class="w-full"
    />

    <eventCard
      v-for="event in events"
      :key="event.name"
      :event-name="event.attributes.name"
      :event-link="event.links.self"
      :event-date="formatDate(event.attributes.time.absolute)"
      :event-description="event.attributes.description"
      :venue="event.relationships.venue.attributes"
      :expanded-event-name="expandedEventName"
      class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4
        mb-8 mx-auto"
      @card-event-expand="expandEventCard"
      @card-event-collapse="collapseEventCard"
    />
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
  data() {
    return {
      expandedEventName: null
    }
  },
  computed: {
    events() {
      return this.$store.state.events.upcoming
    }
  },
  methods: {
    formatDate(date) {
      return format(date, 'dddd, MMMM D [at] h:mm a')
    },
    expandEventCard(emittedEventName) {
      this.expandedEventName = emittedEventName
    },
    collapseEventCard(emittedEventName) {
      if (this.expandedEventName === emittedEventName) {
        this.expandedEventName = null
      }
    }
  }
}
</script>
