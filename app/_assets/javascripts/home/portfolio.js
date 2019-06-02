import jQuery from 'jquery';
import anime from 'animejs';

export default function () {
  jQuery(() => {
    const mouseenterAnimation = () => {
      anime.timeline({
        duration: 250,
        easing: 'linear'
      }).add({
        targets: [
          '#home > .container-page-clients', '#home > .container-page-blog',
          '#home > .container-page-donations', '#home > .container-page-contact',
          '#home > .container-page-easter', '#home > .container-page-about',
          '#home > .container-page-home'
        ],
        translateY: -400
      }, 0).add({
        targets: '#home > .container-clients',
        translateY: -60,
        translateX: -20,
        rotate: 0
      }, 0).add({
        targets: '#home > .container-about',
        translateY: -40,
        translateX: 20,
        rotate: 25
      }, 0).add({
        targets: '#home > .container-portfolio',
        translateY: -20,
        translateX: -40,
        zIndex: 9999
      }, 0).add({
        targets: '#home > .container-donations',
        translateY: 20,
        translateX: -200,
        rotate: -30
      }, 0).add({
        targets: '#home > .container-contact',
        translateY: 5,
        translateX: -40,
        rotate: -65
      }, 0).add({
        targets: '#home > .container-easter',
        translateY: 15,
        translateX: -40,
        rotate: -25
      }, 0).add({
        targets: '#home > .container-blog',
        translateY: 15,
        translateX: -15
      }, 0);
    };

    const mouseleaveAnimation = () => {
      anime.timeline({
        duration: 250,
        easing: 'linear'
      }).add({
        targets: [
          '#home > .container-page-clients', '#home > .container-page-blog',
          '#home > .container-page-donations', '#home > .container-page-contact',
          '#home > .container-page-easter', '#home > .container-page-about',
          '#home > .container-page-home'
        ],
        translateY: 0
      }, 0).add({
        targets: '#home > .container-clients',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-about',
        translateY: 0,
        translateX: 0,
        rotate: 10,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-portfolio',
        translateY: 0,
        translateX: 0,
        rotate: 30,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-donations',
        translateY: 0,
        translateX: 0,
        rotate: 0,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-contact',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-easter',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 20
      }, 0).add({
        targets: '#home > .container-blog',
        translateY: 0,
        translateX: 0,
        rotate: -10,
        zIndex: 20
      }, 0);
    };

    jQuery('#home > .container-portfolio').on({
      mouseenter: mouseenterAnimation,
      mouseleave: mouseleaveAnimation
    }).children().on({
      mouseenter: (e) => { e.stopPropagation(); },
      mouseleave: (e) => { e.stopPropagation(); }
    });
  });
};