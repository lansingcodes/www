<template>
  <resource-section
    id="calendar"
    bg="primary"
    heading="Upcoming Events"
  >
    <calendar v-if="events.length > 0" :events="events"></calendar>
    <table v-if="events.length > 0" class="table">
      <tbody>
        <tr v-for="event in events">
          <td>in {{ event.attributes.time.relative }}</td>
          <td class="text-left">
            <a :href="event.links.self">
              {{ event.attributes.name }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
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

  .table {
    display: none;

    td {
      border: none;
      vertical-align: middle;

      &:first-of-type {
        color: rgba(255,255,255,0.83);
      }
    }
  }

  @media (max-width: 1000px) {
    .calendar {
      display: none;
    }
    .table {
      display: table;
    }
  }
</style>
