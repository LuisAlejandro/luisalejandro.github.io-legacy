import jQuery from 'jquery';
import anime from 'animejs';

import objectsOutro from './outro/objects';

export default function (router) {
  jQuery(() => {
    var hasBeenPlayed = false;
    const anim = anime.timeline({
      duration: 250,
      autoplay: false,
      easing: 'easeOutQuint'
    }).add({
      targets: [
        '#home > .container-page-clients', '#home > .container-page-portfolio',
        '#home > .container-page-blog', '#home > .container-page-contact',
        '#home > .container-page-easter', '#home > .container-page-about',
        '#home > .container-page-home'
      ],
      translateY: [0, -400]
    }, 0).add({
      targets: '#home > .container-clients',
      translateY: [0, -20],
      rotate: [-10, 5]
    }, 0).add({
      targets: '#home > .container-about',
      translateX: [0, 10],
      rotate: [10, 15]
    }, 0).add({
      targets: '#home > .container-portfolio',
      translateY: [0, 20],
      translateX: [0, 20],
      rotate: [30, 40]
    }, 0).add({
      targets: '#home > .container-donations',
      translateY: [0, -20],
      translateX: [0, -20]
    }, 0).add({
      targets: '#home > .container-contact',
      translateY: [0, 15],
      rotate: [-10, -20]
    }, 0).add({
      targets: '#home > .container-easter',
      translateY: [0, 15],
      rotate: [-10, -15]
    }, 0).add({
      targets: '#home > .container-blog',
      translateY: [0, 10],
      rotate: [-10, -15]
    }, 0);

    const clickAnimation = () => {
      objectsOutro().finished.then(() => {
        router.push({ name: 'donations' });
      });
    };

    const toggleAnimation = () => {
      if (hasBeenPlayed) {
        if (anim.began) {
          anim.reverse();
        }
        if (anim.paused) {
          anim.play();
        }
      } else {
        anim.play();
        hasBeenPlayed = true;
      }
    };

    jQuery('#home > .container-donations').hover(toggleAnimation, toggleAnimation);
    jQuery('#home > .container-donations').on('click', clickAnimation);
  });
};
