<template>
  <article
    class="
      w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 mx-auto
      max-w-xs bg-white shadow-md font-sans-serif
    "
  >
    <!-- Header (always visible) -->
    <header
      class="
        overflow-hidden relative bg-blue-darker text-white p-4 shadow
      "
    >
      <font-awesome-icon
        v-if="icon"
        :icon="['fas', 'code']"
        :title="eventName"
        :aria-label="eventName"
        class="text-lg self-center mr-4"
      />
      <h3 class="font-normal mb-2">
        <a
          :href="eventLink"
          class="
            block text-white no-underline mb-2
            hover:text-blue-lighter focus:text-blue-lighter
          "
        >
          {{ eventName }}
        </a>
        <span class="text-sm block">{{ formatTime(eventTime) }}</span>
      </h3>
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
          max-h-50 overflow-y-scroll overflow-x-hidden bg-white shadow w-full
        "
      >
        <div class="m-4">
          <div
            v-if="venue"
            class="mb-2"
          >
            <p class="font-bold mb-1">{{ venue.name }}</p>
            <address class="text-grey-dark roman">{{ venue.address }}</address>
          </div>
          <div
            class="bg-transparent"
            v-html="eventDescription"
          />
        </div>
      </div>
    </transition>
  </article>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    icon: {
      type: Boolean,
      default: false
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
    venue: {
      // e.g. {
      //   name: 'Venue Name',
      //   address: 'Venue address'
      // }
      type: Object,
      required: true
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

<style scoped>
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
