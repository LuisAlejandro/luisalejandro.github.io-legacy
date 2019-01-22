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
          '#home > .container-page-clients', '#home > .container-page-portfolio',
          '#home > .container-page-donations', '#home > .container-page-blog',
          '#home > .container-page-easter', '#home > .container-page-about',
          '#home > .container-page-home'
        ],
        translateY: -400
      }, 0).add({
        targets: '#home > .container-clients',
        translateX: -20
      }, 0).add({
        targets: '#home > .container-about',
        translateX: 10,
        rotate: 15
      }, 0).add({
        targets: '#home > .container-portfolio',
        translateY: 20,
        translateX: 20
      }, 0).add({
        targets: '#home > .container-donations',
        translateY: -20,
        translateX: 40
      }, 0).add({
        targets: '#home > .container-contact',
        translateY: -40,
        rotate: -15,
        zIndex: 9999
      }, 0).add({
        targets: '#home > .container-easter',
        translateY: 5,
        translateX: -40
      }, 0).add({
        targets: '#home > .container-blog',
        translateY: 5
      }, 0);
    };

    const mouseleaveAnimation = () => {
      anime.timeline({
        duration: 250,
        easing: 'linear'
      }).add({
        targets: [
          '#home > .container-page-clients', '#home > .container-page-portfolio',
          '#home > .container-page-donations', '#home > .container-page-blog',
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

    jQuery('#home > .container-contact').on({
      mouseenter: mouseenterAnimation,
      mouseleave: mouseleaveAnimation
    }).children().on({
      mouseenter: (e) => { e.stopPropagation(); },
      mouseleave: (e) => { e.stopPropagation(); }
    });
  });
};
