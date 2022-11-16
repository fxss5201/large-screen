import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/tailwindcss',
    name: 'Tailwindcss',
    component: () => import(/* webpackChunkName: "tailwindcss" */ '../views/Tailwindcss.vue')
  },
  {
    path: '/echartsExample',
    name: 'EchartsExample',
    component: () => import(/* webpackChunkName: "echartsExample" */ '../views/EchartsExample.vue')
  },
  {
    path: '/optionApi',
    name: 'OptionApi',
    component: () => import(/* webpackChunkName: "OptionApi" */ '../views/OptionApi.vue')
  },
  {
    path: '/compositionApi',
    name: 'CompositionApi',
    component: () => import(/* webpackChunkName: "CompositionApi" */ '../views/CompositionApi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
