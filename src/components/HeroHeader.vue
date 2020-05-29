<template>
  <!-- Page header ("First page") -->
  <div id="heroHeader">
    <section class="hero is-fullheight is-light">
      <!-- Mobile navbar -->
      <div class="hero-head">
        <MainNav class="is-hidden-desktop"></MainNav>
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container">
          <!-- Two main columns -->
          <div class="columns is-vcentered">
            <!-- First Column -->
            <div class="column">
              <div class="content is-medium has-text-dark">
                <h1 class="title is-1 has-text-dark">Hi, I'm Justin.</h1>
                <p>This will be a very quick summary of the content on the "About" page, or something similar.</p>
                <div class="has-text-centered">
                  <button class="button is-link is-rounded is-medium">Contact</button>
                </div>
              </div>
            </div>
            <!-- Second Column -->
            <div class="column">
              <h3 class="title is-3 has-text-dark">Featured Projects</h3>
              <!-- Projects Columns -->
              <div class="columns">
                <div class="column">
                  <ProjectCard></ProjectCard>
                </div>
                <div class="column">
                  <ProjectCard></ProjectCard>
                </div>
              </div>
              <div class="has-text-right">
                <button class="button is-link is-rounded is-medium">
                  View All
                  <i class="fas fa-chevron-right"></i>
                </button>
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
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "HeroHeader",
  components: {
    MainNav,
    ProjectCard
  }
};
</script>

<style>
</style>