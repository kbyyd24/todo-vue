import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import Axios from 'axios';

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://localhost:8080'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
