<template>
  <div id="home">
    <svg class="container-portfolio">
      <use xlink:href="#portfolio" />
    </svg>
    <svg class="container-about">
      <use xlink:href="#about" />
    </svg>
    <svg class="container-blog">
      <use xlink:href="#blog" />
    </svg>
    <svg class="container-clients">
      <use xlink:href="#clients" />
    </svg>
    <svg class="container-contact">
      <use xlink:href="#contact" />
    </svg>
    <svg class="container-donations">
      <use xlink:href="#donations" />
    </svg>
    <svg class="container-easter">
      <use xlink:href="#easter" />
    </svg>
    <svg class="container-page-home">
      <use xlink:href="#page-home" />
    </svg>
    <svg class="container-page-portfolio">
      <use xlink:href="#page-portfolio" />
    </svg>
    <svg class="container-page-about">
      <use xlink:href="#page-about" />
    </svg>
    <svg class="container-page-blog">
      <use xlink:href="#page-blog" />
    </svg>
    <svg class="container-page-clients">
      <use xlink:href="#page-clients" />
    </svg>
    <svg class="container-page-contact">
      <use xlink:href="#page-contact" />
    </svg>
    <svg class="container-page-donations">
      <use xlink:href="#page-donations" />
    </svg>
    <svg class="container-page-easter">
      <use xlink:href="#page-easter" />
    </svg>
  </div>
</template>

<script>
import jQuery from 'jquery';
import objectsIntro from '../home/intro/objects';
import clientsEvents from '../home/clients';
import aboutEvents from '../home/about';
import portfolioEvents from '../home/portfolio';
import donationsEvents from '../home/donations';
import contactEvents from '../home/contact';
import easterEvents from '../home/easter';
import blogEvents from '../home/blog';

export default {
  mounted () {
    this.$nextTick(this.loadAnimation);
  },
  watch: {
    '$route': 'loadAnimation'
  },
  methods: {
    loadAnimation () {
      const router = this.$router;
      const todayDate = new Date().toLocaleString('en');
      jQuery('.deployment-date').text('Deployment date: ' + todayDate);

      var timeline = objectsIntro();
      timeline.finished.then(() => {
        // clientsEvents(router);
        aboutEvents(router);
        // portfolioEvents(router);
        // donationsEvents(router);
        contactEvents(router);
        easterEvents(router);
        // blogEvents(router);
      });
      timeline.play();
    }
  }
};
</script>
