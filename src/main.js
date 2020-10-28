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


// 时间过滤器

Vue.filter("timefn",function(originval){
    const dt = new Date(originval)
  
    const yy = dt.getFullYear()
    const mm = (dt.getMonth() +1+'' ).padStart(2,0)
    const dd = (dt.getDate() +'' ).padStart(2,0)
    const hh = (dt.getHours() +'' ).padStart(2,0)
    const ff = (dt.getMinutes() +'' ).padStart(2,0)
    const ss = (dt.getSeconds() +'' ).padStart(2,0)
  
    return `${mm}月${dd}日 ${hh}:${ff}`
  })
