<template>
  <!-- Modal for displaying more information about a project -->
  <div>
    <div :id="projectID + '-modal'" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card has-text-centered">
        <header class="modal-card-head has-background-primary">
          <p class="modal-card-title has-text-light">{{ project.title }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeModal"
          ></button>
        </header>
        <section class="modal-card-body has-background-light">
          <div class="columns is-vcentered">
            <splide class="column is-half" :options="splideOptions">
              <splide-slide
                class="mb-4"
                v-for="imageName in project.imageNames"
                :key="imageName"
              >
                <img
                  :src="require(`@/assets/media/${imageName}`)"
                  alt="Project image"
                />
              </splide-slide>
            </splide>
            <div class="column">
              <p>{{ project.oneLiner }}</p>
              <div class="columns">
                <div class="column">
                  <p>My Role</p>
                  <p>{{ project.role }}</p>
                </div>
                <div class="column">
                  <p>Tech Used</p>
                  <ul>
                    <li v-for="tech in project.techUsed" :key="tech">
                      {{ tech }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p>Difficulties</p>
                  <p>{{ project.difficulties }}</p>
                </div>
                <div class="column">
                  <p>Solution</p>
                  <p>{{ project.solution }}</p>
                </div>
              </div>
              <p>Notable Features</p>
              <p>{{ project.notable }}</p>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column">
              <button class="button is-link mr-3" disabled>Source Code</button>
              <button class="button is-link" disabled>Live Version</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default {
  name: "ProjectModal",
  components: {
    Splide,
    SplideSlide,
  },
  props: ["project"],
  data: function () {
    return {
      splideOptions: {
        type: "fade",
        perPage: 1,
        rewind: true,
        cover: true,
        heightRatio: 9 / 16,
      },
    };
  },
  computed: {
    projectID: function () {
      return this.project.title.replace(/\s/g, "").toLowerCase();
    },
  },
  methods: {
    closeModal: function () {
      document
        .querySelector(`#${this.projectID}-modal`)
        .classList.remove("is-active");
    },
  },
};
</script>

<style>
</style>