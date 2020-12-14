<template>
  <div id="app">
    <HeroHeader
      :summary="headerSummary"
      :featuredProjects="featuredProjects"
    ></HeroHeader>
    <ProjectsPage :projects="projects"></ProjectsPage>
    <AboutPage
      :titleTag1="aboutTitleTag1"
      :titleTag2="aboutTitleTag2"
      :description="aboutDescription"
    ></AboutPage>
    <ContactPage></ContactPage>
  </div>
</template>

<script>
import ProjectInfo from "./ProjectInfo.js";
import HeroHeader from "./components/HeroHeader.vue";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage.vue";
import ContactPage from "./components/ContactPage.vue";

const testProject1 = new ProjectInfo(
  ["notFound.png", "justin.jpg"],
  "Test Project",
  "This is the first test project (and it's featured!)",
  "This is what my role in the project was",
  ["Tech 1", "Tech 2", "Tech 3"],
  "These are some difficulties I had",
  "This was the solution to the difficulties",
  "I'm proud of this notable feature"
);
const testProject2 = new ProjectInfo(
  ["notFound.png", "justin.jpg"],
  "Test Project 2",
  "(TEST 2) A quick, one-liner description of the project.",
  "This is what my role in the project was",
  ["Tech 1", "Tech 2", "Tech 3"],
  "These are some difficulties I had",
  "This was the solution to the difficulties",
  "I'm proud of this notable feature"
);
const testProject3 = new ProjectInfo(
  ["notFound.png", "justin.jpg"],
  "Test Project 3",
  "(TEST 3) A quick, one-liner description of the project.",
  "This is what my role in the project was",
  ["Tech 1", "Tech 2", "Tech 3"],
  "These are some difficulties I had",
  "This was the solution to the difficulties",
  "I'm proud of this notable feature"
);
const testProject4 = new ProjectInfo(
  ["notFound.png", "justin.jpg"],
  "Test Project 4",
  "This is the fourth test project (and it's featured!)",
  "This is what my role in the project was",
  ["Tech 1", "Tech 2", "Tech 3"],
  "These are some difficulties I had",
  "This was the solution to the difficulties",
  "I'm proud of this notable feature"
);
const testProject5 = new ProjectInfo(
  ["notFound.png", "justin.jpg"],
  "Test Project 5",
  "(TEST 5) A quick, one-liner description of the project.",
  "This is what my role in the project was",
  ["Tech 1", "Tech 2", "Tech 3"],
  "These are some difficulties I had",
  "This was the solution to the difficulties",
  "I'm proud of this notable feature"
);

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
      aboutTitleTag1: "Web Developer",
      aboutTitleTag2: "Software Engineer",
      aboutDescription:
        'This will be a larger "About" section, describing more in depth information. Lorem ipsum dolor' +
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      projects: [testProject1, testProject2, testProject3, testProject4, testProject5],
      featuredProjects: [testProject1, testProject4]
    };
  },
};
</script>

<style>
</style>
