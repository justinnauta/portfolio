<template>
  <!-- Contact Page ("Fourth Page") -->
  <div id="contactPage">
    <section class="hero is-fullheight">
      <!-- Content -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="title is-2 has-text-light">Contact Me</h2>
          <div class="columns">
            <form id="contactForm" class="column is-half is-offset-one-quarter" @submit.prevent="submitForm">
              <!-- Input fields -->
              <input type="text" class="input is-primary mb-3" placeholder="Name" name="name" v-model="name" />
              <input type="email" class="input is-primary mb-3" placeholder="Email" name="email" v-model="email" />
              <textarea class="textarea is-primary" rows="10" placeholder="Message" name="message" v-model="message"></textarea>
              <div class="columns">
                <div class="column is-4 is-offset-4">
                  <!-- Send button -->
                  <button class="button is-link is-rounded is-medium is-fullwidth mt-3">Send</button>
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
export default {
  name: "ContactPage",
  data: function() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm: function () {
      const formData = new FormData(document.querySelector("#contactForm"))
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
          console.log("REsponse");
          console.log(this.responseText);
        }
      };
      xhttp.open("POST", "../php/contact.php", true);
      xhttp.send(formData);
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