import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/index.vue'
import Blog from '@/pages/blog/index.vue'
import Label from '@/pages/label/index.vue'
import category from '@/pages/category/index.vue'
import timeLine from '@/pages/timeLine/index.vue'
import contact from '@/pages/contact/index.vue'
import articleDetail from '@/pages/articleDetail/index.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Home
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
  }, {
    path: '/label/:label',
    name: 'label',
    component: Label,
    props: true
  }, {
    path: '/category/:category',
    name: 'category',
    component: category,
    props: true
  }, {
    path: '/timeLine',
    name: 'timeLine',
    component: timeLine,
  }, {
    path: '/contact',
    name: 'contact',
    component: contact,
  }],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
