import jQuery from 'jquery';
import anime from 'animejs';

export default function () {
  const timeline = anime.timeline({
    easing: 'easeOutQuart',
    autoplay: false
  }).add({
    targets: '#home > .container-page-home',
    duration: 500,
    rotate: [-20, -40],
    translateY: [0, -1500],
    translateX: [0, -1000]
  }, 0).add({
    targets: '#home > .container-page-portfolio',
    duration: 500,
    rotate: [-20, 40],
    translateY: [0, -1500],
    translateX: [0, -500]
  }, 0).add({
    targets: '#home > .container-page-about',
    duration: 600,
    rotate: [-22, 0],
    translateY: [0, -1500],
    translateX: [0, -200]
  }, 0).add({
    targets: '#home > .container-page-blog',
    duration: 400,
    rotate: [-20, -40],
    translateY: [0, -1500],
    translateX: [0, 500]
  }, 0).add({
    targets: '#home > .container-page-clients',
    duration: 700,
    rotate: [-18, 50],
    translateY: [0, -1500],
    translateX: [0, 1000]
  }, 0).add({
    targets: '#home > .container-page-contact',
    duration: 300,
    rotate: [-20, -70],
    translateY: [0, -2000],
    translateX: [0, 700]
  }, 0).add({
    targets: '#home > .container-page-donations ',
    duration: 400,
    rotate: [-16, 0],
    translateY: [0, -1700],
    translateX: [0, 1500]
  }, 0).add({
    targets: '#home > .container-page-easter',
    duration: 900,
    rotate: [-20, -60],
    translateY: [0, -1500],
    translateX: [0, 1000]
  }, 0).add({
    targets: '#home > .container-clients',
    duration: 500,
    rotate: [-10, 50],
    translateY: [0, -600],
    translateX: [0, 100]
  }, 0).add({
    targets: '#home > .container-about',
    duration: 700,
    rotate: [10, 50],
    translateY: [0, -300],
    translateX: [0, 500]
  }, 0).add({
    targets: '#home > .container-portfolio',
    duration: 300,
    rotate: [30, 0],
    translateY: [0, 100],
    translateX: [0, 700]
  }, 0).add({
    targets: '#home > .container-contact',
    duration: 500,
    rotate: [-10, -30],
    translateY: [0, 500],
    translateX: [0, 300]
  }, 0).add({
    targets: '#home > .container-donations',
    duration: 900,
    rotate: [0, 30],
    translateY: [0, 500],
    translateX: [0, 100]
  }, 0).add({
    targets: '#home > .container-easter',
    duration: 700,
    rotate: [-10, -50],
    translateY: [0, 500],
    translateX: [0, -100]
  }, 0).add({
    targets: '#home > .container-blog',
    duration: 600,
    rotate: [-10, 50],
    translateY: [0, 500],
    translateX: [0, 100]
  }, 0);

  jQuery('#home > .container-portfolio, ' +
         '#home > .container-clients, ' +
         '#home > .container-about, ' +
         '#home > .container-contact, ' +
         '#home > .container-donations, ' +
         '#home > .container-easter, ' +
         '#home > .container-blog').each(function () {
    jQuery(this).off();
    jQuery(this).off();
  });

  jQuery('#home > .container-portfolio, ' +
         '#home > .container-clients, ' +
         '#home > .container-about, ' +
         '#home > .container-contact, ' +
         '#home > .container-donations, ' +
         '#home > .container-easter, ' +
         '#home > .container-blog').promise().done(function () {
    timeline.play();
  });

  return timeline;
};
