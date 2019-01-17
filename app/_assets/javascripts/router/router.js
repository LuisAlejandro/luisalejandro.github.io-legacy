import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Work from '../components/Work.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

export default new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/work', name: 'work', component: Work },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/erp', name: 'erp', beforeEnter () { window.location.href = 'http://erp.luisalejandro.org'; } }
  ]
});
