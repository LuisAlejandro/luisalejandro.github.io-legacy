import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Work from '../components/Work.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/work', component: Work },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});
