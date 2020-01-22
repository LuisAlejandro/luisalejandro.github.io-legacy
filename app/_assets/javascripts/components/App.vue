<template>
  <b-container fluid class="d-flex flex-column">
    <b-row class="d-flex flex-row position-sticky sticky-top">
      <b-navbar id="top-navbar" variant="light" type="light" toggleable class="d-flex flex-row col shadow" fluid>
        <div class="d-flex flex-row col col-8 align-items-center justify-content-center p-0 m-auto">
          <span class="logo">
            <b-navbar-brand to="/">
              <svg class="container-logo">
                <use xlink:href="#logo" />
              </svg>
            </b-navbar-brand>
          </span>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="blog">Blog</b-nav-item>
            <b-nav-item to="portfolio">Portfolio</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item to="contact">Contact</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </b-row>
    <b-row class="d-flex flex-row">
      <router-view></router-view>
    </b-row>
    <b-row class="d-flex flex-row">
      <footer>
        dfsdfs
      </footer>
    </b-row>
  </b-container>
</template>

<script>
  export default { name: 'App' };
</script>
