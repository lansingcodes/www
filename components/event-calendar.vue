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
            <li
              v-popover="{
                name: event.id
              }"
              v-for="event in eventsOnDay(day)"
              :key="event.id"
              class="
                block list-none mx-1 py-2 border-t border-blue
                hover:bg-blue-lightest
              "
            >
              <a
                :href="event.url"
                class="w-full block no-underline text-blue-darker"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span v-if="eventGroup(event)">
                  <logo
                    v-if="eventGroup(event)"
                    :icon-set="eventGroup(event).iconSet"
                    :icon-name="eventGroup(event).iconName"
                    :icon-text="eventGroup(event).iconText"
                    class="inline-block"
                  />
                </span>
                {{ formatTimeOfEvent(event) }}
                <div class="mt-1">{{ eventGroup(event).name }}</div>
              </a>
              <transition
                enter-active-class="transition-opacity"
                enter-class="opacity-0"
                leave-active-class="transition-opacity"
                leave-to-class="opacity-0"
              >
                <popover
                  :name="event.id"
                  :width="225"
                  event="hover"
                  class="
                    text-blue-darker border border-blue shadow-md -mt-2 hidden
                  "
                >
                  <div>{{ event.name }}</div>
                </popover>
              </transition>
            </li>
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
import logo from '~/components/logo--extra-small'
import formatReadableDateTime from '~/utils/format-readable-date-time'
import groupForEvent from '~/utils/group-for-event'

export default {
  components: {
    logo
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
    eventGroup(event) {
      return groupForEvent(event, this.$store.state.groups.all)
    },
    eventsOnDay(day) {
      return this.events.filter(event =>
        isSameDay(new Date(event.startTime), day)
      )
    },
    formatDayOfMonth(day) {
      const dayOfMonth = formatDate(day, 'D')
      const isStartDate = isSameDay(day, this.startDate)
      return dayOfMonth === '1' || isStartDate
        ? formatDate(day, 'MMM D')
        : dayOfMonth
    },
    formatTimeOfEvent(event) {
      const startMinutes = formatDate(event.startTime, 'm')
      return formatDate(
        event.startTime,
        startMinutes === '0' ? 'h a' : 'h:mm a'
      )
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
