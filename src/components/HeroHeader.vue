<template>
  <!-- Page header ("First page") -->
  <div id="heroHeader">
    <section class="hero is-fullheight is-light">
      <!-- "Ghost" hero for slanted design -->
      <div class="skew has-background-light"></div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container">
          <!-- Two main columns -->
          <div class="columns is-vcentered">
            <!-- First Column -->
            <div class="column">
              <div class="content is-medium has-text-dark has-text-centered-mobile">
                <h1 id="mainTitle" class="title is-1 has-text-dark">Hi, I'm Justin.</h1>
                <p>{{ summary }}</p>
                <div class="has-text-centered">
                  <a href="#contactPage" class="button is-link is-rounded is-medium">Contact</a>
                </div>
              </div>
            </div>
            <!-- Second Column -->
            <div class="column">
              <!-- Different title on mobile -->
              <h3 class="title is-3 has-text-dark is-hidden-mobile">Featured Projects</h3>
              <h3 class="title is-3 has-text-dark has-text-centered-mobile is-hidden-tablet pt-5">Featured Project</h3>
              <!-- Projects Columns -->
              <div class="columns">
                <div id="mobileFeaturedProject" class="column">
                  <ProjectCard :project="featuredProjects[0]"></ProjectCard>
                </div>
                <div class="column is-hidden-mobile">
                  <ProjectCard :project="featuredProjects[1]"></ProjectCard>
                </div>
              </div>
              <!-- View all button -->
              <div class="has-text-right has-text-centered-mobile">
                <a href="#projectsPage" class="button is-link is-rounded is-medium" id="viewAllBtn">
                  View All
                  <font-awesome-icon class="faIcon" icon="chevron-right" fixed-width />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div id="mainFooter" class="hero-foot">
        <MainNav id="mainNav" />
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
    ProjectCard,
  },
  props: ["summary", "featuredProjects"],
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

@include until($tablet) {
  #mainTitle {
    margin-top: 30px;
  }

  #mobileFeaturedProject {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

// For rotating the arrow on the view all button
.faIcon {
  transition: 0.3s;
}

#viewAllBtn:hover .faIcon {
  transform: rotateZ(90deg);
}

@include from($tablet) {
  // For applying sticky effect
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .sticky + .hero {
    padding-top: 60px;
  }

  // Bottom navbar transition styles
  #mainNav {
    background-color: transparent;
    transition: background-color 0.1s;
  }

  #mainNav.sticky {
    background-color: $dark;
  }
}
</style>