import VueRouter from 'vue-router'
import WizardStarter from '../views/WizardStarter'


const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/wizard', component: WizardStarter }
  ]
})

export default router
