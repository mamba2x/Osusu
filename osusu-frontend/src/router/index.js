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
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/Groups',
    name: 'Groups',
    component: () => import('@/views/Groups.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/transaction-history',
    name: 'Transaction History',
    component: () => import('@/views/TransactionPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/stash',
    name: 'Stash',
    component: () => import('@/views/Stash.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('@/views/Notifications.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/Support',
    name: 'Support',
    component: () => import('@/views/Support.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import('@/views/Logout.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/groups/:id/group-profile',
    name: 'Group-members',
    component: () => import('@/views/Members.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('accessToken')
  const refreshTokenExists = localStorage.getItem('refreshToken')

  if (to.meta.requiresAuth && (!isLoggedIn || !refreshTokenExists)) {
    next({ name: 'Login' }) // not logged in → go to login
  } else if (
    (to.name === 'Login' || to.name === 'Signup' || to.name === 'Guest') &&
    isLoggedIn &&
    refreshTokenExists
  ) {
    next({ name: 'Dashboard' }) // logged-in users can't access login/signup
  } else {
    next() // allow navigation
  }
})

export default router
