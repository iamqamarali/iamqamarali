import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import work from '../views/work.vue'
import about from '../views/about.vue'
import skills from '../views/skills.vue'
import contact from '../views/contact.vue'

import caafinancial from '../views/projects/caafinancial.vue'
import KaiEmr from '../views/projects/kai-emr.vue'
import iamqamarali from '../views/projects/iamqamarali.vue'
import serviceDoer from '../views/projects/servicedoer.vue'
import webfx from '../views/projects/webfx.vue'
import enno from '../views/projects/php-enno.vue'
import tesoro from '../views/projects/tesoro.vue'
import underarmour from '../views/projects/underarmour.vue'


let projectRoutes = [ 
  {path: '/project/caafinancial', component: caafinancial},
  {path: '/project/kai-emr', component: KaiEmr},
  {path: '/project/iamqamarali', component: iamqamarali}, 
  {path: '/project/servicedoer', component: serviceDoer},
  {path: '/project/webfx', component: webfx},
  {path: '/project/enno', component: enno},
  {path: '/project/tesoro', component: tesoro},
  {path: '/project/underarmour', component: underarmour}
]


let otherRoutes = [
  {
      path : '/',
      name : 'home',
      component : home
  },
  {
      path : '/work',
      name : 'work',
      component : work
  },
  {
      path : '/about',
      name : 'about',
      component : about
  },
  {
      path : '/skills',
      name : 'skills',
      component : skills
  },
  {
      path : '/contact',
      name : 'contact',
      component : contact
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : otherRoutes.concat(projectRoutes)
})

export default router
