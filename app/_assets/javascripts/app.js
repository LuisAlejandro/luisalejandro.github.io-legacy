import anime from 'animejs';
import jQuery from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import { utils } from './utils';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const LA = window.LA || {};
LA.intro = {};

jQuery(document).ready(function () {
  LA.intro.timeline = anime.timeline();
  LA.intro.timeline.add({
    targets: 'body',
    easing: 'linear',
    duration: 1000,
    backgroundColor: '#f8d983'
  });
  LA.intro.timeline.finished.then(utils.initVue);
});

export default LA;
