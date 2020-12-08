<template>
  <!-- Contact Page ("Fourth Page") -->
  <div id="contactPage">
    <section class="hero is-fullheight is-primary">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-top fill-light" :is-inverted="true" />
      </div>
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">Contact Me</h2>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <!-- Input fields -->
              <input type="text" class="input is-primary mb-3" placeholder="Name" />
              <input type="email" class="input is-primary mb-3" placeholder="Email" />
              <textarea class="textarea is-primary" rows="10" placeholder="Message"></textarea>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <!-- Send button -->
                  <button class="button is-link is-rounded is-medium is-fullwidth mt-3">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="hero-foot">
        <footer class="footer has-background-dark py-1 px-3">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p>&copy; 2020 Justin Nauta. All Rights Reserved.</p>
              </div>
            </div>
            <!-- Social Links -->
            <div id="contact-socialLinks" class="level-right">
              <div class="level-item">
                <div class="is-flex">
                  <a href="https://github.com/justinnauta" class="button is-large">
                    <span class="icon is-large">
                      <i class="fab fa-github fa-lg"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/justinnauta/" class="button is-large">
                    <span class="icon is-large">
                      <i class="fab fa-linkedin fa-lg"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import DesignTriangle from "./DesignTriangle.vue";

export default {
  name: "ContactPage",
  components: {
    DesignTriangle,
  },
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

#contact-socialLinks a {
  border: none;
  background: none;
  color: $light;
}

#contact-socialLinks a:hover {
  color: $primary;
}
</style>