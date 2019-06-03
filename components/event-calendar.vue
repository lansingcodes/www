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
                name: event.attributes.id
              }"
              v-for="event in eventsOnDay(day)"
              :key="event.attributes.id"
              class="
                block list-none mx-1 py-2 border-t border-blue
                hover:bg-blue-lightest
              "
            >
              <a
                :href="event.links.self"
                class="w-full block no-underline text-blue-darker"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span v-if="iconForEvent(event)">
                  <logo
                    v-if="iconForEvent(event)"
                    :icon-set="iconForEvent(event).iconSet"
                    :icon-name="iconForEvent(event).iconName"
                    :icon-text="iconForEvent(event).iconText"
                    class="inline-block"
                  />
                </span>
                {{ formatTimeOfEvent(event) }}
                <div class="mt-1">{{ eventName(event) }}</div>
              </a>
              <transition
                enter-active-class="transition-opacity"
                enter-class="opacity-0"
                leave-active-class="transition-opacity"
                leave-to-class="opacity-0"
              >
                <popover
                  :name="event.attributes.id"
                  :width="225"
                  event="hover"
                  class="
                    text-blue-darker border border-blue shadow-md -mt-2
                  "
                >
                  <div>{{ event.attributes.name }}</div>
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
import iconForEvent from '~/utils/icon-for-event'

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
      return endOfWeek(
        this.events[this.events.length - 1].attributes.time.absolute
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
    }
  },
  methods: {
    eventName(event) {
      return event.relationships.group.attributes.focus
    },
    eventsOnDay(day) {
      return this.events.filter(event =>
        isSameDay(new Date(event.attributes.time.absolute), day)
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
      const startMinutes = formatDate(event.attributes.time.absolute, 'm')
      return formatDate(
        event.attributes.time.absolute,
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
    formatDate,
    iconForEvent
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
