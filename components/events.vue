<template>
  <section
    id="events"
    class="flex flex-wrap justify-start px-4 md:px-12"
  >
    <section-heading
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
      class="w-full"
    />

    <article
      v-for="event in events"
      :key="event.attributes.name"
      class="overflow-hidden bg-white shadow font-sans-serif w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2 md:mb-4"
    >
      <header class="flex bg-blue-darker text-white p-4">
        <font-awesome-icon
          :icon="['fas', 'code']"
          class="text-lg self-center mr-4"
          title="meetup name"
          aria-label="meetup name"
        />
        <h3 class="font-normal mb-2">
          <a
            :href="event.links.self"
            class="block text-white no-underline hover:text-blue-lighter mb-2"
          >
            {{ event.attributes.name }}
          </a>
          <span class="text-small block">
            {{ formatReadableDate(event.attributes.time.absolute) }}
          </span>
        </h3>

      </header>
      <div
        :class="open ? 'block p-4': 'hidden'"
        class="max-h-screen overflow-y-scroll"
      >
        <div v-if="event.relationships.venue">
          <p class="font-bold mb-1">{{ event.relationships.venue.attributes.name }}</p>
          <address class="text-grey-dark roman">{{ event.relationships.venue.attributes.address }}</address>
        </div>
        <div v-html="event.attributes.description"/>
      </div>
      <footer>
        <button
          class="w-full text-blue-darker border-blue-darker hover:text-blue-darkest hover:bg-blue-lightest py-2"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          @click="toggle"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </footer>
    </article>

  </section>
</template>

<script>
import { format } from 'date-fns'
import sectionHeading from '~/components/section-heading'
import truncate from '~/utils/truncate'

export default {
  components: {
    sectionHeading
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    events() {
      return this.$store.state.events.upcoming
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    formatReadableDate(date) {
      return format(date, 'dddd, MMMM D [at] h:mm a')
    }
  }
}
</script>
