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

var LA = window.LA || {};
LA.tlArray = [{
  targets: 'body',
  backgroundColor: '#f8d983',
  easing: 'easeOutExpo',
  duration: 3000,
  offset: 0
}, {
  targets: '#app',
  translateX: 250,
  easing: 'easeOutExpo',
  duration: 1000,
  offset: 0
}];

LA.tl = anime.timeline();

LA.tlArray.forEach(function (el) {
  LA.tl = LA.tl.add(el);
});
