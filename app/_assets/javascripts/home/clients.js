import jQuery from 'jquery';
import anime from 'animejs';

export default function (router) {
  jQuery(() => {
    let hasBeenPlayed = false;
    const anim = anime.timeline({
      duration: 250,
      autoplay: false,
      easing: 'easeOutQuint'
    }).add({
      targets: [
        '#home > .container-page-blog', '#home > .container-page-portfolio',
        '#home > .container-page-donations', '#home > .container-page-contact',
        '#home > .container-page-easter', '#home > .container-page-about',
        '#home > .container-page-home'
      ],
      translateY: [0, -400]
    }, 0).add({
      targets: '#home > .container-clients',
      translateY: [0, 20],
      translateX: [0, -20],
      rotate: [-10, -15]
    }, 0).add({
      targets: '#home > .container-about',
      translateY: [0, -40],
      translateX: [0, 20],
      rotate: [10, 15]
    }, 0).add({
      targets: '#home > .container-portfolio',
      translateY: [0, 20],
      translateX: [0, 20]
    }, 0).add({
      targets: '#home > .container-donations',
      translateY: [0, 30],
      translateX: [0, -10],
      rotate: [0, -5]
    }, 0).add({
      targets: '#home > .container-contact',
      translateY: [0, 20],
      translateX: [0, -10],
      rotate: [-10, -15]
    }, 0).add({
      targets: '#home > .container-easter',
      translateY: [0, 15],
      translateX: [0, -15]
    }, 0).add({
      targets: '#home > .container-blog',
      translateY: [0, 15],
      translateX: [0, -15]
    }, 0);

    const clickAnimation = () => {
      objectsOutro().finished.then(() => {
        router.push({ name: 'clients' });
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

    jQuery('#home > .container-clients').hover(toggleAnimation, toggleAnimation);
    jQuery('#home > .container-clients').on('click', clickAnimation);
  });
};
