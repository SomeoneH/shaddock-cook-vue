import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path: '/launch',
      name: 'launch',
      component: () => import("@/views/launch/launch.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import("@/views/home/home.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login/login.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/login/register.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import("@/views/discover/discover.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: () => import("@/views/classroom/classroom.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import("@/views/mall/mall.vue"),
      meta: {
        index: 1
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import("@/views/mine/mine.vue"),
      meta: {
        index: 1
      }
    },
  ]
})

export default router
