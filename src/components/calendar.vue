<template>
  <div class="calendar">
    <div class="weekday-labels">
      <div v-for="weekday in weekdayLabels" class="weekday-label">
        {{ weekday }}
      </div>
    </div>
    <div v-for="week in calendar" class="week">
      <div
        class="day"
        v-for="day in week"
        :class="{
          active: isDuringActivePeriod(day) && isWeekday(day),
          today: isToday(day)
        }"
      >
        <div v-if="isDuringActivePeriod(day)">
          <div>{{ day.format('DD') }}</div>
          <ul>
            <li
              v-for="event in eventsOnDay(day)"
              data-toggle="popover"
              data-trigger="hover"
              data-content="{{ event.name }}"
              data-placement="bottom"
              data-animation="false"
            >
              <a :href="event.url" target="_blank">
                {{ event.time }}<br>
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
  import moment from 'moment'
  import chunk from 'lodash/chunk'

  export default {
    props: {
      events: {
        props: {
          type: Array,
          required: true
        }
      }
    },
    data () {
      const startDate = moment().startOf('week')
      const endDate = moment(
        this.events[this.events.length - 1].attributes.time.absolute
      ).endOf('week')
      let dates = []
      for (
        let days = 0, currentDate = startDate;
        currentDate.isBefore(endDate);
        days++, currentDate = moment(startDate).add(days, 'day')
      ) {
        dates.push(currentDate)
      }
      return {
        startDate,
        endDate,
        calendar: chunk(dates, 7),
        weekdayLabels: moment.weekdaysShort()
      }
    },
    ready () {
      /* eslint-disable */
      $('.calendar [data-toggle="popover"]').popover()
    },
    methods: {
      eventsOnDay (day) {
        return this.events.filter(event => {
          return moment(event.attributes.time.absolute).isSame(day, 'day')
        }).map(event => {
          const eventTime = moment(event.attributes.time.absolute)
          return {
            name: event.attributes.name,
            time: eventTime.format('m') === '0'
              ? eventTime.format('ha') : eventTime.format('h:mma'),
            focus: event.relationships.group.attributes.focus,
            url: event.links.self
          }
        })
      },
      isDuringActivePeriod (day) {
        const dateOfLastEvent = this.events[this.events.length - 1].attributes.time.absolute
        return day.isSameOrAfter(moment(), 'day') && day.isSameOrBefore(dateOfLastEvent, 'day')
      },
      isToday (day) {
        return moment().isSame(day, 'day')
      },
      isWeekday (day) {
        const dayOfWeek = day.format('E')
        return dayOfWeek <= 5
      }
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

          > a {
            display: block;

            &:hover {
              $event-hover-bg: rgba(255,255,255,0.15);
              background: $event-hover-bg;
              box-shadow: 0 0 0 10px $event-hover-bg;
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
</style>
