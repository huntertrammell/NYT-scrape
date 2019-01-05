import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Scrape from './views/Scrape'
import Empty from './views/Empty'

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
      component: Scrape
    },
    {
      path: '/api/empty',
      name: 'empty',
      component: Empty
    }
  ]
})
