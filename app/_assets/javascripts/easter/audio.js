import jQuery from 'jquery';
import { Howl } from 'howler';

const audiosources = [
  jQuery('#preload-sound-sprite').attr('href')
];

export default new Howl({
  src: audiosources,
  sprite: {
    crash: [
      0,
      1005.1927437641723
    ],
    drop: [
      3000,
      169.09297052154182
    ],
    entrance: [
      5000,
      555.0113378684811
    ],
    extinguisher: [
      7000,
      250.1587301587298
    ],
    fire1: [
      9000,
      523.628117913832
    ],
    fire2: [
      11000,
      1686.0770975056685
    ],
    music: [
      14000,
      30119.183673469386
    ],
    scooter: [
      46000,
      483.106575963717
    ]
  }
});
