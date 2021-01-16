<template>
  <!-- Main navigation bar -->
  <div :class="{ sticky: offsets.window >= offsets.sticky }">
    <nav class="navbar">
      <div class="navbar-brand">
        <!-- Current page (for mobile) -->
        <a href class="navbar-item is-size-5 is-hidden-tablet">
          {{ currentPage }}
        </a>
        <!-- Burger menu -->
        <a
          role="button"
          class="navbar-burger has-text-light"
          :class="{ 'is-active': burgerOpen }"
          aria-label="menu"
          aria-expanded="false"
          @click="burgerOpen = !burgerOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!-- Menu items -->
      <div class="navbar-menu" :class="{ 'is-active': burgerOpen }">
        <div class="navbar-start" style="flex-grow: 1; justify-content: center">
          <a
            id="navItemHome"
            class="navbar-item"
            :class="{ 'is-active': currentPage == 'Home' }"
            @click="navClicked('#heroHeader')"
          >
            Home
          </a>
          <a
            id="navItemProjects"
            class="navbar-item"
            :class="{ 'is-active': currentPage == 'Projects' }"
            @click="navClicked('#projectsPage')"
          >
            Projects
          </a>
          <a
            id="navItemAbout"
            class="navbar-item"
            :class="{ 'is-active': currentPage == 'About' }"
            @click="navClicked('#aboutPage')"
          >
            About
          </a>
          <a
            id="navItemContact"
            class="navbar-item"
            :class="{ 'is-active': currentPage == 'Contact' }"
            @click="navClicked('#contactPage')"
          >
            Contact
          </a>
          <a
            href="/Nauta_Resume.pdf"
            class="navbar-item"
            @click="burgerOpen = false"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data: function() {
    return {
      burgerOpen: false,
      sectionBuffer: 50,
      offsets: {
        window: 0,
        sticky: 0,
        contact: 0,
        about: 0,
        project: 0,
      },
    };
  },
  computed: {
    currentPage: function() {
      if (this.offsets.window >= this.offsets.contact) {
        return 'Contact';
      } else if (this.offsets.window >= this.offsets.about) {
        return 'About';
      } else if (this.offsets.window >= this.offsets.project) {
        return 'Projects';
      } else {
        return 'Home';
      }
    },
  },
  mounted: function() {
    // Update the section offsets so the navbar can update appropriatley
    this.updateOffsets();
    window.addEventListener('scroll', this.updateOffsets);
    window.addEventListener('resize', this.updateOffsets);
  },
  methods: {
    // Gets the location of the top of each section
    updateOffsets: function() {
      this.offsets.window = window.pageYOffset;
      this.offsets.sticky =
        document.querySelector('#heroHeader').offsetTop +
        document.querySelector('#heroHeader').offsetHeight -
        document.querySelector('#mainNav').offsetHeight;
      this.offsets.contact =
        document.querySelector('#contactPage').offsetTop - this.sectionBuffer;
      this.offsets.about =
        document.querySelector('#aboutPage').offsetTop - this.sectionBuffer;
      this.offsets.project =
        document.querySelector('#projectsPage').offsetTop - this.sectionBuffer;
    },
    navClicked: function(sectionID) {
      this.$emit('nav-clicked', sectionID);
      this.burgerOpen = false;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/sass/main.scss';

/* Mobile specific styles */
@include until($tablet) {
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
.navbar-item.is-active {
  color: $link !important;
  background-color: transparent !important;
}

.navbar-start .navbar-item:hover {
  color: $link !important;
  background-color: transparent !important;
}

.navbar-item {
  background-color: transparent !important;
}
</style>
