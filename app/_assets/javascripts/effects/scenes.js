import jQuery from 'jquery';

var exports = module.exports = {};

exports.effects = {};

exports.effects.init = [{
  targets: 'body',
  easing: 'easeOutExpo',
  duration: 2000,
  backgroundColor: '#f8d983'
}, {
  targets: '#app > .container-fire-preloader',
  duration: 1000,
  offset: 1000,
  scale: 0.1,
  easing: 'linear',
  complete: () => {
    jQuery('#app > .container-fire-preloader').css({ 'display': 'none' });
  }
}];
