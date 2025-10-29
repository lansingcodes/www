<template>
  <li
    class="block list-none mx-1 py-2 border-t border-blue hover:bg-blue-lightest"
  >
    <Popper hover :content="''">
      <div class="cursor-pointer">
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
          class="mt-1">{{ firstEvent.name }}</div>
        <div
          v-else-if="eventGroup(firstEvent)"
          class="mt-1">{{ eventGroup(firstEvent).name }}</div>
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
          <aside class="italic">{{ events.length }} ways to join</aside>
        </div>
      </div>
      <template #content>
        <div class="text-blue-darker border border-blue shadow-md bg-white p-2" style="width: 225px;">
          <ul class="m-0 p-0">
            <li
              v-for="(event, index) in sortedEvents"
              :key="event.id"
              :class="{
                'border-t': index > 0,
              }"
              class="block list-none mx-1 py-2 border-blue hover:bg-blue-lightest"
            >
              <a
                :href="event.url"
                class="w-full block no-underline text-blue-darker"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span v-if="type === 'community' && eventGroup(event)">
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
        </div>
      </template>
    </Popper>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { format as formatDate } from 'date-fns'
import Popper from 'vue3-popper'
import groupForEvent from '~/utils/group-for-event'
import logo from '~/components/logo--extra-small.vue'
import orderBy from 'lodash/orderBy'
import { useGroups } from '~/composables/useGroups'

const props = defineProps({
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
})

const { all: groups } = useGroups()

const firstEvent = computed(() => props.events[0])

const additionalEvents = computed(() => props.events.slice(1))

const sortedEvents = computed(() => {
  if (props.type === 'community') {
    return orderBy(props.events, [
      event =>
        eventGroup(event)
          ?.name.toLowerCase()
          .replace(/[^a-z]/g, '') || ''
    ])
  }
  return props.events
})

const eventGroup = (event) => {
  return groupForEvent(event, groups.value || [])
}

const formatTimeOfEvent = (event) => {
  const startMinutes = formatDate(event.startTime, 'm')
  return formatDate(
    event.startTime,
    startMinutes === '0' ? 'h a' : 'h:mm a'
  )
}

const formatTimesOfAdditionalEvents = () => {
  return additionalEvents.value
    .map(event => formatTimeOfEvent(event))
    .join(',')
}
</script>
