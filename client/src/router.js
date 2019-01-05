import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import API from './views/API'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/api/scrape',
      name: 'scrape',
      component: API
    },
    {
      path: '/api/empty',
      name: 'empty',
      component: API
    }
  ]
})
