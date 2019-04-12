<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-4">

    <!-- Logo -->
    <div class="flex items-center flex-no-shrink text-blue-dark mr-6">
      <img
        class="h-12 mr-2"
        src="../assets/images/icon-tall-square-fixed-300-transparent.png"
        alt="Lansing Codes Logo"
      >
      <span class="font-semibold text-xl uppercase">Lansing Codes</span>
    </div>

    <!-- Menu Toggle -->
    <div class="block lg:hidden">
      <button
        class="
          inline-block px-3 py-2 rounded-full shadow
          bg-white text-blue border border-blue font-medium
          hover:up active:shadow-none active:down focus:outline-none
        "
        type="button"
        aria-controls="navbarSupportedContent"
        aria-label="Menu"
        @click="toggle"
      >
        <span class="hidden uppercase text-sm sm:inline">Menu</span>
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-sm text-blue"
        />
      </button>
    </div>

    <!-- Menu Items -->
    <div
      id="navBarSupportedContent"
      :class="open ? 'block': 'hidden'"
      class="block flex-grow lg:flex lg:items-center lg:justify-end w-full lg:w-auto"
    >
      <div class="text-base lg:flex-grow text-right">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          class="
            block lg:inline-block
            text-blue-dark no-underline uppercase
            hover:text-blue-darker
            focus:text-blue-darker focus:bg-blue-lighter focus:outline-none
            mt-4 lg:mt-0 lg:mr-4
          "
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  data() {
    return {
      open: false,
      links: [
        {
          name: 'Slack',
          href: 'https://slack.lansing.codes/'
        },
        {
          name: 'Calendar',
          href: '/#events'
        },
        {
          name: 'Meetups',
          href: '/#meetups'
        },
        {
          name: 'Beginners',
          href: '/#resources'
        },
        {
          name: 'Sponsors',
          href: '/#sponsors'
        },
        {
          name: 'Newsletter',
          href: '/#newsletter'
        },
        {
          name: 'Contact',
          href: '/#contact'
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
