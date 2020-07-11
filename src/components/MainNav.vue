<template>
  <!-- Main navigation bar -->
  <div id="mainNav">
    <nav class="navbar">
      <div class="navbar-brand">
        <!-- Current page (mobile) -->
        <a href class="navbar-item is-size-5 is-hidden-desktop">Home</a>
        <!-- Burger menu -->
        <a
          role="button"
          class="navbar-burger has-text-light"
          aria-label="menu"
          aria-expanded="false"
          data-target="navItems"
          @click="openBurgerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- Menu items -->
      <div id="navItems" class="navbar-menu">
        <div class="navbar-start" style="flex-grow: 1; justify-content: center;">
          <a href="#heroHeader" class="navbar-item is-active" @click="navItemClicked">Home</a>
          <a href="#projectsPage" class="navbar-item" @click="navItemClicked">Projects</a>
          <a href="#aboutPage" class="navbar-item" @click="navItemClicked">About</a>
          <a href="#contactPage" class="navbar-item" @click="navItemClicked">Contact</a>
          <a href="#" class="navbar-item" @click="navItemClicked">Resume</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  methods: {
    // Toggles the burger menu
    openBurgerMenu: function(el) {
      // Activate burger
      el.target.classList.toggle("is-active");

      // Activate menu items
      document
        .querySelector(`#${el.target.dataset.target}`)
        .classList.toggle("is-active");
    },
    // Handles clicking a menu item
    navItemClicked: function(el) {
      // Un-highlight previous active item
      document
        .querySelector(".navbar-item.is-active")
        .classList.remove("is-active");

      // Highlight clicked item
      el.target.classList.add("is-active");

      // Close burger menu and the menu items
      let burger = document.querySelector(".navbar-burger");
      burger.classList.remove("is-active");
      document
        .querySelector(`#${burger.dataset.target}`)
        .classList.remove("is-active");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

/* Mobile specific styles */
@include until($desktop) {
  #mainNav {
    position: absolute;
    top: 0;
  }

  .navbar {
    width: 100% !important;
    position: fixed !important;
    background-color: $dark !important;
  }

  .navbar-menu {
    display: block !important;
    position: fixed !important;
    background-color: $dark !important;
    width: 100% !important;
    height: 0px !important;
    padding: 0 !important;
    border-bottom: 5px solid $link !important;
    overflow: hidden !important;
    pointer-events: none !important;
    transition: height 0.3s ease-out !important;
  }

  .navbar-menu.is-active {
    height: 205px !important;
    pointer-events: auto !important;
    transition: height 0.3s ease-in !important;
  }

  .navbar-brand .navbar-item:hover {
    background-color: transparent !important;
  }

  .navbar-item {
    color: $light !important;
  }
}

/* Desktop specific styles */
@include from($desktop) {
  .navbar-item {
    color: $dark !important;
  }
}

/* General styles */
.navbar-item.is-active {
  color: $link !important;
  background-color: transparent !important;
}

.navbar-start .navbar-item:hover {
  color: $link !important;
  background-color: transparent !important;
}
</style>