import jQuery from 'jquery';
import anime from 'animejs';

import objectsOutro from './outro/objects';

export default function (router) {
  jQuery(() => {
    // let hasBeenPlayed = false;
    // const anim = anime.timeline({
    //   duration: 250,
    //   autoplay: false,
    //   easing: 'easeOutQuint'
    // }).add({
    //   targets: [
    //     '#home > .container-page-clients', '#home > .container-page-portfolio',
    //     '#home > .container-page-donations', '#home > .container-page-contact',
    //     '#home > .container-page-blog', '#home > .container-page-about',
    //     '#home > .container-page-home'
    //   ],
    //   translateY: [0, -400]
    // }, 0).add({
    //   targets: '#home > .container-clients',
    //   translateX: [0, -20],
    //   rotate: [-10, -10]
    // }, 0).add({
    //   targets: '#home > .container-about',
    //   translateX: [0, 10],
    //   rotate: [10, 15]
    // }, 0).add({
    //   targets: '#home > .container-portfolio',
    //   translateY: [0, 20],
    //   translateX: [0, 20]
    // }, 0).add({
    //   targets: '#home > .container-donations',
    //   translateY: [0, 5]
    // }, 0).add({
    //   targets: '#home > .container-contact',
    //   translateY: [0, 5]
    // }, 0).add({
    //   targets: '#home > .container-easter',
    //   translateY: [0, -40]
    // }, 0).add({
    //   targets: '#home > .container-blog',
    //   translateY: [0, 5]
    // }, 0);

    const clickAnimation = () => {
      objectsOutro().finished.then(() => {
        router.push({ name: 'easter' });
      });
    };

    // const toggleAnimation = () => {
    //   if (hasBeenPlayed) {
    //     if (anim.began) {
    //       anim.reverse();
    //     }
    //     if (anim.paused) {
    //       anim.play();
    //     }
    //   } else {
    //     anim.play();
    //     hasBeenPlayed = true;
    //   }
    // };

    // jQuery('#home > .container-easter').hover(toggleAnimation, toggleAnimation);

    const containerEaster = jQuery('#home > .container-easter');
    const containerClients = jQuery('#home > .container-clients');
    const containerBlog = jQuery('#home > .container-blog');
    const containerAbout = jQuery('#home > .container-about');
    const containerPortfolio = jQuery('#home > .container-portfolio');
    const containerContact = jQuery('#home > .container-contact');
    const containerDonations = jQuery('#home > .container-donations');
    const contentPages = jQuery('#home > .container-page-clients, #home > .container-page-portfolio, #home > .container-page-donations, #home > .container-page-contact, #home > .container-page-blog, #home > .container-page-about, #home > .container-page-home');

    containerEaster.hover(() => {
      containerEaster.removeClass('animation-focus-easter-leave');
      containerEaster.addClass('animation-focus-easter-enter');

      contentPages.removeClass('reaction-pages-leave');
      contentPages.addClass('reaction-pages-enter');
    }, () => {
      containerEaster.removeClass('animation-focus-easter-enter');
      containerEaster.addClass('animation-focus-easter-leave');

      contentPages.removeClass('reaction-pages-enter');
      contentPages.addClass('reaction-pages-leave');
    });

    containerEaster.on('click', clickAnimation);
  });
};
