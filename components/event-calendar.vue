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
    <div v-for="(week, index) in calendar" :key="index" class="flex">
      <div
        v-for="day in week"
        :key="day.getTime()"
        :class="{
          'border-4': isToday(day),
          'bg-white': isWeekday(day) || isToday(day),
          'bg-grey-light': !isWeekday(day) && !isToday(day),
        }"
        class="w-1/7 min-h-16 m-1 p-1 rounded-sm border-attention shadow-md"
      >
        <div>
          <div class="text-grey-darkest text-center mb-2 font-medium">
            {{ formatDayOfMonth(day) }}
          </div>
          <ul v-if="isDuringActivePeriod(day)" class="m-0 p-0">
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

<script>
import {
  startOfWeek,
  endOfWeek,
  isBefore,
  isAfter,
  addDays,
  addWeeks,
  isSameDay,
  format as formatDate,
} from 'date-fns'
import chunk from 'lodash/chunk'
import simplifiedName from '~/utils/simplified-name'
import calendarEvent from '~/components/calendar--event'
import maxCalendarWeeks from '~/config/max-calendar-weeks'

export default {
  components: {
    calendarEvent,
  },
  data() {
    return {
      weekdayLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  computed: {
    events() {
      return this.$store.state.events.upcoming
    },
    startDate() {
      return startOfWeek(Date.now())
    },
    endDate() {
      const lastEvent = this.events[this.events.length - 1]
      return endOfWeek(
        lastEvent
          ? lastEvent.startTime
          : endOfWeek(addWeeks(this.startDate, maxCalendarWeeks - 1))
      )
    },
    calendar() {
      const dates = []
      for (
        let days = 0, currentDate = this.startDate;
        isBefore(currentDate, this.endDate);
        days++, currentDate = addDays(this.startDate, days)
      ) {
        dates.push(currentDate)
      }
      return chunk(dates, 7)
    },
  },
  methods: {
    formatDate,
    eventsOnDay(day) {
      // Get the events on this day, then reduce into stand-alone events,
      // community-wide events, and multiple group events on same day.
      // Each element in the resulting arry has this structure:
      //  {
      //    type: 'single' || 'community' || 'group',
      //    events: [...]
      //  }
      return this.events
        .filter((event) => isSameDay(new Date(event.startTime), day))
        .reduce((events, event) => {
          // 1. Look for community event candidates
          //  - Must be stand-alone (single) event or already a community event
          //  - Start time must match
          //  - Simplified name must match
          const communityEvent = events.find((candidate) => {
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
          const groupEvent = events.find((candidate) => {
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
            events: [event],
          })
          return events
        }, [])
    },
    firstEvent(groupEvents) {
      return groupEvents[0]
    },
    otherEvents(groupEvents) {
      return groupEvents.slice(1, groupEvents.length)
    },
    formatDayOfMonth(day) {
      const dayOfMonth = formatDate(day, 'D')
      const isStartDate = isSameDay(day, this.startDate)
      return dayOfMonth === '1' || isStartDate
        ? formatDate(day, 'MMM D')
        : dayOfMonth
    },
    isDuringActivePeriod(day) {
      const now = Date.now()
      return isAfter(day, now) || isSameDay(day, now)
    },
    isToday(day) {
      return isSameDay(day, Date.now())
    },
    isWeekday(day) {
      const dayOfWeek = formatDate(day, 'E')
      return dayOfWeek <= 5
    },
  },
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
