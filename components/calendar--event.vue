<template>
  <li
    v-popover="{
      name: firstEvent.id
    }"
    class="
      block list-none mx-1 py-2 border-t border-blue
      hover:bg-blue-lightest
    "
  >
    <a
      :href="firstEvent.url"
      class="w-full block no-underline text-blue-darker"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span v-if="eventGroup(firstEvent)">
        <logo
          v-if="eventGroup(firstEvent)"
          :icon-set="eventGroup(firstEvent).iconSet"
          :icon-name="eventGroup(firstEvent).iconName"
          :icon-text="eventGroup(firstEvent).iconText"
          class="inline-block"
        />
      </span>
      {{ formatTimeOfEvent(firstEvent) }}
      <div class="mt-1">{{ eventGroup(firstEvent).name }}</div>
      <div
        v-if="additionalEvents.length > 0"
        class="text-sm">
        <i>also:
          <span
            v-for="(event, index) in additionalEvents"
            :key="event.id">
            <span v-if="index == 0">
              {{ formatTimeOfEvent(event) }}
            </span>
            <span v-else>
              , {{ formatTimeOfEvent(event) }}
            </span>
          </span>
        </i>
      </div>
    </a>
    <transition
      enter-active-class="transition-opacity"
      enter-class="opacity-0"
      leave-active-class="transition-opacity"
      leave-to-class="opacity-0"
    >
      <popover
        :name="firstEvent.id"
        :width="225"
        event="hover"
        class="
          text-blue-darker border border-blue shadow-md -mt-2 hidden
        "
      >
        <ul class="m-0 p-0">
          <li
            v-for="detail in allEvents(firstEvent, additionalEvents)"
            :key="detail.id"
            class="
              block list-none mx-1 py-2 border-t border-blue
              hover:bg-blue-lightest
            "
          >
            <a
              :href="detail.url"
              class="w-full block no-underline text-blue-darker"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ formatTimeOfEvent(detail) }} {{ detail.name }}
            </a>
          </li>
        </ul>
      </popover>
    </transition>
  </li>
</template>

<script>
import { format as formatDate } from 'date-fns'
import groupForEvent from '~/utils/group-for-event'
import logo from '~/components/logo--extra-small'

export default {
  components: {
    logo
  },
  props: {
    firstEvent: {
      type: Object,
      required: true
    },
    additionalEvents: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    allEvents(firstEvent, additionalEvents) {
      var firstArray = [firstEvent]
      return firstArray.concat(additionalEvents)
    },
    eventGroup(event) {
      return groupForEvent(event, this.$store.state.groups.all)
    },
    formatTimeOfEvent(event) {
      const startMinutes = formatDate(event.startTime, 'm')
      return formatDate(
        event.startTime,
        startMinutes === '0' ? 'h a' : 'h:mm a'
      )
    },
    formatDate
  }
}
</script>
