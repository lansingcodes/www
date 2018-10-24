import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import configureRoutes from './routes.js'
import dynamicKeywords from './config/dynamic-keywords'

import 'jquery'
import 'popper.js'
import 'bootstrap'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  linkActiveClass: 'active'
})

configureRoutes(router)

router.start({
  data () {
    return {
      dynamicKeywords
    }
  }
}, 'html')
