import Vue from 'vue'
import Router from 'vue-router'
import ContextWizard from '../../frontend/src/views/ContextWizard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/wizard',
      name: 'contextwizard',
      component: ContextWizard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
