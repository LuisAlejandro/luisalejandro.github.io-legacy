// import jQuery from 'jquery';
import anime from 'animejs';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Cookies from 'cookies';
import BootstrapVue from 'bootstrap-vue';

// import { scenes, playback } from './intro/scenes';
import { effects } from './effects/scenes';
import { utils } from './utils';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const LA = window.LA || {};
LA.intro = {};
LA.home = {};
LA.globalAnimationLock = false;

// if (window.location.hash === '#/' && Cookies.get('seenIntro') !== 'true') {
//   Cookies.set('seenIntro', 'true', { expires: 30, path: '' });
//   LA.intro.scenes = scenes;
//   LA.intro.timeline = anime.timeline({ autoplay: false });
//   LA.intro.timeline.complete = utils.initVue;

//   Object.keys(LA.intro.scenes).forEach((scene) => {
//     LA.intro.scenes[scene].forEach((step) => {
//       LA.intro.timeline = LA.intro.timeline.add(step);
//     });
//   });

//   jQuery(() => {
//     jQuery('#play-intro').click((ev) => {
//       playback.play('drop');
//       LA.intro.timeline.play();
//       jQuery('#play-intro,#skip-intro').css({ 'display': 'none' });
//     });

//     jQuery('#skip-intro').click((ev) => {
//       playback.play('drop');
//       LA.intro.timeline.complete();
//       jQuery('#play-intro,#skip-intro').css({ 'display': 'none' });
//     });

//     jQuery('#play-intro,#skip-intro').css({ 'display': 'inline-block' });
//   });
// } else {
//   LA.effects = effects;
//   LA.intro.timeline = anime.timeline();
//   LA.intro.timeline.complete = utils.initVue;

//   LA.effects.init.forEach((step) => {
//     LA.intro.timeline = LA.intro.timeline.add(step);
//   });
// }

LA.effects = effects;
LA.intro.timeline = anime.timeline();
LA.intro.timeline.complete = utils.initVue;

LA.effects.init.forEach((step) => {
  LA.intro.timeline = LA.intro.timeline.add(step);
});

export default LA;
