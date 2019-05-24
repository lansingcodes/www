<template>
  <section
    id="events"
    class="
      bg-blue pt-8 md:pt-64 pb-8 md:pb-32 px-4 md:px-16 mb-16 md:-mt-64
    "
  >
    <section-heading
      white
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
      class="w-full"
    />

    <events-list/>
  </section>
</template>

<script>
import sectionHeading from '~/components/section-heading'
import eventsList from '~/components/events-list'

export default {
  components: {
    sectionHeading,
    eventsList
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
