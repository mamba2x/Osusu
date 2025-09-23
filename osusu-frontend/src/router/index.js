import { createRouter, createWebHistory } from 'vue-router'

const routeList = [
  {
    path: '/',
    name: 'Guest',
    component: () => import ('@/views/Guest.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import ('@/views/Login.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import ('@/views/Signup.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import ('@/views/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList
})

export default router
