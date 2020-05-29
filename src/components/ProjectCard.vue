<template>
  <div id="projectCard">
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9">
          <img src="../assets/media/notFound.png" alt="Project image" />
        </figure>
      </div>
      <div class="card-content has-text-centered has-text-dark">
        <p class="title is-5 has-text-centered has-text-dark">Title of Project</p>
        <p class="is-size-6">A quick, one-liner description of the project.</p>
        <button class="button is-link is-rounded" id="learnMoreBtn">Learn More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard"
};
</script>

<style>
#learnMoreBtn {
  margin-top: 1em;
}
</style>