<template>
  <section
    id="events"
    class="
      bg-blue pt-8 md:pt-64 pb-8 md:pb-32 px-4 md:px-16 mb-16 md:-mt-64
    "
  >
    <div class="container mx-auto w-full flex flex-wrap lg:justify-end">
      <section-heading
        white
        heading="Upcoming Events"
        subheading="events and resources for Lansing coders"
        class="mx-auto lg:mr-32"
      />

      <div class="w-full">
        <event-calendar class="hidden lg:block" />
        <event-list class="block lg:hidden" />
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import eventCalendar from '~/components/event-calendar'
import eventList from '~/components/event-list'

export default {
  components: {
    sectionHeading,
    eventCalendar,
    eventList
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
