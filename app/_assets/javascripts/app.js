import anime from 'animejs';
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import BootstrapVue from 'bootstrap-vue';

// import router from './router/router';
// import App from './components/App.vue';

// Vue.use(VueRouter);
// Vue.use(BootstrapVue);

// const app = new Vue({
//   el: '#app',
//   router: router,
//   render: component => component(App)
// });

import {scenes} from './intro/scenes';

var LA = window.LA || {};
LA.intro = {};

LA.intro.scenes = scenes;
LA.intro.timeline = anime.timeline();

Object.keys(LA.intro.scenes).forEach((scene) => {
  LA.intro.scenes[scene].forEach((step) => {
    LA.intro.timeline = LA.intro.timeline.add(step);
  });
});
