import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/MainHome'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/MainLogout'),
    meta: {
      layout: 'auth',
      auth: true
    }
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/MainCategories'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/record/:id',
    name: 'details-record',
    component: () => import('@/views/MainDetailsRecord'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/MainHistory'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/planning',
    name: 'planning',
    component: () => import('@/views/MainPlanning'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/MainProfile'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/MainRecord'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AuthLogin'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/AuthRegister'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/views/ThePageNotFound'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/login?message=auth')
  } else {
    next()
  }
})

export default router
