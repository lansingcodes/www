<template>
  <div>
    <div class="flex">
      <div
        v-for="weekday in weekdayLabels"
        :key="weekday"
        class="w-1/7 text-center text-white font-semibold"
      >{{ weekday }}</div>
    </div>
    <div
      v-for="(week, index) in calendar"
      :key="index"
      class="flex"
    >
      <div
        v-for="day in week"
        :key="day.getTime()"
        :class="{
          'border-4': isToday(day),
          'bg-white': isWeekday(day) || isToday(day),
          'bg-blue-lighter': !isWeekday(day) && !isToday(day)
        }"
        class="w-1/7 min-h-16 m-1 p-1 rounded-sm border-attention shadow-md"
      >
        <div>
          <div class="text-grey-darkest text-center mb-2 font-medium">
            {{ formatDayOfMonth(day) }}
          </div>
          <ul
            v-if="isDuringActivePeriod(day)"
            class="m-0 p-0"
          >
            <calendar-event
              v-for="groupEvents in eventsOnDay(day)"
              :key="groupEvents.id"
              :first-event="firstEvent(groupEvents)"
              :additional-events="otherEvents(groupEvents)"
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
  isSameDay,
  format as formatDate
} from 'date-fns'
import chunk from 'lodash/chunk'
import formatReadableDateTime from '~/utils/format-readable-date-time'
import groupForEvent from '~/utils/group-for-event'
import calendarEvent from '~/components/calendar--event'

export default {
  components: {
    calendarEvent
  },
  data() {
    return {
      weekdayLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
      return endOfWeek(lastEvent.startTime)
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
    }
  },
  methods: {
    eventsOnDay(day) {
      // get the events on this day
      const events = this.events.filter(event =>
        isSameDay(new Date(event.startTime), day)
      )

      const results = events.reduce(function(acc, obj) {
        const key = obj['group']

        if (!acc[key]) {
          acc[key] = []
        }

        acc[key].push(obj)
        return acc
      }, {})

      return results
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
    formatDate
  }
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
