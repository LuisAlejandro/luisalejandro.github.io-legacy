import anime from 'animejs';
import jQuery from 'jquery';
import playback from './audio';

export default function () {
  const timeline = anime.timeline().add({
    targets: 'body',
    easing: 'easeOutExpo',
    duration: 2000,
    backgroundColor: '#f8d983'
  }, 0).add({
    targets: '#easter > .container-fire',
    easing: 'easeOutExpo',
    duration: 1000,
    left: ['40%', '70%']
  }, 1000).add({
    targets: '#easter > .container-me',
    duration: 1000,
    complete: () => {
      jQuery('#easter > .container-me, #left-foot-2, #right-foot-2').css({ 'display': 'block' });
      jQuery('#left-foot, #right-foot').css({ 'display': 'none' });
      const entrance = playback.play('entrance');
      playback.volume(0.2, entrance);
      const music = playback.play('music');
      playback.volume(1, music);
    }
  }, 1000).add({
    targets: '#torso-plus-head-arms',
    duration: 1,
    rotate: '40deg'
  }, 1000).add({
    targets: '#left-arm',
    duration: 1,
    rotate: '5deg'
  }, 1000).add({
    targets: '#lower-left-arm-plus-hand',
    duration: 1,
    rotate: '60deg'
  }, 1000).add({
    targets: '#left-hand',
    duration: 1,
    rotate: '-30deg'
  }, 1000).add({
    targets: '#right-arm',
    duration: 1,
    rotate: '20deg'
  }, 1000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 1,
    rotate: '-30deg'
  }, 1000).add({
    targets: '#left-leg',
    duration: 1,
    rotate: '-40deg'
  }, 1000).add({
    targets: '#lower-left-leg-plus-foot',
    duration: 1,
    rotate: '30deg'
  }, 1000).add({
    targets: '#head-side',
    duration: 1,
    rotate: '-30deg'
  }, 1000).add({
    targets: '#easter > .container-me',
    duration: 500,
    left: ['-30%', '-15%']
  }, 2000).add({
    targets: '#easter > .container-me',
    duration: 1000,
    left: '-29%'
  }, 3000).add({
    targets: '#easter > .container-scooter',
    duration: 1000,
    left: '-25%'
  }, 3000).add({
    targets: '#torso-plus-head-arms',
    duration: 1,
    rotate: '10deg',
    begin: () => {
      jQuery('#shirt-front, #belly-front, #crotch-front').css({ 'display': 'none' });
      jQuery('#shirt-side, #belly-side, #crotch-side').css({ 'display': 'block' });
      jQuery('#easter > .container-scooter').css({ 'display': 'block' });
    }
  }, 4000).add({
    targets: '#head-side',
    duration: 1,
    rotate: '0deg',
    translateX: '-40px',
    complete: () => {
      jQuery('#neck').insertBefore('#shirt-side');
      jQuery('#head-side').insertBefore('#shirt-side');
    }
  }, 4000).add({
    targets: '#shirt-side',
    duration: 1,
    translateX: '-40px'
  }, 4000).add({
    targets: '#neck',
    duration: 1,
    translateX: '-40px'
  }, 4000).add({
    targets: '#left-leg',
    duration: 1,
    rotate: '0deg',
    translateX: '-70px'
  }, 4000).add({
    targets: '#lower-left-leg-plus-foot',
    duration: 1,
    rotate: '40deg'
  }, 4000).add({
    targets: '#left-foot-2',
    duration: 1,
    rotateZ: '-10deg'
  }, 4000).add({
    targets: '#right-leg',
    duration: 1,
    rotate: '-20deg'
  }, 4000).add({
    targets: '#lower-right-leg-plus-foot',
    duration: 1,
    rotate: '20deg'
  }, 4000).add({
    targets: '#right-foot-2',
    duration: 1,
    rotateY: '180deg',
    rotateZ: '10deg'
  }, 4000).add({
    targets: '#left-arm',
    duration: 1,
    rotateY: '180deg',
    // rotateZ: '20deg',
    translateX: '140px',
    begin: () => {
      jQuery('#left-arm').insertBefore('#shirt-side');
    }
  }, 4000).add({
    targets: '#lower-left-arm',
    duration: 1,
    fill: '#875d4b'
  }, 4000).add({
    targets: '#left-hand',
    duration: 1,
    fill: '#875d4b',
    rotateY: '180deg',
    rotateZ: '-60deg'
  }, 4000).add({
    targets: '#right-arm',
    duration: 1,
    translateX: '20px',
    translateY: '10px',
    rotate: '-20deg'
  }, 4000).add({
    targets: '#right-hand',
    duration: 1,
    rotateY: '180deg',
    rotateZ: '60deg'
  }, 4000).add({
    targets: '#easter > .container-me',
    duration: 2000,
    left: '50%',
    easing: 'easeOutSine'
  }, 4000).add({
    targets: '#easter > .container-scooter',
    duration: 2000,
    left: '54%',
    easing: 'easeOutSine',
    begin: () => {
      const scooter = playback.play('scooter');
      playback.volume(0.3, scooter);
    }
  }, 4000).add({
    targets: '#easter > .container-scooter',
    duration: 500,
    easing: 'linear',
    translateY: '300px',
    translateX: '100px',
    rotateX: '150deg',
    rotateZ: '40deg'
  }, 7000).add({
    targets: '#left-leg',
    duration: 950,
    rotate: ['-30deg', '30deg'],
    translateX: '-70px',
    translateY: '50px'
  }, 4550).add({
    targets: '#left-leg',
    duration: 1000,
    rotate: ['30deg', '0deg'],
    translateX: '-100px',
    translateY: '0px'
  }, 5500).add({
    targets: '#lower-left-leg-plus-foot',
    duration: 1000,
    rotate: '0deg'
  }, 5500).add({
    targets: '#left-leg',
    duration: 500,
    translateY: '60px',
    translateX: '-60px',
    rotate: '-30deg',
    begin: () => {
      jQuery('#easter > .container-scooter').css({ 'z-index': 5 });
    }
  }, 6500).add({
    targets: '#easter > .container-me',
    duration: 500,
    translateY: '30px'
  }, 0).add({
    targets: ['#right-leg', '#lower-right-leg-plus-foot', '#lower-left-leg-plus-foot', '#lower-right-arm-plus-hands', '#right-hand'],
    duration: 500,
    rotate: '0deg',
    translateX: '0px',
    translateY: '0px'
  }, 6500).add({
    targets: '#left-leg',
    duration: 500,
    rotate: '0deg',
    translateX: '-80px',
    translateY: '0px'
  }, 6500).add({
    targets: '#right-arm',
    duration: 2000,
    translateX: '0px',
    translateY: '0px',
    rotate: '40deg'
  }, 7000).add({
    targets: '#easter > .container-extinguisher',
    duration: 1,
    rotate: '-25deg',
    scale: 0.1
  }, 7000).add({
    targets: '#easter > .container-extinguisher',
    duration: 1998,
    scale: 1,
    translateX: '-20px',
    rotate: '-25deg',
    begin: () => {
      jQuery('#easter > .container-extinguisher').css({ 'display': 'block' });
      const extinguisher = playback.play('extinguisher');
      playback.volume(0.1, extinguisher);
    }
  }, 7002).add({
    targets: '#right-arm',
    duration: 1000,
    rotate: '60deg'
  }, 9000).add({
    targets: '#easter > .container-extinguisher',
    duration: 1000,
    translateY: '-20px',
    translateX: '-50px',
    rotate: '-20deg'
  }, 9000).add({
    targets: '#right-arm',
    duration: 2000,
    translateY: '20px',
    rotate: '-10deg'
  }, 10000).add({
    targets: '#left-arm',
    duration: 1,
    translateX: '-140px',
    translateY: '20px',
    rotateY: '180deg',
    rotateZ: '40deg'
  }, 10000).add({
    targets: '#lower-left-arm-plus-hand',
    duration: 2000,
    rotate: '110deg'
  }, 10000).add({
    targets: '#lower-left-arm',
    duration: 2000,
    fill: 'rgb(167, 118, 96)'
  }, 10000).add({
    targets: '#left-hand',
    duration: 2000,
    fill: 'rgb(167, 118, 96)'
  }, 10000).add({
    targets: '#easter > .container-extinguisher',
    duration: 2000,
    translateX: '130px',
    translateY: '-10px',
    rotate: '30deg',
    begin: () => {
      jQuery('#easter > .container-extinguisher').css({ 'z-index': 4 });
    }
  }, 10000).add({
    targets: '#cloud-small',
    duration: 6000,
    translateX: '50px',
    translateY: '20px',
    opacity: [1, 0],
    easing: 'linear',
    begin: () => {
      jQuery('#cloud-small').css({ 'display': 'block' });
      const fire1 = playback.play('fire1');
      playback.volume(0.7, fire1);
    }
  }, 12000).add({
    targets: '#easter > .container-water-drop',
    duration: 3000,
    translateY: '20px',
    begin: () => {
      jQuery('#easter > .container-water-drop').css({ 'display': 'block' });
    }
  }, 13000).add({
    targets: '#easter > .container-water-drop',
    duration: 500,
    opacity: [1, 0],
    complete: () => {
      jQuery('#easter > .container-water-drop').css({ 'display': 'none' });
    }
  }, 16000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-10deg'
  }, 18600).add({
    targets: '#left-arm',
    duration: 1,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '40px'
  }, 18600).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '110px',
    translateY: '0px',
    rotate: '30deg'
  }, 18600).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-30deg'
  }, 18800).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '0px'
  }, 18800).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '130px',
    translateY: '-20px',
    rotate: '30deg'
  }, 18800).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-10deg'
  }, 19000).add({
    targets: '#left-arm',
    duration: 1,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '40px'
  }, 19000).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '110px',
    translateY: '0px',
    rotate: '30deg'
  }, 19000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-30deg'
  }, 19200).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '0px'
  }, 19200).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '130px',
    translateY: '-20px',
    rotate: '30deg'
  }, 19200).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-10deg'
  }, 19400).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '40px'
  }, 19400).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '110px',
    translateY: '0px',
    rotate: '30deg'
  }, 19400).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-30deg'
  }, 19800).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '0px'
  }, 19800).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '130px',
    translateY: '-20px',
    rotate: '30deg'
  }, 19800).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-10deg'
  }, 20000).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '40px'
  }, 20000).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '110px',
    translateY: '0px',
    rotate: '30deg'
  }, 20000).add({
    targets: '#lower-right-arm-plus-hand',
    duration: 200,
    easing: 'linear',
    rotate: '-30deg'
  }, 20200).add({
    targets: '#left-arm',
    duration: 200,
    easing: 'linear',
    rotateY: '+=0',
    translateX: '140px',
    translateY: '0px'
  }, 20200).add({
    targets: '#easter > .container-extinguisher',
    duration: 200,
    easing: 'linear',
    translateX: '120px',
    translateY: '-10px',
    rotate: '30deg'
  }, 20200).add({
    targets: '#left-arm',
    duration: 600,
    easing: 'linear',
    rotateY: '+=0',
    rotateZ: '+=30',
    translateX: '140px',
    translateY: '-=40px'
  }, 20400).add({
    targets: '#easter > .container-me',
    duration: 3000,
    translateX: '-=1000px',
    translateY: '-=1000px',
    complete: () => {
      const crash = playback.play('crash');
      playback.volume(0.1, crash);
    }
  }, 21000).add({
    targets: '#easter > .container-extinguisher',
    duration: 3000,
    translateX: '-=1000px',
    translateY: '-=1000px'
  }, 21000).add({
    targets: '#easter > .container-stream',
    duration: 3000,
    opacity: [1, 0],
    scale: 5,
    rotate: ['40deg', '40deg'],
    translateX: '-=200px',
    begin: () => {
      jQuery('#easter > .container-stream').css({ 'display': 'block' });
      const fire2 = playback.play('fire2');
      playback.volume(1, fire2);
    }
  }, 21000).add({
    targets: '#easter > .container-fire',
    duration: 1000,
    scale: 0.1,
    easing: 'linear',
    complete: () => {
      jQuery('#easter > .container-fire').css({ 'display': 'none' });
    }
  }, 21000).add({
    targets: '#easter > .container-cloud-1',
    duration: 3000,
    translateX: '100px',
    easing: 'easeOutQuint',
    opacity: [0.65, 0],
    begin: () => {
      jQuery('#easter > .container-cloud-1').css({ 'display': 'block' });
    }
  }, 21000).add({
    targets: '#easter > .container-cloud-2',
    duration: 3000,
    translateX: '-100px',
    easing: 'easeOutQuint',
    opacity: [0.65, 0],
    begin: () => {
      jQuery('#easter > .container-cloud-2').css({ 'display': 'block' });
    }
  }, 21000).add({
    targets: '#easter > .container-scooter',
    duration: 1000,
    easing: 'linear',
    translateY: '700px',
    translateX: '100px',
    rotateX: '150deg',
    rotateZ: '40deg',
    complete: () => {
      jQuery('#easter > .container-scooter').css({ 'display': 'none' });
    }
  }, 21000);

  return timeline;
};
