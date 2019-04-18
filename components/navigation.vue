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
            inline-block text-blue-dark no-underline uppercase mt-0 mr-4
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
          block p-4 rounded-full shadow-lg leading-normal
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
          border-blue border-t-2 bg-white
        "
      >
        <div>
          <ul class="bullet-none mr-24 p-0">
            <li class="text-right">
              <a
                href="/#welcome"
                class="
                  inline-block no-underline uppercase mb-4 leading-tight
                "
                @click="open = false"
              >
                Back to Top
                <font-awesome-icon
                  :icon="['fas', 'arrow-up']"
                  fixed-width
                  class="leading-tight"
                />
              </a>
            </li>
            <li
              v-for="link in links"
              :key="link.name"
              class="text-right"
            >
              <a
                :href="link.href"
                class="
                  inline-block no-underline uppercase mb-4 leading-tight
                "
                @click="open = false"
              >
                {{ link.name }}
                <font-awesome-icon
                  :icon="link.iconSet"
                  fixed-width
                  class="leading-tight"
                />
              </a>
            </li>
          </ul>
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
          href: 'https://slack.lansing.codes/',
          iconSet: ['fab', 'slack']
        },
        {
          name: 'Calendar',
          href: '/#events',
          iconSet: ['far', 'calendar-alt']
        },
        {
          name: 'Meetups',
          href: '/#meetups',
          iconSet: ['far', 'handshake']
        },
        {
          name: 'Beginners',
          href: '/#resources',
          iconSet: ['fas', 'school']
        },
        {
          name: 'Sponsors',
          href: '/#sponsors',
          iconSet: ['fas', 'hand-holding-heart']
        },
        {
          name: 'Newsletter',
          href: '/#newsletter',
          iconSet: ['fas', 'envelope']
        },
        {
          name: 'Contact',
          href: '/#contact',
          iconSet: ['far', 'thumbs-up']
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
