<template>
  <div id="home">
    <svg class="container-portfolio">
      <router-link to="portfolio">
        <use xlink:href="#portfolio" />
      </router-link>
    </svg>
    <svg class="container-about">
      <router-link to="about">
        <use xlink:href="#about" />
      </router-link>
    </svg>
    <svg class="container-blog">
      <router-link to="blog">
        <use xlink:href="#blog" />
      </router-link>
    </svg>
    <svg class="container-clients">
      <router-link to="clients">
        <use xlink:href="#clients" />
      </router-link>
    </svg>
    <svg class="container-contact">
      <router-link to="contact">
        <use xlink:href="#contact" />
      </router-link>
    </svg>
    <svg class="container-donations">
      <router-link to="donations">
        <use xlink:href="#donations" />
      </router-link>
    </svg>
    <svg class="container-easter">
      <router-link to="easter">
        <use xlink:href="#easter" />
      </router-link>
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
      objectsIntro().finished.then(() => {
        clientsEvents();
        aboutEvents();
        portfolioEvents();
        donationsEvents();
        contactEvents();
        easterEvents();
        blogEvents();
      });
    }
  }
};
</script>
