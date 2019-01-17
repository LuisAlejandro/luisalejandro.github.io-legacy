<template>
  <b-container fluid>
    <b-row>
      <b-navbar id="top-navbar" variant="light" type="light" toggleable class="w-100">
        <b-navbar-brand to="/">
          <span class="logo">
            <svg class="container-logo">
              <use xlink:href="#logo" />
            </svg>
          </span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav>
            <b-nav-item to="work">Work</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item to="contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-row>
    <b-row>
      <router-view></router-view>
    </b-row>
  </b-container>
</template>

<script>
  export default { name: 'App' };
</script>
