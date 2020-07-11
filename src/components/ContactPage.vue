<template>
  <!-- Contact Page ("Fourth Page") -->
  <div id="contactPage">
    <section class="hero is-fullheight is-primary">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-inverted is-top fill-light" />
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">Contact Me</h2>
        </div>
      </div>
      <!-- Footer -->
      <div class="hero-foot"></div>
    </section>
  </div>
</template>

<script>
import DesignTriangle from "./DesignTriangle.vue";

export default {
  name: "ContactPage",
  components: {
    DesignTriangle
  }
};
</script>

<style>
</style>