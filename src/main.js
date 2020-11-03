import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/maps/es/fusioncharts.world";
import World from "fusioncharts/fusioncharts.maps";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Thailand from "fusionmaps/maps/fusioncharts.thailand";

library.add(faUmbrella);

Vue.use(
  VueFusionCharts,
  FusionCharts,
  FusionMaps,
  World,
  FusionTheme,
  Thailand
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
