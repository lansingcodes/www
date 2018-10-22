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
          <div>{{ formatDate(day, 'DD') }}</div>
          <ul>
            <li
              v-for="event in eventsOnDay(day)"
              data-toggle="popover"
              data-trigger="hover"
              :data-content="event.name"
              data-placement="bottom"
              data-animation="false"
            >
              <a :href="event.url" target="_blank">
                <div>
                  {{ event.time }}
                  <span v-if="iconFor(event)" class="pull-right">
                    <icon :type="iconFor(event)" class="icon"></icon>
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
    startOfWeek, endOfWeek, isBefore,
    isAfter, addDays, isSameDay,
    format as formatDate
  } from 'date-fns'
  import chunk from 'lodash/chunk'
  import icon from './icon'
  import meetups from 'src/config/meetups'

  export default {
    components: {
      icon
    },
    props: {
      events: {
        props: {
          type: Array,
          required: true
        }
      }
    },
    data () {
      const startDate = startOfWeek(Date.now())
      const endDate = endOfWeek(
        this.events[this.events.length - 1].attributes.time.absolute
      )
      let dates = []
      for (
        let days = 0, currentDate = startDate;
        isBefore(currentDate, endDate);
        days++, currentDate = addDays(startDate, days)
      ) {
        dates.push(currentDate)
      }
      return {
        startDate,
        endDate,
        calendar: chunk(dates, 7),
        weekdayLabels: [
          'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
        ]
      }
    },
    ready () {
      /* eslint-disable */
      jquery('.calendar [data-toggle="popover"]').popover()
    },
    methods: {
      eventsOnDay (day) {
        return this.events.filter(event => {
          return isSameDay(new Date(event.attributes.time.absolute), day)
        }).map(event => {
          const eventTime = new Date(event.attributes.time.absolute)
          return {
            name: event.attributes.name,
            time: formatDate(eventTime, 'm') === '0'
              ? formatDate(eventTime, 'ha') : formatDate(eventTime, 'h:mma'),
            focus: event.relationships.group.attributes.focus,
            url: event.links.self
          }
        })
      },
      isDuringActivePeriod (day) {
        const now = Date.now()
        const dateOfLastEvent = new Date(
          this.events[this.events.length - 1].attributes.time.absolute
        )
        return (
          (isSameDay(day, now) || isAfter(day, now)) &&
          (isSameDay(day, dateOfLastEvent) || isBefore(day, dateOfLastEvent))
        )
      },
      isToday (day) {
        return isSameDay(day, Date.now())
      },
      isWeekday (day) {
        const dayOfWeek = formatDate(day, 'E')
        return dayOfWeek <= 5
      },
      iconFor (event) {
        const matchingMeetup = meetups.filter(meetup => {
          return meetup.name === event.focus
        })[0]
        return matchingMeetup ? matchingMeetup.icon : null
      },
      formatDate
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
