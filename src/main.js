import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Ionicons from "vue-ionicons/dist/ionicons.js";

Vue.use(Ionicons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
