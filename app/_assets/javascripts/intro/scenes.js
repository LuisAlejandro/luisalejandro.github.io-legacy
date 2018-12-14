import jQuery from 'jquery';
import {utils} from './utils';

var exports = module.exports = {};

exports.scenes = {};

exports.scenes.start = [{
  targets: 'body',
  easing: 'easeOutExpo',
  duration: 2000,
  backgroundColor: '#f8d983'
}, {
  targets: '#app > .container-fire-preloader',
  easing: 'easeOutExpo',
  duration: 1000,
  offset: 1000,
  left: ['40%', '60%']
}];

exports.scenes.door = [{
  targets: ['#app > .container-door-front', '#app > .container-door-inside'],
  easing: 'easeOutExpo',
  duration: 1000,
  offset: 1000,
  left: utils.calcLeftSpacePercentageDoor(),
  begin: () => {
    jQuery('#app > .container-door-front, #app > .container-door-inside').css({'display': 'block'});
  }
}, {
  targets: '#door-front-panel',
  duration: 1000,
  d: 'M 200.00001,411.95141 L 550.00001,540.34336 V 1378.4 L 200.00001,1250.008 Z'
}];

exports.scenes.entrance = [{
  targets: '#app > .container-me',
  duration: 1000,
  offset: 1000,
  complete: () => {
    jQuery('#app > .container-me, #left-foot-2, #right-foot-2').css({'display': 'block'});
    jQuery('#left-foot, #right-foot').css({'display': 'none'});
  }
}, {
  targets: '#torso-plus-head-arms',
  duration: 1,
  offset: 1000,
  rotate: '40deg'
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 1000,
  rotate: '5deg'
}, {
  targets: '#lower-left-arm-plus-hand',
  duration: 1,
  offset: 1000,
  rotate: '60deg'
}, {
  targets: '#left-hand',
  duration: 1,
  offset: 1000,
  rotate: '-30deg'
}, {
  targets: '#right-arm',
  duration: 1,
  offset: 1000,
  rotate: '20deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 1,
  offset: 1000,
  rotate: '-30deg'
}, {
  targets: '#left-leg',
  duration: 1,
  offset: 1000,
  rotate: '-40deg'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1,
  offset: 1000,
  rotate: '30deg'
}, {
  targets: '#head-side',
  duration: 1,
  offset: 1000,
  rotate: '-30deg'
}, {
  targets: '#app > .container-me',
  duration: 500,
  offset: 2000,
  left: utils.calcLeftSpacePercentageMe(),
  begin: () => {
    jQuery('#left-hand-trick').css({'display': 'block'});
  }
}];

exports.scenes.dance = [{
  targets: '#app > .container-me',
  duration: 1000,
  offset: 3000,
  left: '16%',
  begin: () => {
    jQuery('#left-hand-trick').css({'display': 'none'});
    // jQuery('#left-hand-trick, #left-foot-2, #right-foot-2').css({'display': 'none'});
    // jQuery('#right-foot, #left-foot').css({'display': 'block'});
  }
}, {
  targets: '#torso-plus-head-arms',
  duration: 1000,
  offset: 3000,
  rotate: '10deg',
  begin: () => {
    jQuery('#shirt-front, #belly-front, #crotch-front').css({'display': 'none'});
    jQuery('#shirt-side, #belly-side, #crotch-side').css({'display': 'block'});
  }
}, {
  targets: '#left-leg',
  duration: 1000,
  offset: 3000,
  rotate: '0deg'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1000,
  offset: 3000,
  rotate: '0deg'
}, {
  targets: '#head-side',
  duration: 1000,
  offset: 3000,
  rotate: '0deg',
  translateX: '-40px',
  complete: () => {
    jQuery('#head-side').insertBefore('#shirt-side');
  }
}, {
  targets: '#shirt-side',
  duration: 1,
  offset: 3000,
  translateX: '-40px'
}, {
  targets: '#neck',
  duration: 1,
  offset: 3000,
  translateX: '-40px',
  begin: () => {
    jQuery('#neck').insertBefore('#shirt-side');
  }
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 3000,
  scaleX: '-1',
  translateX: '140px',
  begin: () => {
    jQuery('#left-arm').insertBefore('#shirt-side');
  }
}, {
  targets: '#right-arm',
  duration: 1,
  offset: 3000,
  translateX: '20px',
  translateY: '10px'
}, {
  targets: '#left-leg',
  duration: 1,
  offset: 4000,
  translateX: '-70px'
}];
