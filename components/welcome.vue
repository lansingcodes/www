<template>
  <div
    id="welcome"
    class="lc-background-image py-16 lg:py-0"
  >
    <div class="flex flex-wrap justify-center lg:pt-8">
      <section
        class="
          flex-none w-full sm:w-1/2 max-w-sm overflow-hidden sm:shadow-lg
          bg-white text-center sm:p-8 sm:mb-24
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
          <h3 class="font-normal mb-2">{{ nextEvent.attributes.name }}</h3>
          <p class="flex flex-wrap justify-between text-xs mb-2 mt-0">
            <span class="mb-2 mr-2">
              {{ formatReadableDate(nextEvent.attributes.time.absolute) }}
            </span>
            <span
              v-if="
                nextEvent.relationships.venue &&
                  nextEvent.relationships.venue.attributes.name
              "
              class="mb-2"
            >
              {{ nextEvent.relationships.venue.attributes.name }}
            </span>
          </p>
          <div
            class="mb-6"
            v-html="nextEventDescription"
          />
        </div>
        <div class="text-center">
          <a
            :href="nextEvent.links.self"
            class="
              inline-block bg-white no-underline hover:bg-grey-lightest
              text-blue font-bold uppercase text-center py-4 mt-2 px-8
              min-w-24 rounded-full
            "
            target="_blank"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import sectionHeading from '~/components/section-heading'
import truncate from '~/utils/truncate'

export default {
  components: {
    sectionHeading
  },
  computed: {
    nextEvent() {
      return this.$store.state.events.upcoming.reduce((previous, current) => {
        const previousTime = previous.attributes.time.absolute
        const currentTime = current.attributes.time.absolute
        return previousTime < currentTime ? previous : current
      })
    },
    nextEventDescription() {
      return truncate(this.nextEvent.attributes.description, 200)
    }
  },
  methods: {
    formatReadableDate(date) {
      return format(date, 'dddd, MMMM D [at] h:mm a')
    }
  }
}
</script>

<style scoped>
@media (min-width: 576px) {
  .lc-background-image {
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('../assets/images/capitol.jpg');
  }
}
</style>
