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
Vue.use(VueLoading, { type: "bars", color: "#009B72" })
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://loadinggif.com/generated-image?imageId=13&bgColor=%23ffffff&fgColor=%23a3780d&transparentBg=1&download=0&random=0.898108853256754',
  loading: 'http://loadinggif.com/generated-image?imageId=13&bgColor=%23ffffff&fgColor=%23a3780d&transparentBg=1&download=0&random=0.898108853256754',
  attempt: 2
})

import './assets/css/app.css'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({router, store, render: h => h(App)}).$mount('#app')
