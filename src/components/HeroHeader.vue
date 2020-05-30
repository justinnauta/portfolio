<template>
  <!-- Page header ("First page") -->
  <div id="heroHeader">
    <section class="hero is-fullheight is-light">
      <!-- Content -->
      <div class="hero-body">
        <div class="container">
          <!-- Two main columns -->
          <div class="columns is-vcentered">
            <!-- First Column -->
            <div class="column">
              <div class="content is-medium has-text-dark has-text-centered-mobile">
                <h1 class="title is-1 has-text-dark">Hi, I'm Justin.</h1>
                <p>This will be a very quick summary of the content on the "About" page, or something similar.</p>
                <div class="has-text-centered">
                  <button class="button is-link is-rounded is-medium">Contact</button>
                </div>
              </div>
            </div>
            <!-- Second Column -->
            <div class="column">
              <h3 class="title is-3 has-text-dark has-text-centered-mobile">Featured Projects</h3>
              <!-- Projects Columns -->
              <div class="columns">
                <div class="column">
                  <ProjectCard></ProjectCard>
                </div>
                <div class="column">
                  <ProjectCard></ProjectCard>
                </div>
              </div>
              <!-- View all button -->
              <div class="has-text-right has-text-centered-mobile">
                <button class="button is-link is-rounded is-medium" id="viewAllBtn">
                  View All
                  <font-awesome-icon class="faIcon" icon="chevron-right" fixed-width />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar -->
      <div class="hero-foot">
        <MainNav />
      </div>
      <!-- Triangle for slanted design -->
      <DesignTriangle />
    </section>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";
import ProjectCard from "./ProjectCard.vue";
import DesignTriangle from "./DesignTriangle.vue";

export default {
  name: "HeroHeader",
  components: {
    MainNav,
    ProjectCard,
    DesignTriangle
  }
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

@include until($tablet) {
  #heroHeader {
    margin-top: 30px;
  }
}

/* For rotating the arrow on the view all button */
.faIcon {
  transition: 0.3s;
}

#viewAllBtn:hover .faIcon {
  transform: rotateZ(90deg);
}
</style>