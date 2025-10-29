import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCMw8mZ1D1GAYpeotAqVCaYAMtn3URVOok',
  authDomain: 'lansing-codes.firebaseapp.com',
  databaseURL: 'https://lansing-codes.firebaseio.com',
  projectId: 'lansing-codes',
  storageBucket: 'lansing-codes.appspot.com',
  messagingSenderId: '647280182517',
  appId: '1:647280182517:web:779f72d0b90c0dd4',
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)

export default db
