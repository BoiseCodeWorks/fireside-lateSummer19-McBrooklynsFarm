import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FarmLand from './views/FarmLand.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/farms/:farmId',
      name: 'farmLand',
      props: true,
      component: FarmLand
    }

  ]
})
