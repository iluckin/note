import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import BootstrapVue from 'bootstrap-vue'
import VueLoading from 'vue-loading-template'
import feather from 'vue-icon'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(feather, {
  name: 'feather',
  props: {
    baseClass: {
      default: 'feather'
    }
  }
})
Vue.use(VueLoading, { type: "bars" })
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/avatar-01.png',
  loading: './assets/images/001.png',
  attempt: 1
})
import './assets/css/app.css'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({router, store, render: h => h(App)}).$mount('#app')
