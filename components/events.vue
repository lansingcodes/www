<template>
  <section id="events">
    <section-heading
      heading="Upcoming Events"
      subheading="Events and resources for Lansing coders"
    />
    <article class="overflow-hidden bg-white shadow font-sans-serif">
      <p class="font-bold mb-2 hidden md:block">29th</p>
      <header class="bg-blue-darker text-white p-4">
        <h3 class="flex font-normal mb-2">
          <font-awesome-icon
            :icon="['fas', 'code']"
            class="text-lg self-center mr-4"
            title="meetup name"
            aria-label="meetup name"
          />
          Name of the event, which might be pretty long
        </h3>
        <p class="text-small w-full">October 29 - 7:00pm</p>
      </header>
      <div :class="open ? 'block p-4': 'hidden'">
        <p class="font-bold mb-1">TechSmith Corporation</p>
        <address class="text-grey-dark roman">2405 Woodlake Drive, Okemos, MI</address>

        <p>Sponsor: Recruitment Management Consultants, LLC</p>
        <p>This presentation will include a deep dive into advanced techniques that can be applied...</p>
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
import sectionHeading from '~/components/section-heading'
export default {
  components: {
    sectionHeading
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
