import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Easter from '../components/Easter.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/easter',
      name: 'easter',
      component: Easter
    }
  ]
});
