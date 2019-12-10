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
      <span v-if="type === 'community'">
        <logo
          icon-set="lansing-codes"
          icon-name="icon-lansing-codes-logo"
          class="inline-block"
        />
      </span>
      <span v-else-if="eventGroup(firstEvent)">
        <logo
          :icon-set="eventGroup(firstEvent).iconSet"
          :icon-name="eventGroup(firstEvent).iconName"
          :icon-text="eventGroup(firstEvent).iconText"
          class="inline-block"
        />
      </span>
      {{ formatTimeOfEvent(firstEvent) }}
      <div
        v-if="type === 'community'"
        class="mt-1"
      >{{ firstEvent.name }}</div>
      <div
        v-else
        class="mt-1"
      >{{ eventGroup(firstEvent).name }}</div>
      <div
        v-if="type === 'group'"
        class="text-sm">
        <aside class="italic">
          also: {{ formatTimesOfAdditionalEvents() }}
        </aside>
      </div>
      <div
        v-else-if="type === 'community'"
        class="text-sm">
        <aside class="italic">
          {{ events.length }} ways to join
        </aside>
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
            v-for="(event, index) in sortedEvents"
            :key="event.id"
            :class="{
              'border-t': index > 0
            }"
            class="
              block list-none mx-1 py-2 border-blue hover:bg-blue-lightest
            "
          >
            <a
              :href="event.url"
              class="w-full block no-underline text-blue-darker"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span v-if="type === 'community'">
                <logo
                  :icon-set="eventGroup(event).iconSet"
                  :icon-name="eventGroup(event).iconName"
                  :icon-text="eventGroup(event).iconText"
                  class="inline-block"
                />
                {{ eventGroup(event).name }}
              </span>
              <span v-else-if="type === 'group'">
                {{ formatTimeOfEvent(event) }} {{ event.name }}
              </span>
              <span v-else>
                {{ event.name }}
              </span>
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
import orderBy from 'lodash/orderBy'

export default {
  components: {
    logo
  },
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['single', 'community', 'group'].includes(value)
      }
    },
    events: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    firstEvent() {
      return this.events[0]
    },
    additionalEvents() {
      return this.events.slice(1)
    },
    sortedEvents() {
      if (this.type === 'community') {
        return orderBy(this.events, [
          event =>
            this.eventGroup(event)
              .name.toLowerCase()
              .replace(/[^a-z]/g, '')
        ])
      }
      return this.events
    }
  },
  methods: {
    formatDate,
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
    formatTimesOfAdditionalEvents() {
      return this.additionalEvents
        .map(event => this.formatTimeOfEvent(event))
        .join(',')
    }
  }
}
</script>
