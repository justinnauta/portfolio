<template>
  <!-- Projects Page ("Second Page") -->
  <div id="projectsPage">
    <section class="hero is-primary">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-top fill-light" :is-inverted="true" />
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">My Projects</h2>
          <div class="columns is-centered is-multiline">
            <div
              class="column is-one-third is-hidden-mobile"
              v-for="project in projects"
              :key="project.title"
            >
              <ProjectCard :project="project"></ProjectCard>
            </div>
            <splide class="column is-one-third is-hidden-tablet" :options="splideOptions">
              <splide-slide class="p-6" v-for="project in projects" :key="project.title">
                <ProjectCard :project="project"></ProjectCard>
              </splide-slide>
            </splide>
          </div>
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
import ProjectCard from "./ProjectCard.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default {
  name: "ProjectsPage",
  components: {
    DesignTriangle,
    ProjectCard,
    Splide,
    SplideSlide,
  },
  props: ["projects"],
  data: function() {
    return {
      splideOptions: {
        type: 'loop'
      },
    };
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