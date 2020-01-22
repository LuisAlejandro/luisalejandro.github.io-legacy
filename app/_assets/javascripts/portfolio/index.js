import anime from 'animejs';
import jQuery from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry';
import Waypoint from 'waypoints';

jQueryBridget('masonry', Masonry, jQuery);

export default () => {
  const items = jQuery('.grid-item > .card');
  const effect = {
    sortTargetsFn: function (a, b) {
      const aBounds = a.getBoundingClientRect();
      const bBounds = b.getBoundingClientRect();
      return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
    },
    animeOpts: {
      duration: function (t, i) {
        return 500 + i * 50;
      },
      easing: 'easeOutExpo',
      delay: function (t, i) {
        return i * 20;
      },
      opacity: {
        value: [0, 1],
        duration: function (t, i) {
          return 250 + i * 50;
        },
        easing: 'linear'
      },
      translateY: [400, 0]
    }
  };
  effect.animeOpts.targets = [].slice.call(items).sort(effect.sortTargetsFn);

  const msnry = new Masonry(jQuery('.grid'), {
    itemSelector: '.grid-item',
    percentPosition: true,
    transitionDuration: 0
  });

  const wypnts = new Waypoint();
  

  anime(effect.animeOpts);
};
