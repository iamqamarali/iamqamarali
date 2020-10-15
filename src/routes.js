import home from './pages/home.vue'
import work from './pages/work.vue'
import about from './pages/about.vue'
import skills from './pages/skills.vue'
import contact from './pages/contact.vue'

import caafinancial from './pages/projects/caafinancial'
import KaiEmr from './pages/projects/kai-emr'
import iamqamarali from './pages/projects/iamqamarali'
import serviceDoer from './pages/projects/servicedoer'
import webfx from './pages/projects/webfx'
import enno from './pages/projects/php-enno'
import tesoro from './pages/projects/tesoro'
import underarmour from './pages/projects/underarmour'

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

otherRoutes.push.apply( otherRoutes, projectRoutes)
export default otherRoutes