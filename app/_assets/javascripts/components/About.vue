<template>
  <div id="about">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="logo navbar-brand p-0" href="/">
          <svg class="d-inline-block align-top">
            <use xlink:href="#logomin" />
          </svg>
        </a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-top"
                aria-controls="navbar-top"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-top">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="contact" class="nav-link">
                Contact
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="about" class="nav-link">
                About
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container content">
      <div class="">
        <h1 class="display-3">About</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
    }
  };
</script>
