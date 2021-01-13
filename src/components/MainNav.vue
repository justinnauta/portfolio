<template>
  <!-- Main navigation bar -->
  <div id="mainNav">
    <nav class="navbar">
      <div class="navbar-brand">
        <!-- Current page (mobile) -->
        <a href class="navbar-item is-size-5 is-hidden-tablet">
          {{ currentPage }}
        </a>
        <!-- Burger menu -->
        <a
          role="button"
          class="navbar-burger has-text-light"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="openBurgerMenu"
        >
          <span aria-hidden="true" data-target="navbar-menu"></span>
          <span aria-hidden="true" data-target="navbar-menu"></span>
          <span aria-hidden="true" data-target="navbar-menu"></span>
        </a>
      </div>
      <!-- Menu items -->
      <div class="navbar-menu">
        <div class="navbar-start" style="flex-grow: 1; justify-content: center">
          <a
            id="navItemHome"
            href="#heroHeader"
            class="navbar-item is-active"
            @click="navItemClicked"
            >Home</a
          >
          <a
            id="navItemProjects"
            href="#projectsPage"
            class="navbar-item"
            @click="navItemClicked"
            >Projects</a
          >
          <a
            id="navItemAbout"
            href="#aboutPage"
            class="navbar-item"
            @click="navItemClicked"
            >About</a
          >
          <a
            id="navItemContact"
            href="#contactPage"
            class="navbar-item"
            @click="navItemClicked"
            >Contact</a
          >
          <a href="/Nauta_Resume.pdf" class="navbar-item" @click="navItemClicked">Resume</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data: function () {
    return {
      currentPage: "Home",
    };
  },
  mounted: function () {
    let amt = 130;
    let navbar = document.querySelector("#mainNav");
    let sticky = document.querySelector("#mainFooter").offsetTop;

    let contactOffset = document.querySelector("#contactPage").offsetTop - amt;
    let aboutOffset = document.querySelector("#aboutPage").offsetTop - amt;
    let projectsOffset =
      document.querySelector("#projectsPage").offsetTop - amt;

    window.addEventListener("resize", () => {
      sticky = document.querySelector("#mainFooter").offsetTop;

      contactOffset = document.querySelector("#contactPage").offsetTop - amt;
      aboutOffset = document.querySelector("#aboutPage").offsetTop - amt;
      projectsOffset = document.querySelector("#projectsPage").offsetTop - amt;
    });

    window.addEventListener("scroll", () => {
      let windowOffset = window.pageYOffset;

      if (windowOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

      if (windowOffset >= contactOffset) {
        document
          .querySelector(".navbar-item.is-active")
          .classList.remove("is-active");
        document.querySelector("#navItemContact").classList.add("is-active");
        this.currentPage = "Contact";
      } else if (windowOffset >= aboutOffset) {
        document
          .querySelector(".navbar-item.is-active")
          .classList.remove("is-active");
        document.querySelector("#navItemAbout").classList.add("is-active");
        this.currentPage = "About";
      } else if (windowOffset >= projectsOffset) {
        document
          .querySelector(".navbar-item.is-active")
          .classList.remove("is-active");
        document.querySelector("#navItemProjects").classList.add("is-active");
        this.currentPage = "Projects";
      } else {
        document
          .querySelector(".navbar-item.is-active")
          .classList.remove("is-active");
        document.querySelector("#navItemHome").classList.add("is-active");
        this.currentPage = "Home";
      }
    });
  },
  methods: {
    // Toggles the burger menu
    openBurgerMenu: function (el) {
      // Activate burger
      el.target.classList.toggle("is-active");

      // Activate menu items
      document
        .querySelector(`.${el.target.dataset.target}`)
        .classList.toggle("is-active");
    },
    // Handles clicking a menu item
    navItemClicked: function (el) {
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
        .querySelector(`.${burger.dataset.target}`)
        .classList.remove("is-active");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

/* Mobile specific styles */
@include until($tablet) {
  #mainNav {
    position: absolute;
    top: 0;
  }

  .navbar {
    width: 100% !important;
    position: fixed !important;
    background-color: $dark !important;
    box-shadow: 0px 4px 10px $dark;
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
    box-shadow: 0px 2px 10px $dark;
  }

  .navbar-brand .navbar-item:hover {
    background-color: transparent !important;
  }

  .navbar-item {
    color: $light !important;
  }
}

/* Desktop specific styles */
@include from($tablet) {
  .navbar-menu {
    background-color: transparent !important;
  }

  .navbar-item {
    color: $dark !important;
  }

  .sticky {
    border-bottom: 5px solid $link !important;
    box-shadow: 0px 4px 10px $dark;
  }

  .sticky a {
    color: $light !important;
  }
}

/* General styles */
#mainNav {
  z-index: 5;
}

.navbar-item.is-active {
  color: $link !important;
  background-color: transparent !important;
}

.navbar-start .navbar-item:hover {
  color: $link !important;
  background-color: transparent !important;
}
</style>
