<template>
  <div id="home">
    <svg class="container-me">
      <use xlink:href="#me" />
    </svg>
  </div>
</template>

<script>
import anime from 'animejs';

import { home } from '../home/scenes';

export default {
  data () {
    return {};
  },
  mounted () {
    this.$nextTick(() => {
      this.loadAnimation();
    });
  },
  watch: {
    '$route': 'loadAnimation'
  },
  methods: {
    loadAnimation () {
      var LA = window.LA || {};
      LA.home = {};
      LA.home.scenes = home;

      LA.home.timeline = anime.timeline();

      Object.keys(LA.home.scenes).forEach((scene) => {
        LA.home.scenes[scene].forEach((step) => {
          LA.home.timeline = LA.home.timeline.add(step);
        });
      });
    }
  }
};
</script>
