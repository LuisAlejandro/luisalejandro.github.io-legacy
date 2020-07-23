import anime from 'animejs';

export default function () {
  const timeline = anime.timeline({
    easing: 'easeOutElastic',
    autoplay: false,
  }).add({
    targets: '#home > .container-page-home',
    duration: 2500,
    rotate: [-40, -20],
    translateY: [-1500, 0],
    translateX: [-1000, 0]
  }, 0).add({
    targets: '#home > .container-page-portfolio',
    duration: 2500,
    rotate: [40, -20],
    translateY: [-1500, 0],
    translateX: [-500, 0]
  }, 0).add({
    targets: '#home > .container-page-about',
    duration: 2600,
    rotate: [0, -22],
    translateY: [-1500, 0],
    translateX: [-200, 0]
  }, 0).add({
    targets: '#home > .container-page-blog',
    duration: 2400,
    rotate: [-40, -20],
    translateY: [-1500, 0],
    translateX: [500, 0]
  }, 0).add({
    targets: '#home > .container-page-clients',
    duration: 2700,
    rotate: [50, -18],
    translateY: [-1500, 0],
    translateX: [1000, 0]
  }, 0).add({
    targets: '#home > .container-page-contact',
    duration: 2300,
    rotate: [-70, -20],
    translateY: [-2000, 0],
    translateX: [700, 0]
  }, 0).add({
    targets: '#home > .container-page-donations ',
    duration: 2400,
    rotate: [0, -16],
    translateY: [-1700, 0],
    translateX: [1500, 0]
  }, 0).add({
    targets: '#home > .container-page-easter',
    duration: 3000,
    rotate: [-60, -20],
    translateY: [-1500, 0],
    translateX: [1000, 0]
  }, 0).add({
    targets: '#home > .container-clients',
    duration: 2500,
    rotate: [50, -10],
    translateY: [-600, 0],
    translateX: [100, 0]
  }, 0).add({
    targets: '#home > .container-about',
    duration: 2500,
    rotate: [50, 10],
    translateY: [-300, 0],
    translateX: [500, 0]
  }, 0).add({
    targets: '#home > .container-portfolio',
    duration: 3500,
    rotate: [0, 30],
    translateY: [100, 0],
    translateX: [700, 0]
  }, 0).add({
    targets: '#home > .container-contact',
    duration: 2500,
    rotate: [-30, -10],
    translateY: [500, 0],
    translateX: [300, 0]
  }, 0).add({
    targets: '#home > .container-donations',
    duration: 3000,
    rotate: [30, 0],
    translateY: [500, 0],
    translateX: [100, 0]
  }, 0).add({
    targets: '#home > .container-easter',
    duration: 3500,
    rotate: [-50, -10],
    translateY: [500, 0],
    translateX: [-100, 0]
  }, 0).add({
    targets: '#home > .container-blog',
    duration: 1500,
    rotate: [50, -10],
    translateY: [500, 0],
    translateX: [100, 0]
  }, 0);

  return timeline;
};
