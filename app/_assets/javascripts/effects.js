import anime from 'animejs';
import jQuery from 'jquery';

const navbarIntro = () => {
  const navPosTop = jQuery('#top-navbar').position().top;
  const animation = anime.timeline();

  if (navPosTop !== 0) {
    animation.add({
      targets: '#top-navbar',
      easing: 'easeOutExpo',
      duration: 1000,
      top: [-90, 0],
      begin () {
        jQuery('html, body').css('overflow', 'auto');
      }
    });
  }

  return animation;
};

const navbarOutro = () => {
  const navPosTop = jQuery('#top-navbar').position().top;
  const animation = anime.timeline();

  if (navPosTop === 0) {
    animation.add({
      targets: '#top-navbar',
      easing: 'easeOutExpo',
      duration: 1000,
      top: [0, -90]
    });
  }

  return animation;
};

export { navbarIntro, navbarOutro };
