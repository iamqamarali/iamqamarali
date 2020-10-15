import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
window.Popmotion = require('popmotion')


const router = new VueRouter({
  mode : 'history',
  routes,
})

router.afterEach((to, from) => {
    window.scrollTo(0,0)
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
