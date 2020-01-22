<template>
  <section class="d-flex flex-column col col-8 p-0 m-auto">
    <div class="d-flex flex-column">
      <h1 class="display-1 font-weight-bold mb-50">
        Software
      </h1>
    </div>
    <div class="d-flex flex-column">
      <h1 class="display-1 font-weight-bold mb-50">
        Websites
      </h1>
    </div>
    <div class="grid d-flex flex-row">
      <div class="grid-item col-4 mx-1">
        <div class="card bg-light">
          <div class="card-header">Google Adwords</div>
          <div class="card-body text-center">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">SEM Ads</li>
            <li class="list-group-item">Ad Extensions</li>
            <li class="list-group-item">Keyword optimization</li>
            <li class="list-group-item">A/B tests and experiments</li>
            <li class="list-group-item">Dynamic Inventory advertising</li>
          </ul>
        </div>
      </div>
      <div class="grid-item col-4 mx-1">
        <div class="card bg-light">
          <div class="card-header">Google Adwords</div>
          <div class="card-body text-center">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">SEM Ads</li>
            <li class="list-group-item">Ad Extensions</li>
            <li class="list-group-item">Keyword optimization</li>
            <li class="list-group-item">A/B tests and experiments</li>
            <li class="list-group-item">Dynamic Inventory advertising</li>
          </ul>
        </div>
      </div>
      <div class="grid-item col-4 mx-1">
        <div class="card bg-light">
          <div class="card-header">Google Adwords</div>
          <div class="card-body text-center">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">SEM Ads</li>
            <li class="list-group-item">Ad Extensions</li>
            <li class="list-group-item">Keyword optimization</li>
            <li class="list-group-item">A/B tests and experiments</li>
            <li class="list-group-item">Dynamic Inventory advertising</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolio from '../portfolio';
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
      portfolio();
    }
  }
};
</script>
