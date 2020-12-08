<template>
  <!-- About Page ("Third Page") -->
  <div id="aboutPage">
    <section class="hero is-fullheight is-light">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-top" :is-inverted="true" />
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <!-- Two main columns -->
          <div class="columns is-vcentered">
            <!-- First Column -->
            <div class="column is-narrow is-4">
              <div class="content is-medium has-text-dark">
                <!-- Image -->
                <figure class="image is-inline-block mb-2">
                  <img class="is-rounded" src="../assets/media/justin.jpg" alt="Picture of Justin" />
                </figure>
                <!-- Name and Title Tags -->
                <h2 class="title is-2 has-text-dark mt-0 mb-1">Justin Nauta</h2>
                <p class="mb-1">{{ titleTag1 }} &bull; {{ titleTag2 }}</p>
                <!-- Social Links -->
                <div id="about-socialLinks">
                  <a href="https://github.com/justinnauta" class="button is-medium">
                    <span class="icon is-medium">
                      <i class="fab fa-github fa-2x"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/justinnauta/" class="button is-medium">
                    <span class="icon is-medium">
                      <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <!-- Second Column -->
            <div class="column">
              <h2 class="title is-2 has-text-dark">About Me</h2>
              <p>{{ description }}</p>
              <div class="has-text-centered mt-4">
                <button class="button is-link is-rounded is-medium">View Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="hero-foot">
        <!-- Triangle for slanted design -->
        <DesignTriangle />
      </div>
    </section>
  </div>
</template>

<script>
import DesignTriangle from "./DesignTriangle.vue";

export default {
  name: "AboutPage",
  components: {
    DesignTriangle,
  },
  props: ["titleTag1", "titleTag2", "description"],
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

#about-socialLinks a {
  border: none;
  background: none;
}

#about-socialLinks a:hover {
  color: $primary;
}
</style>