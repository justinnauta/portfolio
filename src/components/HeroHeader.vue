<template>
  <!-- Page header ("First page") -->
  <div id="heroHeader">
    <section class="hero is-fullheight is-primary">
      <!-- Mobile navbar -->
      <div class="hero-head">
        <MainNav class="is-hidden-desktop"></MainNav>
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="content is-medium">
                <h1 class="title is-1">Hi, I'm Justin.</h1>
                <p>This will be a very quick summary of the content on the "About" page, or something similar.</p>
              </div>
            </div>
            <div class="column">
              <div class="content is-small">
                <h3 class="title is-3">Featured Projects</h3>
                <p>FEATURED PROJECTS HERE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop navbar -->
      <div class="hero-foot">
        <MainNav class="is-hidden-touch"></MainNav>
      </div>
    </section>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";

export default {
  name: "HeroHeader",
  components: {
    MainNav
  }
};
</script>

<style>
</style>