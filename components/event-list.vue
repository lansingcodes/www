<template>
  <div
    class="
      flex flex-wrap align-start justify-around
    "
  >
    <event-card
      v-for="event in events"
      :key="event.attributes.id"
      :event-name="event.attributes.name"
      :event-link="event.links.self"
      :event-time="event.attributes.time.absolute"
      :event-description="event.attributes.description"
      :group="event.relationships.group"
      :venue="event.relationships.venue.attributes"
      :icon="iconForEvent(event)"
    />
  </div>
</template>

<script>
import eventCard from '~/components/card--event'
import iconForEvent from '~/utils/icon-for-event'

export default {
  components: {
    eventCard
  },
  computed: {
    events() {
      return this.$store.state.events.upcoming
    }
  },
  methods: {
    iconForEvent
  }
}
</script>
