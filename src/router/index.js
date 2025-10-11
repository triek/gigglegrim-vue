import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/login', component: () => import('../pages/Login.vue') },
    { path: '/signup', component: () => import('../pages/Signup.vue') },
    { path: '/tshirt', component: () => import('../pages/TShirt.vue') },
    { path: '/news', component: () => import('../pages/News.vue') },
    { path: '/contact', component: () => import('../pages/Contact.vue') },
    { path: '/cart', component: () => import('../pages/Cart.vue') },
    { path: '/test', component: () => import('../pages/Test.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
