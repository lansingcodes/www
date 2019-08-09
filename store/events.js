import { firestoreAction } from 'vuexfire'
import firestore from '~/utils/firestore'
import { startOfDay, addWeeks, endOfDay, endOfWeek } from 'date-fns'

const weeksAvailable = 4

export const state = () => ({
  upcoming: []
})

export const actions = {
  loadUpcoming: firestoreAction(context => {
    const startDate = startOfDay(Date.now())
    const endDate = endOfDay(endOfWeek(addWeeks(startDate, weeksAvailable - 1)))
    const eventsRef = firestore
      .collection('events')
      .where('startTime', '>=', startDate.getTime())
      .where('startTime', '<=', endDate.getTime())
      .orderBy('startTime', 'asc')
    return context.bindFirestoreRef('upcoming', eventsRef)
  })
}
