<template>
  <!-- A card for displaying a project-->
  <div>
    <div class="card">
      <!-- Project image -->
      <div class="card-image">
        <figure class="image is-16by9">
          <img
            :src="require(`@/assets/media/${project.imageNames[0]}`)"
            alt="Project image"
          />
        </figure>
      </div>
      <!-- Card content -->
      <div class="card-content has-text-centered has-text-dark">
        <p class="title is-5 has-text-centered has-text-dark">
          {{ project.title }}
        </p>
        <p class="is-size-6">
          {{ project.oneLiner }}
        </p>
        <button
          class="button is-link is-rounded mt-5"
          @click="learnMoreClicked"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["project"],
  computed: {
    projectID: function () {
      return this.project.title.replace(/\s/g, "").toLowerCase();
    },
  },
  methods: {
    learnMoreClicked: function () {
      document
        .querySelector(`#${this.projectID}-modal`)
        .classList.add("is-active");

      // Resize event so slider size can be calculated properly after modal is shown
      const ev = new Event("resize");
      window.dispatchEvent(ev);
    },
  },
};
</script>

<style>
</style>