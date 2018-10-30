<template>
  <article class="overflow-hidden bg-white shadow font-sans-serif">
    <header class="flex bg-blue-darker text-white p-4">
      <font-awesome-icon
        v-if="icon"
        :icon="['fas', 'code']"
        class="text-lg self-center mr-4"
        title="meetup name"
        aria-label="meetup name"
      />
      <h3 class="font-normal mb-2">
        <a
          :href="eventLink"
          class="block text-white no-underline hover:text-blue-lighter mb-2"
        >
          {{ eventName }}
        </a>
        <span class="text-sm block">
          {{ eventDate }}
        </span>
      </h3>

    </header>

    <div
      :class="open ? 'block p-4': 'hidden'"
      class="max-h-screen overflow-y-scroll"
    >
      <div
        v-if="venue"
        class="mb-2"
      >
        <p class="font-bold mb-1">{{ venue.name }}</p>
        <address class="text-grey-dark roman">{{ venue.address }}</address>
      </div>
      <div v-html="eventDescription"/>
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
          xmlns="http://www.w3.org/2000/svg"><title>Show/Hide</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    eventName: {
      type: String,
      default: 'Event Name'
    },
    eventLink: {
      type: String,
      default: '#'
    },
    eventDate: {
      type: String,
      default: 'Date'
    },
    eventDescription: {
      type: String,
      default: 'Description'
    },
    venue: {
      type: Object,
      default: function() {
        return {
          name: 'Venue Name',
          address: 'Venue address'
        }
      }
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
