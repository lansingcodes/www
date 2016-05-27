import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource)

export default () => {
  return Vue.http.get('http://api.lansing.codes/v1/events/upcoming/list?per_group_limit=10')
  .then(response => {
    return response.data.data
      .filter(event => {
        const eventDate = moment(event.attributes.time.absolute)
        const lastDateInScope = moment().add(3, 'weeks').endOf('week')
        return eventDate.isBefore(lastDateInScope)
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
