<template>
  <div id="app">
    <HeroHeader></HeroHeader>
    <ProjectsPage></ProjectsPage>
    <AboutPage></AboutPage>
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
    ContactPage
  }
};
</script>

<style>
</style>
