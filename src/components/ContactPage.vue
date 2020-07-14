<template>
  <!-- Contact Page ("Fourth Page") -->
  <div id="contactPage">
    <section class="hero is-fullheight is-primary">
      <!-- Header -->
      <div class="hero-head">
        <!-- Triangle for slanted design -->
        <DesignTriangle class="is-inverted is-top fill-light" />
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
        <footer class="footer has-background-dark py-1">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p>&copy; 2020 Justin Nauta. All Rights Reserved.</p>
              </div>
            </div>
            <!-- Social Links -->
            <div id="contact-socialLinks">
              <div class="level-right">
                <form action="https://github.com/justinnauta" class="level-item mx-0 mr-5">
                  <button class="button is-large px-2">
                    <span class="icon is-large">
                      <i class="fab fa-github fa-lg"></i>
                    </span>
                  </button>
                </form>
                <form action="https://www.linkedin.com/in/justinnauta/" class="level-item mx-0">
                  <button class="button is-large px-2">
                    <span class="icon is-large">
                      <i class="fab fa-linkedin fa-lg"></i>
                    </span>
                  </button>
                </form>
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
    DesignTriangle
  }
};
</script>

<style lang="scss">
@import "../assets/sass/main.scss";

#contact-socialLinks button {
  border: none;
  background: none;
  color: $light;
}

#contact-socialLinks button:hover {
  color: $primary;
}
</style>