<template>
  <article
    :class="open ? 'relative' : ''"
    class="
      w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 mx-auto
      max-w-xs bg-white shadow font-sans-serif
    "
  >
    <!-- Header (always visible) -->
    <header
      class="
        overflow-hidden h-full flex relative bg-blue-darker text-white p-4
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
            block text-white no-underline
            hover:text-blue-lighter focus:text-blue-lighter mb-2
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
    <div
      :class="open ? 'absolute p-4 block z-10': 'hidden'"
      class="
        max-h-50 overflow-y-scroll overflow-x-hidden bg-white shadow w-full
      "
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
.max-h-50 {
  max-height: 50vh;
}
.triangle {
  width: 160px;
  height: 80px;
  transform: rotate(-45deg);
  right: -75px;
  bottom: -25px;
}
.in-triangle {
  position: absolute;
  bottom: 40px;
  right: 80px;
  transform: rotate(45deg);
}
</style>
