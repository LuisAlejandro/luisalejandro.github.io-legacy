import jQuery from 'jquery';
import { Howl } from 'howler';

var exports = module.exports = {};

exports.scenes = {};

var playback = new Howl({
  src: audiosources,
  sprite: {
    crash: [
      0,
      1005.1927437641723
    ],
    drop: [
      3000,
      169.09297052154182
    ],
    entrance: [
      5000,
      555.0113378684811
    ],
    extinguisher: [
      7000,
      250.1587301587298
    ],
    fire1: [
      9000,
      523.628117913832
    ],
    fire2: [
      11000,
      1686.0770975056685
    ],
    music: [
      14000,
      30119.183673469386
    ],
    scooter: [
      46000,
      483.106575963717
    ]
  }
});

exports.playback = playback;

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
  left: ['40%', '70%']
}];

exports.scenes.entrance = [{
  targets: '#app > .container-me',
  duration: 1000,
  offset: 1000,
  complete: () => {
    jQuery('#app > .container-me, #left-foot-2, #right-foot-2').css({ 'display': 'block' });
    jQuery('#left-foot, #right-foot').css({ 'display': 'none' });
    const entrance = playback.play('entrance');
    playback.volume(0.2, entrance);
    const music = playback.play('music');
    playback.volume(1, music);
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
  // left: utils.calcLeftSpacePercentageMe(),
  left: ['-30%', '-15%']
}, {
  targets: '#app > .container-me',
  duration: 1000,
  offset: 3000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: '-29%'
}, {
  targets: '#app > .container-scooter',
  duration: 1000,
  offset: 3000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: '-25%'
}];

exports.scenes.scooter = [{
  targets: '#torso-plus-head-arms',
  duration: 1,
  offset: 4000,
  rotate: '10deg',
  begin: () => {
    jQuery('#shirt-front, #belly-front, #crotch-front').css({ 'display': 'none' });
    jQuery('#shirt-side, #belly-side, #crotch-side').css({ 'display': 'block' });
    jQuery('#app > .container-scooter').css({ 'display': 'block' });
  }
}, {
  targets: '#head-side',
  duration: 1,
  offset: 4000,
  rotate: '0deg',
  translateX: '-40px',
  complete: () => {
    jQuery('#neck').insertBefore('#shirt-side');
    jQuery('#head-side').insertBefore('#shirt-side');
  }
}, {
  targets: '#shirt-side',
  duration: 1,
  offset: 4000,
  translateX: '-40px'
}, {
  targets: '#neck',
  duration: 1,
  offset: 4000,
  translateX: '-40px'
}, {
  targets: '#left-leg',
  duration: 1,
  offset: 4000,
  rotate: '0deg',
  translateX: '-70px'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1,
  offset: 4000,
  rotate: '40deg'
}, {
  targets: '#left-foot-2',
  duration: 1,
  offset: 4000,
  rotateZ: '-10deg'
}, {
  targets: '#right-leg',
  duration: 1,
  offset: 4000,
  rotate: '-20deg'
}, {
  targets: '#lower-right-leg-plus-foot',
  duration: 1,
  offset: 4000,
  rotate: '20deg'
}, {
  targets: '#right-foot-2',
  duration: 1,
  offset: 4000,
  rotateY: '180deg',
  rotateZ: '10deg'
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 4000,
  rotateY: '180deg',
  // rotateZ: '20deg',
  translateX: '140px',
  begin: () => {
    jQuery('#left-arm').insertBefore('#shirt-side');
  }
}, {
  targets: '#lower-left-arm',
  duration: 1,
  offset: 4000,
  fill: '#875d4b'
}, {
  targets: '#left-hand',
  duration: 1,
  offset: 4000,
  fill: '#875d4b',
  rotateY: '180deg',
  rotateZ: '-60deg'
}, {
  targets: '#right-arm',
  duration: 1,
  offset: 4000,
  translateX: '20px',
  translateY: '10px',
  rotate: '-20deg'
}, {
  targets: '#right-hand',
  duration: 1,
  offset: 4000,
  rotateY: '180deg',
  rotateZ: '60deg'
}, {
  targets: '#app > .container-me',
  duration: 2000,
  offset: 4000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: '50%',
  easing: 'easeOutSine'
}, {
  targets: '#app > .container-scooter',
  duration: 2000,
  offset: 4000,
  // left: utils.calcLeftSpacePercentageMe(),
  left: '54%',
  easing: 'easeOutSine',
  begin: () => {
    const scooter = playback.play('scooter');
    playback.volume(0.3, scooter);
  }
}, {
  targets: '#app > .container-scooter',
  duration: 500,
  offset: 7000,
  easing: 'linear',
  translateY: '300px',
  translateX: '100px',
  rotateX: '150deg',
  rotateZ: '40deg'
}, {
  targets: '#left-leg',
  duration: 950,
  offset: 4550,
  rotate: ['-30deg', '30deg'],
  translateX: '-70px',
  translateY: '50px'
}, {
  targets: '#left-leg',
  duration: 1000,
  offset: 5500,
  rotate: ['30deg', '0deg'],
  translateX: '-100px',
  translateY: '0px'
}, {
  targets: '#lower-left-leg-plus-foot',
  duration: 1000,
  offset: 5500,
  rotate: '0deg'
}, {
  targets: '#left-leg',
  duration: 500,
  offset: 6500,
  translateY: '60px',
  translateX: '-60px',
  rotate: '-30deg',
  begin: () => {
    jQuery('#app > .container-scooter').css({ 'z-index': 5 });
  }
}, {
  targets: '#app > .container-me',
  duration: 500,
  offset: 6500,
  translateY: '30px'
}, {
  targets: ['#right-leg', '#lower-right-leg-plus-foot', '#lower-left-leg-plus-foot', '#lower-right-arm-plus-hands', '#right-hand'],
  duration: 500,
  offset: 6500,
  rotate: '0deg',
  translateX: '0px',
  translateY: '0px'
}, {
  targets: '#left-leg',
  duration: 500,
  offset: 6500,
  rotate: '0deg',
  translateX: '-80px',
  translateY: '0px'
}];

exports.scenes.extinguish = [{
  targets: '#right-arm',
  duration: 2000,
  offset: 7000,
  translateX: '0px',
  translateY: '0px',
  rotate: '40deg'
}, {
  targets: '#app > .container-extinguisher',
  duration: 1,
  offset: 7000,
  rotate: '-25deg',
  scale: 0.1
}, {
  targets: '#app > .container-extinguisher',
  duration: 1998,
  offset: 7002,
  scale: 1,
  translateX: '-20px',
  rotate: '-25deg',
  begin: () => {
    jQuery('#app > .container-extinguisher').css({ 'display': 'block' });
    const extinguisher = playback.play('extinguisher');
    playback.volume(0.1, extinguisher);
  }
}, {
  targets: '#right-arm',
  duration: 1000,
  offset: 9000,
  rotate: '60deg'
}, {
  targets: '#app > .container-extinguisher',
  duration: 1000,
  offset: 9000,
  translateY: '-20px',
  translateX: '-50px',
  rotate: '-20deg'
}, {
  targets: '#right-arm',
  duration: 2000,
  offset: 10000,
  translateY: '20px',
  rotate: '-10deg'
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 10000,
  translateX: '-140px',
  translateY: '20px',
  rotateY: '180deg',
  rotateZ: '40deg'
}, {
  targets: '#lower-left-arm-plus-hand',
  duration: 2000,
  offset: 10000,
  rotate: '110deg'
}, {
  targets: '#lower-left-arm',
  duration: 2000,
  offset: 10000,
  fill: 'rgb(167, 118, 96)'
}, {
  targets: '#left-hand',
  duration: 2000,
  offset: 10000,
  fill: 'rgb(167, 118, 96)'
}, {
  targets: '#app > .container-extinguisher',
  duration: 2000,
  offset: 10000,
  translateX: '130px',
  translateY: '-10px',
  rotate: '30deg',
  begin: () => {
    jQuery('#app > .container-extinguisher').css({ 'z-index': 4 });
  }
}, {
  targets: '#cloud-small',
  duration: 6000,
  offset: 12000,
  translateX: '50px',
  translateY: '20px',
  opacity: [1, 0],
  easing: 'linear',
  begin: () => {
    jQuery('#cloud-small').css({ 'display': 'block' });
    const fire1 = playback.play('fire1');
    playback.volume(0.7, fire1);
  }
}, {
  targets: '#app > .container-water-drop',
  duration: 3000,
  offset: 13000,
  translateY: '20px',
  begin: () => {
    jQuery('#app > .container-water-drop').css({ 'display': 'block' });
  }
}, {
  targets: '#app > .container-water-drop',
  duration: 500,
  offset: 16000,
  opacity: [1, 0],
  complete: () => {
    jQuery('#app > .container-water-drop').css({ 'display': 'none' });
  }
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 18600,
  easing: 'linear',
  rotate: '-10deg'
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 18600,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '40px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 18600,
  easing: 'linear',
  translateX: '110px',
  translateY: '0px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 18800,
  easing: 'linear',
  rotate: '-30deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 18800,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '0px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 18800,
  easing: 'linear',
  translateX: '130px',
  translateY: '-20px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 19000,
  easing: 'linear',
  rotate: '-10deg'
}, {
  targets: '#left-arm',
  duration: 1,
  offset: 19000,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '40px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 19000,
  easing: 'linear',
  translateX: '110px',
  translateY: '0px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 19200,
  easing: 'linear',
  rotate: '-30deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 19200,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '0px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 19200,
  easing: 'linear',
  translateX: '130px',
  translateY: '-20px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 19400,
  easing: 'linear',
  rotate: '-10deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 19400,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '40px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 19400,
  easing: 'linear',
  translateX: '110px',
  translateY: '0px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 19800,
  easing: 'linear',
  rotate: '-30deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 19800,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '0px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 19800,
  easing: 'linear',
  translateX: '130px',
  translateY: '-20px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 20000,
  easing: 'linear',
  rotate: '-10deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 20000,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '40px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 20000,
  easing: 'linear',
  translateX: '110px',
  translateY: '0px',
  rotate: '30deg'
}, {
  targets: '#lower-right-arm-plus-hand',
  duration: 200,
  offset: 20200,
  easing: 'linear',
  rotate: '-30deg'
}, {
  targets: '#left-arm',
  duration: 200,
  offset: 20200,
  easing: 'linear',
  rotateY: '+=0',
  translateX: '140px',
  translateY: '0px'
}, {
  targets: '#app > .container-extinguisher',
  duration: 200,
  offset: 20200,
  easing: 'linear',
  translateX: '120px',
  translateY: '-10px',
  rotate: '30deg'
}, {
  targets: '#left-arm',
  duration: 600,
  offset: 20400,
  easing: 'linear',
  rotateY: '+=0',
  rotateZ: '+=30',
  translateX: '140px',
  translateY: '-=40px'
}];

exports.scenes.outtake = [{
  targets: '#app > .container-me',
  duration: 3000,
  offset: 21000,
  translateX: '-=1000px',
  translateY: '-=1000px',
  complete: () => {
    const crash = playback.play('crash');
    playback.volume(0.1, crash);
  }
}, {
  targets: '#app > .container-extinguisher',
  duration: 3000,
  offset: 21000,
  translateX: '-=1000px',
  translateY: '-=1000px'
}, {
  targets: '#app > .container-stream',
  duration: 3000,
  offset: 21000,
  opacity: [1, 0],
  scale: 5,
  rotate: ['40deg', '40deg'],
  translateX: '-=200px',
  begin: () => {
    jQuery('#app > .container-stream').css({ 'display': 'block' });
    const fire2 = playback.play('fire2');
    playback.volume(1, fire2);
  }
}, {
  targets: '#app > .container-fire-preloader',
  duration: 1000,
  offset: 21000,
  scale: 0.1,
  easing: 'linear',
  complete: () => {
    jQuery('#app > .container-fire-preloader').css({ 'display': 'none' });
  }
}, {
  targets: '#app > .container-cloud-1',
  duration: 3000,
  offset: 21000,
  translateX: '100px',
  easing: 'easeOutQuint',
  opacity: [0.65, 0],
  begin: () => {
    jQuery('#app > .container-cloud-1').css({ 'display': 'block' });
  }
}, {
  targets: '#app > .container-cloud-2',
  duration: 3000,
  offset: 21000,
  translateX: '-100px',
  easing: 'easeOutQuint',
  opacity: [0.65, 0],
  begin: () => {
    jQuery('#app > .container-cloud-2').css({ 'display': 'block' });
  }
}, {
  targets: '#app > .container-scooter',
  duration: 1000,
  offset: 21000,
  easing: 'linear',
  translateY: '700px',
  translateX: '100px',
  rotateX: '150deg',
  rotateZ: '40deg',
  complete: () => {
    jQuery('#app > .container-scooter').css({ 'display': 'none' });
  }
}];

exports.scenes.glasses = [{
  targets: '#app > .container-glasses',
  duration: 1000,
  offset: 25000,
  translateY: '+=700px',
  rotate: ['0deg', '360deg'],
  easing: 'easeInOutQuint',
  begin: () => {
    jQuery('#app > .container-glasses').css({ 'display': 'block' });
  }
}, {
  targets: '#app > .container-glasses',
  duration: 6000,
  offset: 27000,
  translateY: '-=900px',
  translateX: '-=200px',
  rotate: '+=30deg',
  scale: 100,
  easing: 'easeOutQuint'
}];
