<template>
  <nav class="fixed top-0 left-0 right-0 z-50 shadow font-heading w-full">
    <div
      class="hidden lg:flex items-center justify-between flex-wrap bg-white p-4 border-b border-blue-light w-full"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center shrink-0 text-blue-dark no-underline hover:text-blue-dark"
      >
        <img
          class="h-12 mr-2"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
          width="48"
          height="48"
        >
        <span class="font-bold text-xl uppercase">Lansing Codes</span>
      </a>

      <!-- Desktop Links -->
      <div class="block text-base flex-grow text-right font-medium">
        <a
          v-for="(link, index) in topLinks"
          :key="link.name"
          :href="link.href"
          :class="{ 'ml-4': index }"
          class="inline-block text-blue-dark no-underline uppercase mt-0"
        >
          {{ link.name }}
        </a>
      </div>
    </div>

    <!-- Menu Toggle -->
    <div
      key="menu-button"
      class="static block lg:hidden fixed bottom-0 right-0 z-50 p-4"
    >
      <button
        :aria-label="open ? 'Close Menu' : 'Open Menu'"
        class="block p-4 rounded-full shadow-lg leading-normal bg-white text-blue border-blue border-2 font-medium hover:slide-up-px active:shadow-none active:slide-down-px focus:outline-none"
        type="button"
        aria-controls="navBarSupportedContentWrapper"
        @click="open = !open"
      >
        <font-awesome-icon
          :icon="['fas', open ? 'times' : 'th']"
          fixed-width
          class="text-xl text-blue align-middle"
        />
      </button>
    </div>

    <div id="navBarSupportedContentWrapper">
      <transition
        enter-active-class="transition-all"
        enter-class="slide-up-full"
        leave-active-class="transition-all"
        leave-to-class="slide-up-full"
      >
        <div
          v-if="open"
          id="navBarSupportedContent"
          key="menu"
          class="static block lg:hidden fixed bottom-0 left-0 right-0 z-30 p-4 pb-0 border-blue border-t-2 bg-white font-medium"
        >
          <div>
            <ul class="list-none mr-24 p-0">
              <li
                v-for="link in bottomLinks"
                :key="link.name"
                class="text-right"
              >
                <a
                  :href="link.href"
                  class="inline-block no-underline uppercase mb-4 leading-tight"
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
    </div>
  </nav>
</template>

<script>
import urls from '~/config/urls.json'

export default {
  data() {
    return {
      open: false,
      links: [
        {
          name: 'To Top',
          href: '#mainContent',
          iconSet: ['fas', 'arrow-up'],
          top: false,
          bottom: true
        },
        {
          name: 'Home',
          href: '/',
          iconSet: ['fas', 'home'],
          top: false,
          bottom: true
        },
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: ['fab', 'slack'],
          top: true,
          bottom: true
        },
        {
          name: 'Code of Conduct',
          href: '/code-of-conduct',
          iconSet: ['fas', 'shield-alt'],
          top: true,
          bottom: true
        },
        {
          name: 'Contact',
          href: '#contact',
          iconSet: ['far', 'thumbs-up'],
          top: true,
          bottom: true
        }
      ]
    }
  },
  computed: {
    topLinks() {
      return this.links.filter(link => link.top)
    },
    bottomLinks() {
      return this.links.filter(link => link.bottom)
    }
  }
}
</script>
