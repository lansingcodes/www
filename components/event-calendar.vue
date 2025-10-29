<template>
  <div>
    <div class="flex">
      <div
        v-for="weekday in weekdayLabels"
        :key="weekday"
        class="w-1/7 text-center text-white font-semibold"
      >
        {{ weekday }}
      </div>
    </div>
    <div 
      v-for="(week, index) in calendar" 
      :key="index" 
      class="flex">
      <div
        v-for="day in week"
        :key="day.getTime()"
        :class="{
          'border-4': isToday(day),
          'bg-white': isWeekday(day) || isToday(day),
          'bg-blue-lighter': !isWeekday(day) && !isToday(day),
        }"
        class="w-1/7 min-h-16 m-1 p-1 rounded-sm border-attention shadow-md"
      >
        <div>
          <div class="text-grey-darkest text-center mb-2 font-medium">
            {{ formatDayOfMonth(day) }}
          </div>
          <ul 
            v-if="isDuringActivePeriod(day)" 
            class="m-0 p-0">
            <calendar-event
              v-for="(entry, index) in eventsOnDay(day)"
              :key="index"
              :type="entry.type"
              :events="entry.events"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  startOfWeek,
  endOfWeek,
  isBefore,
  isAfter,
  addDays,
  addWeeks,
  isSameDay,
  format as formatDate
} from 'date-fns'
import chunk from 'lodash/chunk'
import simplifiedName from '~/utils/simplified-name'
import calendarEvent from '~/components/calendar--event.vue'
import maxCalendarWeeks from '~/config/max-calendar-weeks'
import { useEvents } from '~/composables/useEvents'

const { upcoming } = useEvents()

const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const events = computed(() => upcoming.value || [])

const startDate = computed(() => startOfWeek(Date.now()))

const endDate = computed(() => {
  const lastEvent = events.value[events.value.length - 1]
  return endOfWeek(
    lastEvent
      ? lastEvent.startTime
      : endOfWeek(addWeeks(startDate.value, maxCalendarWeeks - 1))
  )
})

const calendar = computed(() => {
  const dates = []
  for (
    let days = 0, currentDate = startDate.value;
    isBefore(currentDate, endDate.value);
    days++, currentDate = addDays(startDate.value, days)
  ) {
    dates.push(currentDate)
  }
  return chunk(dates, 7)
})

const eventsOnDay = (day) => {
  // Get the events on this day, then reduce into stand-alone events,
  // community-wide events, and multiple group events on same day.
  // Each element in the resulting arry has this structure:
  //  {
  //    type: 'single' || 'community' || 'group',
  //    events: [...]
  //  }
  return events.value
    .filter(event => isSameDay(new Date(event.startTime), day))
    .reduce((events, event) => {
      // 1. Look for community event candidates
      //  - Must be stand-alone (single) event or already a community event
      //  - Start time must match
      //  - Simplified name must match
      const communityEvent = events.find(candidate => {
        const firstEvent = candidate.events[0]
        return (
          ['single', 'community'].includes(candidate.type) &&
          firstEvent.startTime === event.startTime &&
          simplifiedName(event.name) === simplifiedName(firstEvent.name)
        )
      })
      if (communityEvent) {
        communityEvent.type = 'community'
        communityEvent.events.push(event)
        return events
      }

      // 2. Look for group event candidates
      //  - Must be stand-alone (single) event or already a group event
      //  - Group must match
      const groupEvent = events.find(candidate => {
        return (
          ['single', 'group'].includes(candidate.type) &&
          candidate.events[0].group === event.group
        )
      })
      if (groupEvent) {
        groupEvent.type = 'group'
        groupEvent.events.push(event)
        return events
      }

      // 3. Add a stand-alone (single) event
      events.push({
        type: 'single',
        events: [event]
      })
      return events
    }, [])
}

const firstEvent = (groupEvents) => {
  return groupEvents[0]
}

const otherEvents = (groupEvents) => {
  return groupEvents.slice(1, groupEvents.length)
}

const formatDayOfMonth = (day) => {
  const dayOfMonth = formatDate(day, 'd')
  const isStartDate = isSameDay(day, startDate.value)
  return dayOfMonth === '1' || isStartDate
    ? formatDate(day, 'MMM d')
    : dayOfMonth
}

const isDuringActivePeriod = (day) => {
  const now = Date.now()
  return isAfter(day, now) || isSameDay(day, now)
}

const isToday = (day) => {
  return isSameDay(day, Date.now())
}

const isWeekday = (day) => {
  const dayOfWeek = formatDate(day, 'i')
  return dayOfWeek <= 5
}
</script>

<style scoped>
.pop-out-enter-active,
.pop-out-leave-active {
  transition: transform 1.5s, opacity 2s;
}
.pop-out-enter,
.pop-out-leave-to {
  opacity: 0;
  transform: rotate(720deg) translate(0, 120px);
}
</style>
