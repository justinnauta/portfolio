<template>
  <!-- Projects Page ("Second Page") -->
  <div id="projectsPage">
    <section class="hero is-light">
      <!-- "Ghost" hero for slanted design -->
      <div class="skew has-background-primary"></div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">My Projects</h2>
          <div class="columns is-centered is-multiline">
            <!-- Projects Columns -->
            <div
              class="column is-one-third is-hidden-mobile"
              v-for="project in projects"
              :key="project.title"
            >
              <ProjectCard :project="project"></ProjectCard>
            </div>
            <!-- Projects carousel (for mobile) -->
            <splide
              class="column is-one-third is-hidden-tablet"
              :options="splideOptions"
            >
              <splide-slide
                class="p-6"
                v-for="project in projects"
                :key="project.title"
              >
                <ProjectCard :project="project"></ProjectCard>
              </splide-slide>
            </splide>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default {
  name: "ProjectsPage",
  components: {
    ProjectCard,
    Splide,
    SplideSlide,
  },
  props: ["projects"],
  data: function () {
    return {
      splideOptions: {
        type: "loop",
      },
    };
  },
  mounted: function () {
    // Add is-fullheight modifier to hero if not on mobile (causes display problems with the carousel on mobile)
    let hero = document.querySelector("#projectsPage .hero");
    if (window.innerWidth > 768 && !hero.classList.contains("is-fullheight")) {
      hero.classList.add("is-fullheight");
    }

    // Add/remove is-fullheight depending on screen size
    window.addEventListener("resize", () => {
      if (hero.classList.contains("is-fullheight")) {
        hero.classList.remove("is-fullheight");
      }

      if (
        window.innerWidth > 768 &&
        !hero.classList.contains("is-fullheight")
      ) {
        hero.classList.add("is-fullheight");
      }
    });
  },
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

// Adjust colors for the carousel
.splide__arrow svg {
  fill: $link !important;
}

.splide__arrow svg:hover {
  fill: $link-hover !important;
}

.splide__pagination__page {
  background-color: $light !important;
}

.splide__pagination__page:hover {
  background-color: $link-hover !important;
}

.splide__pagination__page.is-active {
  background-color: $link !important;
}
</style>