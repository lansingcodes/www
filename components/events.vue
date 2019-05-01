<template>
  <section
    id="events"
    class="
      flex flex-wrap align-start justify-around
      bg-blue py-8 px-4 mb-16
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
import meetups from '~/config/meetups'

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
    iconForEvent(event) {
      const meetup = meetups.find(meetup => {
        return meetup.meetupSlug === event.relationships.group.attributes.slug
      })
      if (meetup) {
        const { iconSet, iconName, iconText } = meetup
        return { iconSet, iconName, iconText }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-image: url(../assets/images/bg/stay-informed.svg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
