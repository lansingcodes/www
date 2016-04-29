import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import dynamicKeywords from './config/dynamic-keywords'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'html',
  components: { app },
  data () {
    return {
      dynamicKeywords
    }
  }
})
