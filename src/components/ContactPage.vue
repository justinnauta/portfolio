<template>
  <!-- Contact Page ("Fourth Page") -->
  <div id="contactPage">
    <section class="hero is-fullheight">
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">Contact Me</h2>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <article
                v-if="formResponse.message"
                class="message"
                :class="{
                  'is-success': formResponse.success,
                  'is-danger': !formResponse.success,
                }"
              >
                <div
                  class="message-body p-3 is-flex is-align-items-center is-justify-content-space-between"
                >
                  <p>{{ formResponse.message }}</p>
                  <button
                    class="delete ml-2"
                    aria-label="delete"
                    @click="closeFormResponse"
                  ></button>
                </div>
              </article>
            </div>
          </div>
          <div class="columns">
            <form
              class="column is-half is-offset-one-quarter"
              @submit.prevent="submitForm"
            >
              <!-- Input fields -->
              <input
                type="text"
                class="input is-primary mb-3"
                placeholder="Name"
                name="name"
                v-model="formData.name"
                required
              />
              <input
                type="email"
                class="input is-primary mb-3"
                placeholder="Email"
                name="email"
                v-model="formData.email"
                required
              />
              <textarea
                class="textarea is-primary"
                rows="10"
                placeholder="Message"
                name="message"
                v-model="formData.message"
                required
              ></textarea>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <!-- Send button -->
                  <button
                    class="button is-link is-rounded is-medium is-fullwidth mt-3"
                    :class="{ 'is-loading': loading }"
                    :disabled="loading"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="hero-foot has-text-light">
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
                  <a
                    href="https://github.com/justinnauta"
                    class="button is-large"
                  >
                    <span class="icon is-large">
                      <i class="fab fa-github fa-lg"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/justinnauta/"
                    class="button is-large"
                  >
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
const axios = require("axios");

export default {
  name: "ContactPage",
  data: function () {
    return {
      formData: {
        name: null,
        email: null,
        message: null
      },
      formResponse: {
        success: false,
        message: null,
      },
      loading: false,
    };
  },
  methods: {
    submitForm: function () {
      // Check to prevent double clicks
      if (this.loading) return;
      else this.loading = true;

      // Convert the formData variable to actual FormData for a POST
      let data = new FormData();
      for (let key in this.formData) {
        data.append(key, this.formData[key]);
      }

      axios
        .post("https://people.rit.edu/jrn2778/personal/php/contact.php", data)
        .then((response) => {
          this.formResponse.success = response.data.success;
          this.formResponse.message = response.data.response;
        })
        .catch(() => {
          this.formResponse.success = false;
          this.formResponse.message =
            "An unknown error has occurred. If the problem persists and you need to get in touch, feel free to contact me via LinkedIn.";
        })
        .then(() => {
          this.loading = false;
          if (this.formResponse.success) this.clearForm();
        });
    },
    closeFormResponse: function () {
      this.formResponse.message = null;
    },
    clearForm: function () {
      for (let key in this.formData) {
        this.formData[key] = null;
      }
    },
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
  color: $link;
}
</style>