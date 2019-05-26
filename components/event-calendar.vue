<template>
  <div>
    <div class="flex">
      <div
        v-for="weekday in weekdayLabels"
        :key="weekday"
        class="w-1/7 text-center text-white"
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
          active: isDuringActivePeriod(day) && isWeekday(day),
          today: isToday(day)
        }"
        class="w-1/7 bg-white m-1 p-1"
      >
        <div v-if="isDuringActivePeriod(day)">
          <div class="text-center">{{ formatDayOfMonth(day) }}</div>
          <ul class="m-0 p-0">
            <li
              v-for="event in eventsOnDay(day)"
              :key="event.attributes.id"
              class="block list-none mt-2 mx-1 pt-2"
            >
              <a
                :href="event.links.self"
                class="w-full block no-underline"
                target="_blank"
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
                <div>{{ eventName(event) }}</div>
              </a>
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
      return event.attributes.name
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
      const dateOfLastEvent = new Date(
        this.events[this.events.length - 1].attributes.time.absolute
      )
      return (
        (isAfter(day, now) || isSameDay(day, now)) &&
        (isBefore(day, dateOfLastEvent) || isSameDay(day, dateOfLastEvent))
      )
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
