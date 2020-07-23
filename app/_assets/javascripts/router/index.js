import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Easter from '../components/Easter.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';

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
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});
