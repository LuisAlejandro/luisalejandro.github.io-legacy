import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/clients',
      name: 'clients',
      beforeEnter () {
        window.location.href = 'http://erp.luisalejandro.org';
      }
    },
    {
      path: '/blog',
      name: 'blog',
      beforeEnter () {
        window.location.href = 'http://luisalejandro.org/blog';
      }
    },
    {
      path: '/donations',
      name: 'blog',
      beforeEnter () {
        window.location.href = 'http://paypal.me/martinezfaneyth';
      }
    }
  ]
});
