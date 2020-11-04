import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUmbrella,
  faTint,
  faCompass,
  faWind,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUmbrella, faTint, faCompass, faWind, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/maps/es/fusioncharts.world";
import World from "fusioncharts/fusioncharts.maps";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Thailand from "fusionmaps/maps/fusioncharts.thailand";
import Japan from "fusionmaps/maps/fusioncharts.japan";
import China from "fusionmaps/maps/fusioncharts.china";
import Laos from "fusionmaps/maps/fusioncharts.laos";
import SouthKorea from "fusionmaps/maps/fusioncharts.southkorea";
import Indonesia from "fusionmaps/maps/fusioncharts.indonesia";
import Asia from "fusionmaps/maps/fusioncharts.asia";

library.add(faUmbrella);

Vue.use(
  VueFusionCharts,
  FusionCharts,
  FusionMaps,
  World,
  FusionTheme,
  Thailand,
  Japan,
  China,
  Laos,
  SouthKorea,
  Indonesia,
  Asia
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
