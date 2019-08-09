import { firestoreAction } from 'vuexfire'
import firestore from '~/utils/firestore'

export const state = () => ({
  all: []
})

export const actions = {
  loadAll: firestoreAction(context =>
    context.bindFirestoreRef('all', firestore.collection('sponsors'))
  )
}
