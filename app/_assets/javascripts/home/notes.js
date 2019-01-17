import jQuery from 'jquery';
import anime from 'animejs';

export default function () {
  jQuery(() => {
    const mouseenterAnimation = () => {
      anime.timeline({
        duration: 250,
        easing: 'linear'
      }).add({
        targets: '#home > a > .container-calc',
        translateX: -20
      }, 0).add({
        targets: '#home > a > .container-calendar',
        translateY: 20,
        translateX: -20
      }, 0).add({
        targets: '#home > a > .container-papers',
        translateX: 10,
        rotate: 15
      }, 0).add({
        targets: '#home > a > .container-laptop',
        translateY: 20,
        translateX: 20
      }, 0).add({
        targets: '#home > a > .container-coffee',
        translateY: 5
      }, 0).add({
        targets: '#home > a > .container-smartphone',
        translateY: 5,
        translateX: 20
      }, 0).add({
        targets: '#home > a > .container-pencils',
        translateX: 20
      }, 0).add({
        targets: '#home > a > .container-notes',
        translateY: -60,
        translateX: -20,
        rotate: 5,
        zIndex: 9999
      }, 0);
    };

    const mouseleaveAnimation = () => {
      anime.timeline({
        duration: 250,
        easing: 'linear'
      }).add({
        targets: '#home > a > .container-calc',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-calendar',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-papers',
        translateY: 0,
        translateX: 0,
        rotate: 10
      }, 0).add({
        targets: '#home > a > .container-laptop',
        translateY: 0,
        translateX: 0,
        rotate: 30,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-coffee',
        translateY: 0,
        translateX: 0,
        rotate: 0,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-smartphone',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-pencils',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 2
      }, 0).add({
        targets: '#home > a > .container-notes',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 2
      }, 0);
    };

    jQuery('#home > a > .container-notes').on({
      mouseenter: mouseenterAnimation,
      mouseleave: mouseleaveAnimation
    }).children().on({
      mouseenter: (e) => { e.stopPropagation(); },
      mouseleave: (e) => { e.stopPropagation(); }
    });
  });
};
