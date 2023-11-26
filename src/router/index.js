import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue';
import contact from '@/views/contact.vue';
import products from '@/views/products.vue';
import facts from '@/views/FactsChicken.vue'
import about from '@/views/About.vue';
import life from '@/views/LifeChicks.vue'

import why from '@/views/WhyChicken.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/facts',
      name: 'facts',
      component: facts
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/whychicken',
      name: 'whychicken',
      component: why
    },
    {
      path: '/navbar',
      name: 'navbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/navBar.vue')
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/contact.vue')
    // }
  ],
  
})

export default router
