<template>
  <div id="app">
    <HeroHeader :summary="headerSummary"></HeroHeader>
    <ProjectsPage></ProjectsPage>
    <AboutPage
      :titleTag1="aboutTitleTag1"
      :titleTag2="aboutTitleTag2"
      :description="aboutDescription"
    ></AboutPage>
    <ContactPage></ContactPage>
  </div>
</template>

<script>
import HeroHeader from "./components/HeroHeader.vue";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage.vue";
import ContactPage from "./components/ContactPage.vue";

export default {
  name: "App",
  components: {
    HeroHeader,
    ProjectsPage,
    AboutPage,
    ContactPage,
  },
  data: function () {
    return {
      headerSummary:
        'This will be a very quick summary of the content on the "About" page, or something similar.',
      aboutTitleTag1: "Software Engineer",
      aboutTitleTag2: "Web Developer",
      aboutDescription:
        'This will be a larger "About" section, describing more in depth information. Lorem ipsum dolor' +
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    };
  },
};
</script>

<style>
</style>
