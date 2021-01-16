<template>
  <!-- A card for displaying a project-->
  <div class="card is-flex is-flex-direction-column">
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
    <div class="card-content has-text-centered has-text-dark is-flex-grow-1">
      <p class="title is-5 has-text-centered has-text-dark">
        {{ project.title }}
      </p>
      <p class="is-size-6">
        {{ project.oneLiner }}
      </p>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column is-two-thirds m-5">
        <button
          class="button is-link is-rounded is-fullwidth"
          @click="$emit('project-clicked', projectNumber)"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project', 'projectNumber'],
};
</script>

<style>
.card {
  height: 100%;
}
</style>
