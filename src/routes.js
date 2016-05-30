import home from './pages/home'
import future from './pages/future'

export default router => {
  router.map({
    '/': {
      name: 'home',
      component: home
    },

    '/future': {
      name: 'future',
      component: future
    }
  })
}
