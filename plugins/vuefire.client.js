import { VueFire, VueFireAuth } from 'vuefire'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCMw8mZ1D1GAYpeotAqVCaYAMtn3URVOok',
  authDomain: 'lansing-codes.firebaseapp.com',
  databaseURL: 'https://lansing-codes.firebaseio.com',
  projectId: 'lansing-codes',
  storageBucket: 'lansing-codes.appspot.com',
  messagingSenderId: '647280182517',
  appId: '1:647280182517:web:779f72d0b90c0dd4',
}

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = initializeApp(firebaseConfig)

  nuxtApp.vueApp.use(VueFire, {
    firebaseApp,
    modules: []
  })
})
