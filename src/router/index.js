import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },

  {
    path: '/diDrive',
    name: 'DiDrive',
    // route level code-splitting
    // this generates a separate chunk (xad.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "diDrive" */ '../views/DiDrive/index.vue')
  },
  {
    path: '/diStar',
    name: 'DiStar',
    component: () => import(/* webpackChunkName: "diStar" */ '../views/DiStar/index.vue')
  },
  {
    path: '/dizoo',
    name: 'Dizoo',
    component: () => import(/* webpackChunkName: "dizoo" */ '../views/Dizoo/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
