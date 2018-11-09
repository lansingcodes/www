<template>
  <article
    :class="open ? 'relative' : ''"
    class="max-w-xs bg-white shadow font-sans-serif"
  >
    <!-- Header (always visible) -->
    <header class="overflow-hidden h-full flex relative bg-blue-darker text-white p-4">
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
          class="block text-white no-underline
            hover:text-blue-lighter focus:text-blue-lighter
            mb-2"
        >
          {{ eventName }}
          <!-- <sup><font-awesome-icon
            icon="external-link-alt"
            class="text-xs ml-1"
          /></sup> -->
        </a>
        <span class="text-sm block">
          {{ eventDate }}
        </span>
      </h3>
      <div class="triangle bg-white absolute">
        <button
          class="katie-button text-blue font-bold hover:text-blue-darker focus:text-blue-darker"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          @click="toggle"
        >
          <font-awesome-icon
            :icon="open ? 'minus' : 'plus'"
          />
        </button>
      </div>
    </header>

    <!-- Additional details -->
    <div
      :class="open ? 'absolute p-4 block z-50': 'hidden'"
      :tabindex="open ? '0' : ''"
      class="max-h-50 overflow-y-scroll overflow-x-hidden bg-white shadow w-full"
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
export default {
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    eventName: {
      type: String,
      default: 'Event Name'
    },
    eventLink: {
      type: String,
      default: '#'
    },
    eventDate: {
      type: String,
      default: 'Date'
    },
    eventDescription: {
      type: String,
      default: 'Description'
    },
    venue: {
      type: Object,
      default: function() {
        return {
          name: 'Venue Name',
          address: 'Venue address'
        }
      }
    },
    expandedEventName: {
      type: String,
      default: null
    }
  },
  computed: {
    open() {
      return this.eventName === this.expandedEventName
    }
  },
  methods: {
    toggle() {
      if (this.open) {
        this.$emit('card-event-collapse', this.eventName)
      } else {
        this.$emit('card-event-expand', this.eventName)
      }
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
  -webkit-transform: rotate(-45deg);
  right: -75px;
  bottom: -25px;
}
.katie-button {
  position: absolute;
  bottom: 40px;
  right: 80px;
  transform: rotate(45deg);
}
</style>
