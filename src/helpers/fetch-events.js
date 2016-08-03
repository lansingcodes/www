import { addWeeks, endOfWeek, isBefore } from 'date-fns'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default () => {
  return Vue.http.get('https://api.lansing.codes/v1/events/upcoming/list?per_group_limit=10')
  .then(response => {
    return response.data.data
      .filter(event => {
        const eventDate = new Date(event.attributes.time.absolute)
        const lastDateInScope = endOfWeek(addWeeks(Date.now(), 3))
        return isBefore(eventDate, lastDateInScope)
      })
      .map(event => {
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
