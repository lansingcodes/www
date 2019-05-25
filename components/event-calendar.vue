<template>
  <div class="calendar">
    <div class="weekday-labels">
      <div
        v-for="weekday in weekdayLabels"
        :key="weekday"
        class="weekday-label"
      >{{ weekday }}</div>
    </div>
    <div
      v-for="(week, index) in calendar"
      :key="index"
      class="week"
    >
      <div
        v-for="day in week"
        :key="day.getTime()"
        :class="{
          active: isDuringActivePeriod(day) && isWeekday(day),
          today: isToday(day)
        }"
        class="day"
      >
        <div v-if="isDuringActivePeriod(day)">
          <div>{{ formatDate(day, 'DD') }}</div>
          <ul>
            <li
              v-for="event in eventsOnDay(day)"
              :key="event.attributes.id"
              :data-content="event.name"
              data-toggle="popover"
              data-trigger="hover"
              data-placement="bottom"
              data-animation="false"
            >
              <a
                :href="event.url"
                target="_blank"
              >
                <div>
                  {{ event.time }}
                  <span
                    v-if="iconForEvent(event)"
                    class="pull-right"
                  >
                    <logo
                      :icon-set="iconForEvent(event).iconSet"
                      :icon-name="iconForEvent(event).iconName"
                      :icon-text="iconForEvent(event).iconText"
                    />
                  </span>
                </div>
                {{ event.focus }}
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
import logo from '~/components/logo--small'
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
  ready() {
    /* eslint-disable */
    jquery('.calendar [data-toggle="popover"]').popover()
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
    eventsOnDay(day) {
      return this.events.filter(event => {
        return isSameDay(new Date(event.attributes.time.absolute), day)
      })
    },
    isDuringActivePeriod(day) {
      const now = Date.now()
      const dateOfLastEvent = new Date(
        this.events[this.events.length - 1].attributes.time.absolute
      )
      return !isBefore(day, now) && !isAfter(day, dateOfLastEvent)
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

<style lang="scss" scoped>
$calendar-border-color: white;
$one-seventh-width: 14.285714285%;
$text-color: white;

.calendar {
  min-width: 850px;
  color: white;
  a {
    color: white;
  }
  > .week {
    display: flex;
    > .day {
      width: $one-seventh-width;
      border: 6px solid transparentize($calendar-border-color, 0.7);
      border-radius: 7px;
      padding: 10px;
      margin: 3px;
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style-type: none;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255,255,255,0.2);
        &:first-of-type {
          padding-top: 0;
          border-top: none;
        }
        > a {
          display: block;
          &:hover {
            $event-hover-bg: rgba(255,255,255,0.15);
            background: $event-hover-bg;
            box-shadow: 0 0 0 10px $event-hover-bg;
          }
          &:hover, &:active, &:focus {
            text-decoration: none;
          }
        }
      }
      &.active {
        border-color: $calendar-border-color;
      }
      &.today {
        border-color: coral;
      }
    }
  }
}
.weekday-labels {
  display: flex;
  .weekday-label {
    width: $one-seventh-width;
    text-align: center;
  }
}
.icon {
  font-size: 1.4em;
  margin-top: 5px;
  &.fa-graduation-cap { margin-right: -5px; }
}
</style>
