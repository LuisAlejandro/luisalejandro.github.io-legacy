<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="/assets/images/logo.svg" />
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
