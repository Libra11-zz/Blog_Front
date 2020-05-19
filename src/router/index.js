import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/admin/login/index.vue'

import Home from '@/pages/home/index.vue'
import Blog from '@/pages/blog/index.vue'
import articleDetail from '@/pages/articleDetail/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    redirect: '/'
  }, {
    path: '/blog',
    name: 'blog',
    component: Blog
  }, {
    path: '/articleDetail/:id',
    name: 'articleDetail',
    component: articleDetail
  }],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
