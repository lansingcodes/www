import firebase from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp(process.env.firebaseWebConfig)

export default firebaseApp.firestore()
