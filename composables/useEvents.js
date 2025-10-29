import { collection, query, where, orderBy } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { db } from '~/utils/firestore'
import { startOfDay, addWeeks, endOfDay, endOfWeek } from 'date-fns'
import weeksAvailable from '~/config/max-calendar-weeks'

export const useEvents = () => {
  const startDate = startOfDay(Date.now())
  const endDate = endOfDay(endOfWeek(addWeeks(startDate, weeksAvailable - 1)))

  const eventsQuery = query(
    collection(db, 'events'),
    where('startTime', '>=', startDate.getTime()),
    where('startTime', '<=', endDate.getTime()),
    orderBy('startTime', 'asc')
  )

  const upcoming = useCollection(eventsQuery, { ssrKey: 'events' })

  return {
    upcoming
  }
}
