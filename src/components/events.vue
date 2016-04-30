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
            {{ event.relationships.group.attributes.focus }}:
            {{ event.attributes.name }}
          </div>
          <div class="event-date">in {{ event.attributes.time.relative }}</div>
        </a>
      </li>
    </ul>
    <p v-else class="text-center">Loading...</p>
  </resource-section>
</template>

<script>
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
      this.$http.get('http://api.lansing.codes/v1/events/upcoming/list')
        .then(response => {
          this.events = response.data.data.map(event => {
            return {
              ...event,
              relationships: {
                group: response.data.included[event.relationships.group.type][event.relationships.group.id],
                venue: response.data.included[event.relationships.venue.type][event.relationships.venue.id]
              }
            }
          })
        })
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: white;
  }

  .events-list {
    display: none;
    margin: 0;
    padding: 0;

    > li {
      padding: 10px 0;
      list-style-type: none;
      border-top: 1px solid rgba(255,255,255,0.15);

      .event-date {
        opacity: 0.8;
      }

      &:first-of-type {
        border-top: none;
      }

      > a {
        display: block;

        &:hover {
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 0 11px rgba(255,255,255,0.15);
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
