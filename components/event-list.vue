<template>
  <div
    class="
      flex flex-wrap align-start justify-around
    "
  >
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
      :group="eventGroup(event)"
    />
  </div>
</template>

<script>
import eventCard from '~/components/card--event'
import groupForEvent from '~/utils/group-for-event'

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
    eventGroup(event) {
      return groupForEvent(event, this.$store.state.groups.all)
    }
  }
}
</script>
