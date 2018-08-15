import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';

import router from './router/router';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(Buefy);

const app = new Vue({
  el: '#app',
  router: router,
  render: component => component(App)
});
