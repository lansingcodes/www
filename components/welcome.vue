<template>
  <div
    id="welcome"
    class="lc-background-image py-16 sm:py-32"
  >
    <div class="flex flex-wrap justify-center">
      <section
        class="
          flex-none w-full sm:w-1/2 sm:max-w-sm overflow-hidden sm:shadow-lg
          bg-white text-center p-8 sm:mb-24
        "
      >
        <section-heading
          h1
          blue
          heading="Lansing Codes"
          subheading="Events and resources for Lansing coders"
        />
        <p class="mt-0 mb-4">
          For those who code or aspire to, professionally or as a hobby
        </p>
        <img
          class="h-32 w-32"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
        >
      </section>

      <section
        class="
          hidden sm:block sm:w-1/2 max-w-sm overflow-hidden shadow-lg bg-blue-dark
          text-white p-8 sm:mt-24 sm:-ml-4
        "
      >
        <section-heading
          white
          heading="Next Event"
        />
        <div
          v-if="nextEvent"
          class="text-left font-normal"
        >
          <div class="flex flex-no-wrap items-center mb-2 min-h-12">
            <logo
              v-if="groupForNextEvent"
              :icon-set="groupForNextEvent.iconSet"
              :icon-name="groupForNextEvent.iconName"
              :icon-text="groupForNextEvent.iconText"
              class="mr-3"
            />
            <h3 class="font-bold">
              {{ nextEvent.name }}
            </h3>
          </div>
          <p class="flex flex-wrap justify-between text-sm mb-4 mt-0">
            <span class="mb-1 mr-2">
              {{ formatReadableDateTime(nextEvent.startTime) }}
            </span>
            <span
              v-if="nextEvent.venue"
            >
              {{ nextEvent.venue }}
            </span>
          </p>
          <div
            class="lc-event-description mb-6"
            v-html="nextEvent.description"
          />
        </div>
        <div class="text-center">
          <a
            :href="nextEvent.url"
            class="
              inline-block bg-white no-underline
              text-blue font-bold uppercase text-center py-4 mt-2 px-8
              min-w-24 rounded-full
            "
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn More and RSVP
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import sectionHeading from '~/components/section-heading'
import logo from '~/components/logo--small'
import truncate from '~/utils/truncate'
import groupForEvent from '~/utils/group-for-event'
import formatReadableDateTime from '~/utils/format-readable-date-time'

export default {
  components: {
    logo,
    sectionHeading
  },
  computed: {
    nextEvent() {
      var upcoming = this.$store.state.events.upcoming.filter(
        event => event.startTime > Date.now()
      )
      return upcoming[0]
    },
    groupForNextEvent() {
      return groupForEvent(this.nextEvent, this.$store.state.groups.all)
    }
  },
  methods: {
    formatReadableDateTime
  }
}
</script>

<style lang="scss">
.lc-background-image {
  @media (min-width: 576px) {
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 55),
        rgba(255, 255, 255, 0)
      ),
      url(../assets/images/capitol.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.lc-event-description {
  a {
    @apply .text-white .underline;
  }
}
</style>
