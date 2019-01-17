import anime from 'animejs';

export default function () {
  const timeline = anime.timeline();
  const promise = new Promise((resolve, reject) => {
    timeline.add({
      targets: '#home > a > .container-calc',
      duration: 2500,
      rotate: [50, -10],
      translateY: [-500, 0],
      translateX: [100, 0]
    }, 2000).add({
      targets: '#home > a > .container-calendar',
      duration: 2000,
      rotate: [30, -10],
      translateY: [-400, 0],
      translateX: [-100, 0]
    }, 2000).add({
      targets: '#home > a > .container-papers',
      duration: 2500,
      rotate: [50, 10],
      translateY: [-300, 0],
      translateX: [500, 0]
    }, 2000).add({
      targets: '#home > a > .container-laptop',
      duration: 3500,
      rotate: [0, 30],
      translateY: [100, 0],
      translateX: [700, 0]
    }, 2000).add({
      targets: '#home > a > .container-smartphone',
      duration: 2500,
      rotate: [-30, -10],
      translateY: [500, 0],
      translateX: [300, 0]
    }, 2000).add({
      targets: '#home > a > .container-coffee',
      duration: 3000,
      rotate: [30, 0],
      translateY: [500, 0],
      translateX: [100, 0]
    }, 2000).add({
      targets: '#home > a > .container-pencils',
      duration: 3500,
      rotate: [-50, -10],
      translateY: [500, 0],
      translateX: [-100, 0]
    }, 2000).add({
      targets: '#home > a > .container-notes',
      duration: 1500,
      rotate: [50, -10],
      translateY: [500, 0],
      translateX: [100, 0],
      complete: () => {
        resolve();
      }
    }, 2000);
  });
  timeline.finished = promise;

  return timeline;
};
