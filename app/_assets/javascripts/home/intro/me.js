import jQuery from 'jquery';
import anime from 'animejs';

export default function () {
  const timeline = anime.timeline();
  timeline.add({
    targets: '#torso-plus-head-arms',
    duration: 1,
    rotate: '40deg'
  }, 0).add({
    targets: '#left-arm',
    duration: 1,
    rotate: '5deg'
  }, 0).add({
    targets: '#lower-left-arm-plus-hand',
    duration: 1,
    rotate: '60deg'
  }, 0).add({
    targets: '#left-hand',
    duration: 1,
    rotate: '-30deg'
  }, 0).add({
    targets: '#right-arm',
    duration: 1,
    rotate: '20deg'
  }, 0).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 1,
    rotate: '-30deg'
  }, 0).add({
    targets: '#left-leg',
    duration: 1,
    rotate: '-40deg'
  }, 0).add({
    targets: '#lower-left-leg-plus-foot',
    duration: 1,
    rotate: '30deg'
  }, 0).add({
    targets: '#head-side',
    duration: 1,
    rotate: '-30deg'
  }, 0).add({
    targets: '#home > .container-me',
    duration: 1000,
    // left: utils.calcLeftSpacePercentageMe(),
    left: ['-30%', '-15%'],
    easing: 'easeInQuint',
    begin: () => {
      jQuery('#app > .container-me, #left-foot-2, #right-foot-2').css({ display: 'block' });
      jQuery('#left-foot, #right-foot').css({ display: 'none' });
    }
  }, 1).add({
    targets: '#head-side',
    duration: 2000,
    translateY: [{
      duration: 500,
      value: 10
    }, {
      duration: 500,
      value: 0
    }, {
      duration: 500,
      value: 10
    }, {
      duration: 500,
      value: 0
    }],
    translateX: [{
      duration: 500,
      value: 10
    }, {
      duration: 500,
      value: 0
    }, {
      duration: 500,
      value: 10
    }, {
      duration: 500,
      value: 0
    }],
    rotate: '-30deg',
    easing: 'linear'
  }, 4000).add({
    targets: '#torso-plus-head-arms',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#left-arm',
    duration: 1000,
    rotate: '5deg'
  }, 2000).add({
    targets: '#lower-left-arm-plus-hand',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#left-hand',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#right-arm',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#left-leg',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#lower-left-leg-plus-foot',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#head-side',
    duration: 1000,
    rotate: '0deg',
    easing: 'easeInOutQuint'
  }, 2000).add({
    targets: '#home > .container-me',
    duration: 1000,
    // left: utils.calcLeftSpacePercentageMe(),
    left: ['-15%', '-5%'],
    easing: 'easeInOutQuint',
    complete: () => {
      jQuery('#left-foot,#right-foot').css({ display: 'block' });
      jQuery('#left-foot-2,#right-foot-2').css({ display: 'none' });
    }
  }, 2000).add({
    targets: '#home > .container-clients',
    duration: 2500,
    rotate: [50, -10],
    translateY: [-500, 0],
    translateX: [100, 0]
  }, 2000).add({
    targets: '#home > .container-calendar',
    duration: 2000,
    rotate: [30, -10],
    translateY: [-400, 0],
    translateX: [-100, 0]
  }, 2000).add({
    targets: '#home > .container-about',
    duration: 2500,
    rotate: [50, 10],
    translateY: [-300, 0],
    translateX: [500, 0]
  }, 2000).add({
    targets: '#home > .container-portfolio',
    duration: 3500,
    rotate: [0, 30],
    translateY: [100, 0],
    translateX: [700, 0]
  }, 2000).add({
    targets: '#home > .container-contact',
    duration: 2500,
    rotate: [-30, -10],
    translateY: [500, 0],
    translateX: [300, 0]
  }, 2000).add({
    targets: '#home > .container-donations',
    duration: 3000,
    rotate: [30, 0],
    translateY: [500, 0],
    translateX: [100, 0]
  }, 2000).add({
    targets: '#home > .container-easter',
    duration: 3500,
    rotate: [-50, -10],
    translateY: [500, 0],
    translateX: [-100, 0]
  }, 2000).add({
    targets: '#home > .container-blog',
    duration: 1500,
    rotate: [50, -10],
    translateY: [500, 0],
    translateX: [100, 0]
  }, 2000).add({
    targets: '#home > .container-me',
    duration: 3000,
    rotate: '10deg',
    translateX: '20px',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#torso-plus-head-arms',
    duration: 3000,
    rotate: '-10deg',
    translateX: '10px',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#left-arm',
    duration: 3000,
    rotate: '-100deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#right-arm',
    duration: 3000,
    rotate: '30deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 3000,
    rotate: '-50deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#lower-left-arm-plus-hand',
    duration: 3000,
    rotate: '110deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#right-leg',
    duration: 3000,
    rotate: '5deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#lower-right-leg-plus-foot',
    duration: 3000,
    rotate: '-20deg',
    easing: 'easeInOutQuint'
  }, 3000).add({
    targets: '#right-foot-2',
    duration: 1500,
    complete: () => {
      jQuery('#right-foot-2').css({ display: 'block' });
      jQuery('#right-foot').css({ display: 'none' });
    }
  }, 3000).add({
    targets: '#head-side',
    duration: 1000,
    complete: () => {
      jQuery('#head-front').css({ display: 'block' });
      jQuery('#head-side').css({ display: 'none' });
    }
  }, 5000);
  return timeline;
};
