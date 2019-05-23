<template>
  <section
    id="events"
    class="
      flex flex-wrap align-start justify-around bg-blue
      pt-8 md:pt-64 pb-8 md:pb-32 px-4 md:px-16 mb-16 md:-mt-64
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
      :group="event.relationships.group"
      :venue="event.relationships.venue.attributes"
      :icon="iconForEvent(event)"
    />
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import eventCard from '~/components/card--event'
import truncate from '~/utils/truncate'
import iconForEvent from '~/utils/icon-for-event'

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
    iconForEvent
  }
}
</script>

<style lang="scss" scoped>
section {
  background: linear-gradient(to bottom left, #005198, #2979bf);

  @media (min-width: 768px) {
    background-color: transparent;
    background-image: url(../assets/images/bg/events.svg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
