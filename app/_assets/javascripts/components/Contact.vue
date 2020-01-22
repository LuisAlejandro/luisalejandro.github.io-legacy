<template>
  <div>Contact</div>
</template>

<script>
import { navbarIntro } from '../effects';

export default {
  mounted () {
    this.$nextTick(this.loadAnimation);
  },
  watch: {
    '$route': 'loadAnimation'
  },
  methods: {
    loadAnimation () {
      navbarIntro();
    }
  }
};
</script>
