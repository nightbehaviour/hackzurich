import Vue from 'vue'
import Router from 'vue-router'
import WizardStarter from '../views/WizardStarter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/wizard',
      name: 'WizardStarter',
      component: WizardStarter,

    }
  ]
})