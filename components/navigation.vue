<template>
  <nav>
    <div
      class="
        hidden lg:flex items-center justify-between flex-wrap
        bg-white p-4 border-b border-blue-light
      "
    >
      <!-- Logo -->
      <div class="flex items-center flex-no-shrink text-blue-dark mr-6">
        <img
          class="h-12 mr-2"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
        >
        <span class="font-semibold text-xl uppercase">Lansing Codes</span>
      </div>

      <!-- Desktop Links -->
      <div class="block text-base flex-grow text-right">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          class="
            inline-block
            text-blue-dark no-underline uppercase
            hover:text-blue-darker
            focus:text-blue-darker focus:bg-blue-lighter focus:outline-none
            mt-0 mr-4
          "
        >
          {{ link.name }}
        </a>
      </div>
    </div>

    <!-- Menu Toggle -->
    <div
      key="menu-button"
      class="
        static block lg:hidden fixed pin-b pin-r z-50 p-4
      "
    >
      <button
        class="
          block p-4 rounded-full shadow-lg leading-tight
          bg-white text-blue border-blue border-2 font-medium
          hover:up active:shadow-none active:down focus:outline-none
        "
        type="button"
        aria-controls="navbarSupportedContent"
        aria-label="Open Menu"
        @click="open = !open"
      >
        <font-awesome-icon
          :icon="['fas', open ? 'times' : 'th']"
          fixed-width
          class="text-xl text-blue align-middle"
        />
      </button>
    </div>

    <transition name="slide">
      <div
        v-if="open"
        id="navBarSupportedContent"
        key="menu"
        class="
          static block lg:hidden fixed pin-b pin-x z-30 p-4 pb-0
          border-blue border-t-2 bg-white text-blue text-center
        "
      >
        <div class="text-base">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.href"
            class="
              block text-blue-dark no-underline uppercase mb-4
              hover:text-blue-darker
              focus:text-blue-darker focus:bg-blue-lighter focus:outline-none
            "
            @click="open = false"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
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
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100vh);
}
</style>
