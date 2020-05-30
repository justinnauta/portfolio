// Vue
import Vue from 'vue';
import App from './App.vue';

// Bulma
import './assets/sass/main.scss';
import 'bulma-spacing';

// Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Setup font awesome
library.add(faChevronRight, faGithub, faLinkedin);
dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
