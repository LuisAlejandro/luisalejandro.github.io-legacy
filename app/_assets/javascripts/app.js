import anime from 'animejs';
import jQuery from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';
import App from './components/App.vue';

Vue.use(VueRouter);

const LA = window.LA || {};
LA.intro = {};

jQuery(document).ready(function () {
  LA.intro.timeline = anime.timeline();
  LA.intro.timeline.add({
    targets: 'body',
    easing: 'linear',
    backgroundColor: '#f8d983',
    duration: 1000,
    autoplay: false,
  });

  LA.intro.timeline.finished.then(() => {
    return new Vue({
      el: '#app',
      router: router,
      render: component => component(App)
    });
  });

  LA.intro.timeline.play();
});

export default LA;
