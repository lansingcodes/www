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
      <div
        class="
          flex flex-no-wrap items-center font-normal mb-2 min-h-12
        "
      >
        <logo
          :icon-set="group.iconSet"
          :icon-name="group.iconName"
          :icon-text="group.iconText"
        />
        <h3 class="text-white m-0 ml-3">
          <a
            :href="event.url"
            rel="noreferrer noopener"
            target="_blank"
            class="
              text-white no-underline
              hover:text-white hover:underline
              focus:text-white focus:underline focus:bg-transparent
            "
          >
            {{ event.name }}
          </a>
        </h3>
      </div>
      <section
        class="text-sm mb-1 truncate"
      >{{ group.name }}</section>
      <section class="text-sm">{{ formatReadableDateTime(event.startTime) }}</section>
    </header>

    <!-- Additional details -->
    <div
      class="
        max-h-50 overflow-y-hidden overflow-x-hidden bg-white shadow
      "
    >
      <div class="m-4 overflow-x-hidden overflow-y-hidden">
        <div
          v-if="venue"
          class="mb-2 overflow-x-hidden"
        >
          <p class="font-bold mb-1">{{ venue }}</p>
          <address
            v-if="address"
            class="text-grey-darker roman"
          >{{ address }}</address>
        </div>
        <div
          class="bg-transparent overflow-x-hidden overflow-y-hidden"
          v-html="cleanEventDescription(event.description)"
        />
      </div>
    </div>
  </article>
</template>

<script>
import logo from '~/components/logo--small'
import formatReadableDateTime from '~/utils/format-readable-date-time'
import cleanEventDescription from '~/utils/clean-event-description'

export default {
  components: {
    logo
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    group: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatReadableDateTime,
    cleanEventDescription
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
