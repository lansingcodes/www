import { addWeeks, endOfWeek, isBefore } from 'date-fns'

export const state = () => ({
  upcoming: []
})

export const mutations = {
  setUpcoming(state, upcoming) {
    state.upcoming = upcoming
  }
}

export const actions = {
  async loadUpcoming({ commit }) {
    const allUpcomingEvents = await this.$axios.$get(
      'https://api.lansing.codes/v1/events/upcoming/list?per_group_limit=10'
    )

    // Filter out events that are not within the next three full weeks
    const lastDateInScope = endOfWeek(addWeeks(Date.now(), 3))

    const upcoming = allUpcomingEvents.data
      .filter(event => {
        const eventDate = new Date(event.attributes.time.absolute)
        return isBefore(eventDate, lastDateInScope)
      })
      .map(event => ({
        ...event,
        relationships: {
          group:
            allUpcomingEvents.included[event.relationships.group.type][
              event.relationships.group.id
            ],
          venue: event.relationships.venue
            ? allUpcomingEvents.included[event.relationships.venue.type][
                event.relationships.venue.id
              ]
            : {}
        }
      }))

    commit('setUpcoming', upcoming)
  }
}
