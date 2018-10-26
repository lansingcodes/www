<template>
  <resource-section
    id="calendar"
    bg="primary"
    heading="Upcoming Events"
  >
    <calendar v-if="events.length > 0" :events="events"></calendar>
    <ul v-if="events.length > 0" class="events-list">
      <li v-for="event in events">
        <a :href="event.links.self">
          <div class="event-title">
            <h3 class="h5">{{ event.relationships.group.attributes.focus }}</h3>
            <span class="event-name">
              {{ event.attributes.name }}
            </span>
          </div>
          <div class="event-date">
            {{ formatDate(event.attributes.time.absolute) }}
          </div>
        </a>
      </li>
    </ul>
    <p v-else class="text-center">Loading...</p>
  </resource-section>
</template>

<script>
  // VENDOR
  import { distanceInWordsToNow } from 'date-fns'

  // HELPERS
  import fetchEvents from 'src/helpers/fetch-events'

  // COMPONENTS
  import resourceSection from './resource-section'
  import calendar from './calendar'

  export default {
    components: {
      resourceSection, calendar
    },
    data () {
      return {
        events: []
      }
    },
    created () {
      fetchEvents().then(events => {
        this.events = events
      })
    },
    methods: {
      formatDate (date) {
        const timeDisplacement = distanceInWordsToNow(date)
        return Date.now() < date ? 'in ' + timeDisplacement : timeDisplacement + ' ago'
      }
    }
  }
</script>

<style lang="scss" scoped>
  $event-list-vertical-padding: 15px;

  a {
    color: white;
  }

  .events-list {
    display: none;
    margin: 0;
    padding: 0;

    > li {
      padding: $event-list-vertical-padding 0;
      list-style-type: none;
      border-top: 1px solid rgba(255,255,255,0.15);

      h3 {
        margin-top: 0;
        font-size: 1.5rem;
      }

      .event-name {
        font-weight: 200;
        font-size: 1.25rem;
      }

      .event-date {
        opacity: 0.8;
        font-size: 1.25rem;
      }

      &:first-of-type {
        border-top: none;
      }

      > a {
        display: block;

        &:hover {
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 0 ($event-list-vertical-padding + 1px) rgba(255,255,255,0.15);
        }

        &:hover, &:active, &:focus {
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .calendar {
      display: none;
    }
    .events-list {
      display: block;
    }
  }
</style>
