import Vue from 'vue';
import App from './App'
import router from './router'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')


