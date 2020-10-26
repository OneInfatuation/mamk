import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import "./rem/rem.js";//引入rem
import ClientAPI from "./api/index";//引入封装的api
Vue.prototype.$ClientAPI = ClientAPI;//全局注册
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
