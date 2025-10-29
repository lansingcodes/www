import { collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { db } from '~/utils/firestore'

export const useGroups = () => {
  const all = useCollection(collection(db, 'groups'), { ssrKey: 'groups' })

  return {
    all
  }
}
