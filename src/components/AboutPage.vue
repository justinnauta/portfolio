<template>
  <!-- About Page ("Third Page") -->
  <div id="aboutPage">
    <section class="hero is-fullheight is-light">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-inverted is-top" />
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
                  <form action="https://github.com/justinnauta" class="is-inline">
                    <button class="button is-medium mr-2">
                      <span class="icon is-medium">
                        <i class="fab fa-github fa-2x"></i>
                      </span>
                    </button>
                  </form>
                  <form action="https://www.linkedin.com/in/justinnauta/" class="is-inline">
                    <button class="button is-medium">
                      <span class="icon is-medium">
                        <i class="fab fa-linkedin fa-2x"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <!-- Second Column -->
            <div class="column">
              <h2 class="title is-2 has-text-dark">About Me</h2>
              <p>{{ aboutDescription }}</p>
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
    DesignTriangle
  },
  data: function() {
    return {
      titleTag1: "Software Engineer",
      titleTag2: "Web Developer",
      aboutDescription:
        'This will be a larger "About" section, describing more in depth information. Lorem ipsum dolor' +
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    };
  }
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

#about-socialLinks button {
  border: none;
  background: none;
}

#about-socialLinks button:hover {
  color: $primary;
}
</style>