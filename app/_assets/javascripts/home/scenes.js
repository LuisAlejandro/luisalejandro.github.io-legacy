import jQuery from 'jquery';

var exports = module.exports = {};

exports.home = {};

exports.home.init = [{
  targets: '#torso-plus-head-arms',
  duration: 1,
  rotate: '40deg'
}, {
  targets: '#left-arm',
  duration: 1,
  rotate: '5deg'
}, {
  targets: '#lower-left-arm-plus-hand',
  duration: 1,
  rotate: '60deg'
}, {
  targets: '#left-hand',
  duration: 1,
  rotate: '-30deg'
}, {
  targets: '#right-arm',
  duration: 1,
  rotate: '20deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 1,
  rotate: '-30deg'
}, {
  targets: '#left-leg',
  duration: 1,
  rotate: '-40deg'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1,
  rotate: '30deg'
}, {
  targets: '#head-side',
  duration: 1,
  rotate: '-30deg'
}, {
  targets: '#home > .container-me',
  duration: 1000,
  offset: 1000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: ['-30%', '-15%'],
  easing: 'easeInQuint',
  begin: () => {
    jQuery('#app > .container-me, #left-foot-2, #right-foot-2').css({ 'display': 'block' });
    jQuery('#left-foot, #right-foot').css({ 'display': 'none' });
  }
}, {
  targets: '#torso-plus-head-arms',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#left-arm',
  duration: 1000,
  rotate: '5deg'
}, {
  targets: '#lower-left-arm-plus-hand',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#left-hand',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#right-arm',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#left-leg',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#head-side',
  duration: 1000,
  offset: 2000,
  rotate: '0deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#home > .container-me',
  duration: 1000,
  offset: 2000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: ['-15%', '-5%'],
  easing: 'easeInOutQuint',
  complete: () => {
    jQuery('#left-foot,#right-foot').css({ 'display': 'block' });
    jQuery('#left-foot-2,#right-foot-2').css({ 'display': 'none' });
  }
}, {
  targets: '#home > .container-me',
  duration: 3000,
  offset: 3000,
  rotate: '10deg',
  translateX: '20px',
  easing: 'easeInOutQuint'
}, {
  targets: '#torso-plus-head-arms',
  duration: 3000,
  offset: 3000,
  rotate: '-10deg',
  translateX: '10px',
  easing: 'easeInOutQuint'
}, {
  targets: '#left-arm',
  duration: 3000,
  offset: 3000,
  rotate: '-100deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#right-arm',
  duration: 3000,
  offset: 3000,
  rotate: '30deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 3000,
  offset: 3000,
  rotate: '-50deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#lower-left-arm-plus-hand',
  duration: 3000,
  offset: 3000,
  rotate: '110deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#right-leg',
  duration: 3000,
  offset: 3000,
  rotate: '5deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#lower-right-leg-plus-foot',
  duration: 3000,
  offset: 3000,
  rotate: '-20deg',
  easing: 'easeInOutQuint'
}, {
  targets: '#right-foot-2',
  duration: 1500,
  offset: 3000,
  complete: () => {
    jQuery('#right-foot-2').css({ 'display': 'block' });
    jQuery('#right-foot').css({ 'display': 'none' });
  }
}];
