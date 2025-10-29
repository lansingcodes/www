import { collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { db } from '~/utils/firestore'

export const useSponsors = () => {
  const all = useCollection(collection(db, 'sponsors'), { ssrKey: 'sponsors' })

  return {
    all
  }
}
