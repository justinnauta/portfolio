<template>
  <!-- A card for displaying a project-->
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
      <button class="button is-link is-rounded mt-5" @click="learnMoreClicked">
        Learn More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["project", "projectNumber"],
  methods: {
    learnMoreClicked: function () {
      this.$emit("project-clicked", this.projectNumber);

      // Resize event so slider size can be calculated properly after modal is shown
      const ev = new Event("resize");
      window.dispatchEvent(ev);
    },
  },
};
</script>

<style>
.card, .card-content {
  height: 100%;
}
</style>