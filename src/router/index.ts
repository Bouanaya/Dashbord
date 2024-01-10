import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/file',
      name: 'file',
      component: main
    },
    {
      path: '/Stati',
      name: 'STAI',
      component: main
    },
    {
      path: '/profi',
      name: 'profil',
      component: main
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
