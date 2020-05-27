<template>
  <div class="mainNav">
    <nav class="navbar">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNav"
        @click="navClick"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div id="mainNav" class="navbar-menu">
        <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
          <a href="#" class="navbar-item">Home</a>
          <a href="#" class="navbar-item">Projects</a>
          <a href="#" class="navbar-item">About</a>
          <a href="#" class="navbar-item">Contact</a>
          <a href="#" class="navbar-item">Resume</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  methods: {
    navClick: function(el) {
      el.target.classList.toggle("is-active");
      document
        .querySelector(`#${el.target.dataset.target}`)
        .classList.toggle("is-active");
    }
  }
};
</script>

<style>
</style>