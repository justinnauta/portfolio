<template>
  <!-- Projects Page (Second Section) -->
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
              v-for="(project, index) in projects"
              :key="project.title"
            >
              <ProjectCard
                :project="project"
                :projectNumber="index"
                v-on="$listeners"
              ></ProjectCard>
            </div>
            <!-- Projects carousel (for mobile) -->
            <splide
              class="column is-one-third is-hidden-tablet"
              :options="splideOptions"
            >
              <splide-slide
                class="p-6"
                v-for="(project, index) in projects"
                :key="project.title"
              >
                <ProjectCard
                  :project="project"
                  :projectNumber="index"
                  v-on="$listeners"
                ></ProjectCard>
              </splide-slide>
            </splide>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard,
    Splide,
    SplideSlide,
  },
  props: ['projects'],
  data: function() {
    return {
      splideOptions: {
        type: 'loop',
        perPage: 1,
      },
    };
  },
};
</script>

<style></style>
