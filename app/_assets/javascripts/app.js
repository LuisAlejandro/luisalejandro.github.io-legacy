import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import router from './router/router';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  router: router,
  render: component => component(App)
});
