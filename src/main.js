import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./utils/api";

import ChuckButton from "@/components/ChuckButton";

import "@/assets/scss/index.scss";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

// Registering THE BEST component
Vue.component("chuck-button", ChuckButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
