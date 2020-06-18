import Vue from 'vue'
import VueRouter from 'vue-router'
import { NotFoundComponent } from '@/views/NotFoundComponent.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: { 
      layout: 'no-sidebar',
      title: '🔥 OilResurs | Вход'
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta && to.meta.title ? to.meta.title : '🔥 OilResurs'
  next()
})

export default router
