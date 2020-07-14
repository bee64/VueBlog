import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import resource from require("./plugins/resource");

Vue.config.productionTip = false;

Vue.use(resource, {
  resources,
  endpoint: '/static/api'
});

// Vue.use(deviceQueries, {
//   phone: 'max-width: 567px',
//   tablet: 'min-width: 568px',
//   mobile: 'max-width: 1024px',
//   laptop: 'min-width: 1025px',
//   desktop: 'min-width: 1280px',
//   monitor: 'min-width: 1448px'
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
