import { createRouter, createWebHistory } from 'vue-router'

const routeList = [
  {
    path: '/',
    name: 'Guest',
    component: () => import('@/views/Guest.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue'),
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',

    component: () => import ('@/views/Dashboard.vue')
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: () => import ('@/views/Groups.vue')
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    component: () => import ('@/views/Wallet.vue')
  },
  {
    path: '/Support',
    name: 'Support',
    component: () => import ('@/views/Support.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import ('@/views/Logout.vue')
  }
  {
    path: '/Group-name/group-members',
    name: 'Group-members',
    component: () => import('@/views/Members.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
})

export default router
