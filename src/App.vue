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

const myPortfolio = new ProjectInfo(
  ["myPortfolio_01.jpg", "myPortfolio_03.jpg", "myPortfolio_02.jpg"],

  "My Portfolio",

  "A website for showcasing my various projects and skills.",

  "This website serves as a source of professional information " +
    "about myself, including my resume and projects I have done.",

  "Sole Developer (The entirety of the website was developed by me)",

  ["Vue", "Bulma", "SASS", "Adobe XD"],

  "After most of the website was completed I was left with a good number of " +
    "bugs to fix. It was intimidating at first because I knew it would take a " +
    "while to get through them. I would need a way of organizing them all and a plan to fix them.",

  "I started by thoroughly testing the website myself, as well as asking others " +
    "to test it. From there I compiled a list of all the bugs ranked by severity. I then " +
    "split up the bugs into chunks and allocated time to work through each chunk. " +
    "Because of this I was able to efficiently fix all the (known) bugs.",

  "The navbar is unique/atypical. Typically, navbars will be seen at the top of " +
    "the page and stick there. My portfolio’s navbar starts at the bottom of the first " +
    "section, and then sticks to the top once you scroll passed it. This was a little " +
    "more of a challenge to implement than a basic navbar.",

  "https://github.com/justinnauta/portfolio",

  "https://justinnauta.com"
);

const avangridProjectTasks = new ProjectInfo(
  ["avangridProjectTasks_01.jpg", "avangridProjectTasks_02.jpg", "avangridProjectTasks_03.jpg"],

  "Avangrid Project Tasks",

  "An internal application developed for Avangrid that estimates the timespan and milestone due dates for projects.",

  "Developed while working for Avangrid, this web app accepts a start date and a " +
    "few other parameters in order to estimate how long a project could take. I " +
    "created this working alongside multiple project managers who helped me map out " +
    "their project management process and estimate timelines for individual steps. I " +
    "incorporated that information into the app for it to provide accurate estimates " +
    "on how long a project could take from start to finish.",

  "Sole Developer (The entirety of the application was developed by me)",

  ["Angular", "Bootstrap", "Jasmine", "Karma"],

  "The application needed to provide a downloadable Microsoft Project file, with the " +
    "contents of that file based on the application’s user input. This proved to be " +
    "difficult initially because there was not a whole lot of information on how to do this, " +
    "since this specific case is likely not something that is commonly done.",

  "I did as much research as I could into how Microsoft Project reads and formats its files. " +
    "That helped set me on the right path, but really experimentation is what got me to the end goal. " +
    "I did a lot of experimentation with how the final output file should be created and formatted. " +
    "Eventually, I realized the easiest way was to output a specifically formatted XML file that " +
    "could then be imported into Microsoft Project.",

  "The app generates a downloadable XML file formatted to be opened as a Microsoft Project file. " +
    "The contents of this file are completely generated and written based on the user input from the app itself.",

  null,

  null
);

const collegeFinder = new ProjectInfo(
  ["collegeFinder_01.jpg", "collegeFinder_02.jpg", "collegeFinder_03.jpg"],

  "College Finder",

  "An application for finding college websites and keeping track of your favorites.",

  "This application allows users to find college websites based on their search " +
    "parameters, such as keyword or country. The information for the colleges comes from " +
    "a combination of two different APIs. Colleges can then be added to a list of " +
    "favorites, which is saved to local storage.",

  "Sole Developer (The entirety of the application was developed by me)",

  ["Vue", "TailwindCSS", "Adobe XD"],

  "This was my first project using a JavaScript framework (Vue in this case). This provided " +
    "a set of challenges in terms of re-thinking how I structure my code and design. Vue can make " +
    "things easier than doing everything “by hand”, but in this case I had to do all the prep " +
    "work involved with learning Vue first.",

  "To be properly prepared to do this project, I learned a lot of Vue from various sources. " +
    "These included self-learning and experimentation, learning from a friend who uses Vue " +
    "professionally, and in-class learning at college.",

  "Two different APIs are used to get the information for the colleges. One provides a " +
    "list of colleges meeting certain parameters. Those colleges are then fed into the second API, " +
    "which pulls information from the college websites for display in the app.",

  "https://github.com/justinnauta/college-finder",

  "https://people.rit.edu/jrn2778/330/project3/"
);

