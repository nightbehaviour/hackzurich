import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#EB0000',
        secondary: '#767676',
        accent: '#666666',
        error: '#b71c1c',
      },
    },
  },
});
