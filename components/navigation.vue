<template>
  <nav class="fixed pin-t pin-x z-50 shadow font-heading">
    <div
      class="
        hidden lg:flex items-center justify-between flex-wrap
        bg-white p-4 border-b border-blue-light
      "
    >
      <!-- Logo -->
      <div class="flex items-center flex-no-shrink text-blue-dark">
        <img
          class="h-12 mr-2"
          src="../assets/images/icon-tall-square-fixed-300-transparent.png"
          alt="Lansing Codes Logo"
        >
        <span class="font-bold text-xl uppercase">Lansing Codes</span>
      </div>

      <!-- Desktop Links -->
      <div class="block text-base flex-grow text-right font-medium">
        <a
          v-for="(link, index) in links"
          :key="link.name"
          :href="link.href"
          :class="{ 'ml-4': index }"
          class="
            inline-block text-blue-dark no-underline uppercase mt-0
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
        :aria-label="open ? 'Close Menu' : 'Open Menu'"
        class="
          block p-4 rounded-full shadow-lg leading-normal
          bg-white text-blue border-blue border-2 font-medium
          hover:slide-up-px active:shadow-none active:slide-down-px
          focus:outline-none
        "
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

    <div
      id="navBarSupportedContentWrapper"
    >
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
          class="
            static block lg:hidden fixed pin-b pin-x z-30 p-4 pb-0
            border-blue border-t-2 bg-white font-medium
          "
        >
          <div>
            <ul class="bullet-none mr-24 p-0">
              <li class="text-right">
                <a
                  href="#mainContent"
                  class="
                    inline-block no-underline uppercase mb-4 leading-tight
                  "
                  @click="open = false"
                >
                  To Top
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
          name: 'Home',
          href: '/',
          iconSet: ['fas', 'home']
        },
        {
          name: 'Slack',
          href: urls.slack,
          iconSet: ['fab', 'slack']
        },
        {
          name: 'Contact',
          href: '#contact',
          iconSet: ['far', 'thumbs-up']
        },
        {
          name: 'Code of Conduct',
          href: '/code-of-conduct',
          iconSet: ['fas', 'shield-alt']
        }
      ]
    }
  }
}
</script>
