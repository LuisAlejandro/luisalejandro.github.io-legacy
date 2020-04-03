<template>
  <div id="easter">
    <svg class="container-me">
      <use xlink:href="#me" />
    </svg>
    <svg class="container-cloud-1">
      <use xlink:href="#cloud" />
    </svg>
    <svg class="container-cloud-2">
      <use xlink:href="#cloud" />
    </svg>
    <svg class="container-extinguisher">
      <use xlink:href="#extinguisher" />
    </svg>
    <svg class="container-fire">
      <use xlink:href="#fire" />
    </svg>
    <svg class="container-scooter">
      <use xlink:href="#scooter" />
    </svg>
    <svg class="container-stream">
      <use xlink:href="#stream" />
    </svg>
    <svg class="container-water-drop">
      <use xlink:href="#water-drop" />
    </svg>
  </div>
</template>

<script>
import easterEgg from '../easter';

export default {
  mounted () {
    this.$nextTick(this.loadAnimation);
  },
  watch: {
    '$route': 'loadAnimation'
  },
  methods: {
    loadAnimation () {
      const r = this.$router;
      easterEgg().finished.then(() => {
        r.push({ name: 'home' });
      });
    }
  }
};
</script>
