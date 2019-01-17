<template>
  <div id="home">
    <router-link to="home">
      <svg class="container-me">
        <use xlink:href="#me" />
      </svg>
    </router-link>
    <router-link to="work">
      <svg class="container-laptop">
        <use xlink:href="#laptop" />
      </svg>
    </router-link>
    <router-link to="contact">
      <svg class="container-smartphone">
        <use xlink:href="#smartphone" />
      </svg>
    </router-link>
    <router-link to="">
      <svg class="container-papers">
        <use xlink:href="#papers" />
      </svg>
    </router-link>
    <router-link to="">
      <svg class="container-calendar">
        <use xlink:href="#calendar" />
      </svg>
    </router-link>
    <router-link to="">
      <svg class="container-pencils">
        <use xlink:href="#pencils" />
      </svg>
    </router-link>
    <router-link to="">
      <svg class="container-coffee">
        <use xlink:href="#coffee" />
      </svg>
    </router-link>
    <router-link to="erp">
      <svg class="container-calc">
        <use xlink:href="#calc" />
      </svg>
    </router-link>
    <router-link to="">
      <svg class="container-notes">
        <use xlink:href="#notes" />
      </svg>
    </router-link>
<!--     <div id="home-heading">
      <h1>
        <span class="text-wrapper">
          <span class="letters">My name is Luis Alejandro</span>
          <span class="letters">and I'm a Full Stack Developer.</span>
        </span>
      </h1>
    </div>
    <div id="home-subheading">
      <h2>You can interact with the items on my workspace.</h2>
    </div> -->
  </div>
</template>

<script>
// import jQuery from 'jquery';
// import anime from 'animejs';

import objectsIntro from '../home/intro/objects';
// import meEvents from '../home/me';
import calcEvents from '../home/calc';
import calendarEvents from '../home/calendar';
import papersEvents from '../home/papers';
import laptopEvents from '../home/laptop';
import coffeeEvents from '../home/coffee';
import smartphoneEvents from '../home/smartphone';
import pencilsEvents from '../home/pencils';
import notesEvents from '../home/notes';

export default {
  mounted () {
    const self = this;
    this.$nextTick(() => {
      objectsIntro().finished.then(() => {
        self.loadObjectsEvents();
      });
    });
  },
  watch: {
    '$route': 'loadObjectsEvents'
  },
  methods: {
    loadObjectsEvents () {
      // meEvents();
      calcEvents();
      calendarEvents();
      papersEvents();
      laptopEvents();
      coffeeEvents();
      smartphoneEvents();
      pencilsEvents();
      notesEvents();
    }
  }
};
</script>
