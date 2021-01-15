<template>
  <!-- Modal for displaying more information about a project -->
  <div class="modal is-active">
    <!-- Dark background covering the page -->
    <div class="modal-background"></div>
    <div class="modal-card has-text-centered">
      <header class="modal-card-head has-background-primary">
        <p class="modal-card-title has-text-light">{{ project.title }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('project-clicked', -1)"
        ></button>
      </header>
      <section class="modal-card-body has-background-light">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <splide :options="splideOptions">
              <splide-slide
                class="mb-5"
                v-for="imageName in project.imageNames"
                :key="imageName"
              >
                <img
                  :src="require(`@/assets/media/${imageName}`)"
                  alt="Project image"
                />
              </splide-slide>
            </splide>
            <p class="mt-4">{{ project.description }}</p>
          </div>
          <div class="column">
            <p class="title is-5 mb-0">My Role</p>
            <p class="mb-5">{{ project.role }}</p>

            <p class="title is-5 mb-0">Technologies</p>
            <div class="mb-5">
              <span v-for="(tech, i) in project.techUsed" :key="tech">
                {{ tech }}
                <span v-if="i < project.techUsed.length - 1">
                  &nbsp;&bull;&nbsp;
                </span>
              </span>
            </div>

            <p class="title is-5 mb-0">Difficulties</p>
            <p class="mb-5">{{ project.difficulties }}</p>

            <p class="title is-5 mb-0">Solution</p>
            <p class="mb-5">{{ project.solution }}</p>

            <p class="title is-5 mb-0">Notable Features</p>
            <p>{{ project.notable }}</p>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <a
              class="button is-link mr-3"
              :href="project.srcLink"
              :disabled="project.srcLink == null"
              :title="project.srcLink == null ? 'Not Available' : ''"
            >
              Source Code
            </a>
            <a
              class="button is-link"
              :href="project.liveLink"
              :disabled="project.liveLink == null"
              :title="project.liveLink == null ? 'Not Available' : ''"
            >
              Live Version
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  name: 'ProjectModal',
  components: {
    Splide,
    SplideSlide,
  },
  props: ['project'],
  data: function() {
    return {
      splideOptions: {
        type: 'fade',
        perPage: 1,
        rewind: true,
        cover: true,
        heightRatio: 9 / 16,
      },
    };
  },
};
</script>

<style></style>
