<template>
  <!-- Page header (First Section) -->
  <div id="heroHeader">
    <section class="hero is-fullheight is-light">
      <!-- "Ghost" hero for slanted design -->
      <div class="skew has-background-light"></div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container">
          <!-- Two main columns -->
          <div class="columns is-vcentered">
            <!-- First Column -->
            <div class="column">
              <div
                class="content is-medium has-text-dark has-text-centered-mobile"
              >
                <h1 id="mainTitle" class="title is-1 has-text-dark typewriter">
                  {{ mainTitleText }}
                </h1>
                <transition name="fadein-left">
                  <div v-if="fadeIn">
                    <p>{{ summary }}</p>
                    <div class="has-text-centered">
                      <a
                        class="button is-link is-rounded is-medium"
                        @click="scrollToSection('#contactPage')"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <!-- Second Column -->
            <transition name="fadein-right">
              <div class="column" v-if="fadeIn">
                <!-- Different title on mobile -->
                <h3 class="title is-3 has-text-dark is-hidden-mobile">
                  Featured Projects
                </h3>
                <h3
                  class="title is-3 has-text-dark has-text-centered-mobile is-hidden-tablet pt-5"
                >
                  Featured Project
                </h3>
                <!-- Projects Columns -->
                <div class="columns">
                  <div id="mobileFeaturedProject" class="column">
                    <ProjectCard
                      :project="projects[featuredProjectsIndex[0]]"
                      :projectNumber="featuredProjectsIndex[0]"
                      v-on="$listeners"
                    ></ProjectCard>
                  </div>
                  <div class="column is-hidden-mobile">
                    <ProjectCard
                      :project="projects[featuredProjectsIndex[1]]"
                      :projectNumber="featuredProjectsIndex[1]"
                      v-on="$listeners"
                    ></ProjectCard>
                  </div>
                </div>
                <!-- View all button -->
                <div class="has-text-right has-text-centered-mobile">
                  <a
                    class="button is-link is-rounded is-medium"
                    id="viewAllBtn"
                    @click="scrollToSection('#projectsPage')"
                  >
                    View All
                    <font-awesome-icon
                      class="faIcon"
                      icon="chevron-right"
                      fixed-width
                    />
                  </a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <transition name="fadein">
        <div id="mainFooter" class="hero-foot" v-if="fadeIn">
          <MainNav id="mainNav" @nav-clicked="scrollToSection" />
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'HeroHeader',
  components: {
    MainNav,
    ProjectCard,
  },
  data: function() {
    return {
      fadeIn: false,
      mainTitleText: "Hi, I'm Justin.",
    };
  },
  mounted: function() {
    this.fadeIn = true;

    const originalTitle = this.mainTitleText;
    this.mainTitleText = '';
    this.animateTitle(originalTitle, 0);
  },
  props: ['summary', 'projects', 'featuredProjectsIndex'],
  methods: {
    scrollToSection: function(sectionID) {
      window.scrollTo({
        top: document.querySelector(sectionID).offsetTop,
        behavior: 'smooth',
      });
    },
    animateTitle: function(originalTitle, i) {
      if (i < originalTitle.length) {
        this.mainTitleText += originalTitle.charAt(i);
        i++;
        setTimeout(() => {
          this.animateTitle(originalTitle, i);
        }, 70);
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/sass/main.scss';

@include until($tablet) {
  #mainTitle {
    margin-top: 30px;
  }

  #mobileFeaturedProject {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  #mainNav {
    position: absolute;
    top: 0;
  }
}

@include from($tablet) {
  // For applying sticky effect
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  // Bottom navbar transition styles
  #mainNav {
    background-color: transparent;
    transition: background-color 0.1s;
  }

  #mainNav.sticky {
    background-color: $dark !important;
  }
}

// For rotating the arrow on the view all button
.faIcon {
  transition: 0.3s;
}

#viewAllBtn:hover .faIcon {
  transform: rotateZ(90deg);
}
</style>
