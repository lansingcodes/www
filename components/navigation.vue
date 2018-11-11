<template>
  <nav class="flex items-center justify-between flex-wrap bg-white p-6">

    <!-- Logo -->
    <div class="flex items-center flex-no-shrink text-blue-dark mr-6">
      <img
        class="h-8 w-8 mr-2"
        src="../assets/images/icon-tall-square-fixed-300-transparent.png"
        alt="Lansing Codes Logo"
      >
      <span class="font-semibold text-xl tracking-tight">Lansing.Codes</span>
    </div>

    <!-- Menu Toggle -->
    <div class="block lg:hidden">
      <button
        class="
          flex items-center px-3 py-2 border-2 rounded
          text-blue-darker border-blue-darker
          hover:text-blue-darkest hover:border-blue-darkest
          focus:text-blue-darkest focus:border-blue-darkest
          focus:outline-none focus:bg-blue-lighter
        "
        type="button"
        aria-controls="navbarSupportedContent"
        aria-label="Menu"
        @click="toggle"
      >
        <span class="uppercase pr-3">Menu</span>
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
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
