<template>
  <!-- Projects Page ("Second Page") -->
  <div id="projectsPage">
    <section class="hero is-fullheight is-primary">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-top fill-light" :is-inverted="true" />
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">My Projects</h2>
        </div>
      </div>
      <!-- Footer -->
      <div class="hero-foot">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="fill-light" />
      </div>
    </section>
  </div>
</template>

<script>
import DesignTriangle from "./DesignTriangle.vue";

export default {
  name: "ProjectsPage",
  components: {
    DesignTriangle
  }
};
</script>

<style>
</style>