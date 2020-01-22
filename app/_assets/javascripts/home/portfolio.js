import jQuery from 'jquery';
import anime from 'animejs';

import objectsOutro from './outro/objects';

export default function (router) {
  jQuery(() => {
    const animation = anime.timeline({
      duration: 250,
      autoplay: false,
      easing: 'linear'
    }).add({
      targets: [
        '#home > .container-page-clients', '#home > .container-page-blog',
        '#home > .container-page-donations', '#home > .container-page-contact',
        '#home > .container-page-easter', '#home > .container-page-about',
        '#home > .container-page-home'
      ],
      translateY: [0, -400]
    }, 0).add({
      targets: '#home > .container-clients',
      translateY: [0, -60],
      translateX: [0, -20],
      rotate: [-10, 0]
    }, 0).add({
      targets: '#home > .container-about',
      translateY: [0, -40],
      translateX: [0, 20],
      rotate: [10, 25]
    }, 0).add({
      targets: '#home > .container-portfolio',
      translateY: [0, -20],
      translateX: [0, -40],
      rotate: [30, 30]
    }, 0).add({
      targets: '#home > .container-donations',
      translateY: [0, 20],
      translateX: [0, -200],
      rotate: [0, -30]
    }, 0).add({
      targets: '#home > .container-contact',
      translateY: [0, 5],
      translateX: [0, -40],
      rotate: [-10, -65]
    }, 0).add({
      targets: '#home > .container-easter',
      translateY: [0, 15],
      translateX: [0, -40],
      rotate: [-10, -25]
    }, 0).add({
      targets: '#home > .container-blog',
      translateY: [0, 15],
      translateX: [0, -15],
      rotate: [-10, -10]
    }, 0);

    const mouseenterAnimation = () => {
      animation.direction = 'normal';
      animation.restart();
    };

    const mouseleaveAnimation = () => {
      animation.direction = 'reverse';
      animation.restart();
    };

    const clickAnimation = () => {
      objectsOutro().finished.then(() => {
        router.push({ name: 'portfolio' });
      });
    };

    jQuery('#home > .container-portfolio').on({
      mouseenter: mouseenterAnimation,
      mouseleave: mouseleaveAnimation
    });

    jQuery('#home > .container-portfolio').on('click', clickAnimation);
  });
};
