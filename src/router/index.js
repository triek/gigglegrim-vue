import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import TShirt from '../pages/TShirt.vue'
import News from '../pages/News.vue'
import Contact from '../pages/Contact.vue'
import Cart from '../pages/Cart.vue'
import Test from '../pages/Test.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tshirt', component: TShirt },
  { path: '/news', component: News },
  { path: '/contact', component: Contact },
  { path: '/cart', component: Cart },
  { path: '/test', component: Test },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
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
