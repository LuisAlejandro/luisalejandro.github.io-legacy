import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';

export default new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio}
  ]
});
