import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notfound',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