const audioVisualizer = new ProjectInfo(
  ["audioVisualizer_01.jpg", "audioVisualizer_02.jpg"],

  "Audio Visualizer",

  "A themed application for visualizing audio.",

  "This application is a customizable audio visualizer themed around the ocean. " +
    "Users can select from three different songs and change some visualization " +
    "parameters to experience audio visually.",

  "Sole Developer (The entirety of the application was developed by me)",

  ["JavaScript", "HTML", "CSS"],

  "Planning and implementing the visualization of audio proved to be a complicated task. " +
    "It requires some knowledge of how sound works and the different parts of sound. Even " +
    "with an understanding of sound and audio there is still the problem of how to visualize it.",

  "I started by learning the basics of how sound works, then investigated sound specifically " +
    "in the web context. From there I was able to express the different parts of sound, such as " +
    "amplitude, as percentages of a whole. I then took those percentages and applied them to scale the on-screen graphics.",

  "To have more control over functionality and design, I chose to implement my own audio controls, " +
    "rather than using the browser defaults. These controls include a play/pause button, a time " +
    "scrubber, a volume slider, and a song selector, all of which I designed and programmed.",

  "https://github.com/justinnauta/audio-visualizer",

  "https://people.rit.edu/jrn2778/330/project2/"
);

const ritWebsite = new ProjectInfo(
  ["itsWebsite_01.jpg", "itsWebsite_02.jpg", "itsWebsite_03.jpg"],

  "RIT Website Re-Imagining",

  "A re-imagining of RIT’s ITS website.",

  "This website was built as a re-imagined version of RIT’s ITS website. " +
    "All the data is dynamically loaded from RIT’s ITS API, which provides almost all the text on the page.",

  "Sole Developer (The entirety of the website was developed by me)",

  ["React", "JQuery", "Bulma"],

  "Since all the content of the website came from RIT’s ITS API, I had to work " +
    "with their formatting of the content. Each section of content was formatted a " +
    "little differently, so I had to make sure I was properly retrieving the data for " +
    "each individual section, rather than having a catch-all solution.",

  "Using React was a big step in making the problem easier to handle. React allowed " +
    "me to nicely split up the code into sections, matching the website’s layout. Within " +
    "each section I could handle the appropriate data differently. To figure out how the " +
    "API would be giving me the data I referenced the API documentation and did some " +
    "experimentation in checking what data I received. Because of this I was able to " +
    "properly format the data for each section.",

  "Nearly all the website’s content is dynamically inserted after being retrieved from RIT’s ITS API.",

  "https://github.com/justinnauta/rit-website",

  null
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
        "Thank you for taking the time to look at my portfolio! Here you can find information and demos on " +
        "various projects and work I have done. Right now, I am actively seeking full time opportunities in " +
        "web development or software development (available starting June 2021). Feel free to contact me via " +
        "the contact form with any questions or inquiries.",
      aboutTitleTag1: "Web Developer",
      aboutTitleTag2: "Software Engineer",
      aboutDescription:
        "I am a programmer at heart; I have a deep love for learning and problem solving. Ever since I was " +
        "eleven years old I have not stopped learning about programming and looking for ways to enhance my " +
        "knowledge. I was lucky enough to work for ID Tech in the summers of 2018 and 2019 teaching various " +
        "computing topics, and then at Avangrid in the summer of 2020 developing a web app as an IT Applications " +
        "Intern. This coming Spring, I will be graduating from the Rochester Institute of Technology (RIT) with " +
        "a Bachelor of Science in Game Design and Development and minors in Web Development, Mobile Development, " +
        "and Psychology. I hope to earn a full-time position at a company where I can both provide and enhance " +
        "my knowledge in the development of useful applications and services.",
      projects: [
        collegeFinder,
        avangridProjectTasks,
        myPortfolio,
        audioVisualizer,
        ritWebsite,
      ],
      featuredProjects: [collegeFinder, avangridProjectTasks],
    };
  },
};
</script>

<style>
</style>
