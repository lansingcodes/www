<template>
  <section
    id="events"
    class="sm:-mt-48"
  >
    <div class="lc-bg-right-triangle bg-transparent h-64"/>
    <div class="lc-bg-ltr-gradient">
      <div class="container mx-auto">
        <section-heading
          white
          heading="Upcoming Events"
          subheading="events and resources for Lansing coders"
        />

        <div class="w-full">
          <event-calendar class="hidden lg:block" />
          <event-list class="block lg:hidden" />
        </div>
      </div>
    </div>
    <div class="lc-bg-down-triangle bg-white h-64 -mt-32"/>
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
.lc-bg-ltr-gradient {
  background: linear-gradient(to right, #2979bf, #005198);
}

.lc-bg-right-triangle {
  background-image: url(../assets/images/bg/right-triangle.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.lc-bg-down-triangle {
  background-image: url(../assets/images/bg/down-triangle.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
