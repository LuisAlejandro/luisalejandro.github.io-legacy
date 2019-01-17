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
        translateX: -40,
        rotate: 20
      }, 0).add({
        targets: '#home > a > .container-calendar',
        translateY: 30,
        translateX: -30,
        zIndex: 9999
      }, 0).add({
        targets: '#home > a > .container-papers',
        translateX: 40,
        rotate: 15
      }, 0).add({
        targets: '#home > a > .container-laptop',
        translateY: 40,
        translateX: 40,
        rotate: 20
      }, 0).add({
        targets: '#home > a > .container-coffee',
        translateY: 15
      }, 0).add({
        targets: '#home > a > .container-smartphone',
        translateY: 15,
        rotate: -15
      }, 0).add({
        targets: '#home > a > .container-pencils',
        translateY: 15
      }, 0).add({
        targets: '#home > a > .container-notes',
        translateY: 15
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

    jQuery('#home > a > .container-calendar').on({
      mouseenter: mouseenterAnimation,
      mouseleave: mouseleaveAnimation
    }).children().on({
      mouseenter: (e) => { e.stopPropagation(); },
      mouseleave: (e) => { e.stopPropagation(); }
    });
  });
};
