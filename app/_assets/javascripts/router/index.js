import jQuery from 'jquery';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Easter from '../components/Easter.vue';
import Blog from '../components/Blog.vue';
import objectsOutro from '../home/outro/objects';
import { navbarOutro } from '../effects';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        if (from.name !== null) {
          navbarOutro().finished.then(next);
        } else {
          next();
        }
      }
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
      path: '/easter',
      name: 'easter',
      component: Easter
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/clients',
      name: 'clients',
      beforeEnter (to, from, next) {
        objectsOutro();
        window.location.href = 'http://erp.luisalejandro.org';
      }
    },
    {
      path: '/donations',
      name: 'donations',
      beforeEnter (to, from, next) {
        objectsOutro();
        window.location.href = 'http://paypal.me/martinezfaneyth';
      }
    }
  ]
});
