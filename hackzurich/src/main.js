import Vue from 'vue';
import App from './App'
import router from './router'

import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
}).$mount('#app')


