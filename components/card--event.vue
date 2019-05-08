<template>
  <article
    class="
      w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 md:mx-4
      h-full max-w-xs bg-white shadow-md font-sans-serif
    "
  >
    <!-- Header (always visible) -->
    <header
      class="
        overflow-hidden relative bg-blue-darker text-white p-4 shadow
      "
    >
      <h3
        class="
          flex flex-no-wrap items-center font-normal mb-2 min-h-12
        "
      >
        <figure :title="group.attributes.name">
          <logo
            v-if="icon"
            :icon-set="icon.iconSet"
            :icon-name="icon.iconName"
            :icon-text="icon.iconText"
          />
        </figure>
        <a
          :href="eventLink"
          target="_blank"
          class="
            text-white m-0 ml-3 no-underline
            hover:text-white hover:underline
            focus:text-white focus:underline focus:bg-transparent
          "
        >
          {{ eventName }}
        </a>
      </h3>
      <section
        :title="group.attributes.name"
        class="text-sm mb-1 truncate"
      >{{ group.attributes.name }}</section>
      <section class="text-sm">{{ formatTime(eventTime) }}</section>
      <div
        class="triangle bg-white absolute cursor-pointer"
        @click="open = !open"
      >
        <button
          :aria-label="open ? 'Hide details' : 'Show details'"
          class="
            in-triangle text-blue font-bold
            hover:text-blue-darkest focus:text-blue-darkest focus:outline-none
          "
          type="button"
        >
          <font-awesome-icon :icon="open ? 'minus' : 'plus'"/>
        </button>
      </div>
    </header>

    <!-- Additional details -->
    <transition
      enter-active-class="transition-all"
      enter-class="max-h-0"
      leave-active-class="transition-all"
      leave-to-class="max-h-0"
    >
      <div
        v-if="open"
        class="
          max-h-50 overflow-y-scroll overflow-x-hidden bg-white shadow
        "
      >
        <div class="m-4 overflow-x-hidden">
          <div
            v-if="venue && venue.name"
            class="mb-2 overflow-x-hidden"
          >
            <p class="font-bold mb-1">{{ venue.name }}</p>
            <address
              v-if="venue.address"
              class="text-grey-darker roman"
            >{{ venue.address }}</address>
          </div>
          <div
            class="bg-transparent overflow-x-hidden"
            v-html="eventDescription"
          />
        </div>
      </div>
    </transition>
  </article>
</template>

<script>
import { format } from 'date-fns'
import logo from '~/components/logo--small'

export default {
  components: {
    logo
  },
  props: {
    icon: {
      type: Object,
      default: () => ({
        iconSet: null,
        iconName: null,
        iconText: null
      })
    },
    eventName: {
      type: String,
      required: true
    },
    eventLink: {
      type: String,
      required: true
    },
    eventTime: {
      type: Number,
      required: true
    },
    eventDescription: {
      type: String,
      required: true
    },
    group: {
      // e.g. {
      //   name: 'Lansing Tech Demo Night'
      // }
      type: Object,
      required: true
    },
    venue: {
      type: Object,
      default: () => ({
        name: null,
        address: null
      })
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    formatTime(time) {
      return format(time, 'dddd, MMMM D [at] h:mm aa')
    }
  }
}
</script>

<style lang="scss" scoped>
.triangle {
  width: 5rem;
  height: 5rem;
  transform: rotate(-45deg);
  right: -2.5rem;
  bottom: -2.5rem;
}

.in-triangle {
  position: absolute;
  bottom: 3.3rem;
  left: 2rem;
  transform: rotate(45deg);
}
</style>
