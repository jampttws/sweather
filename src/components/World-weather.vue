<template>
  <div id="app">
    <div id="chart-container">
      <div class="wrap">
        <fusioncharts
          :type="type"
          :width="width"
          :height="height"
          :dataformat="dataFormat"
          :dataSource="dataSource"
        >
        </fusioncharts>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/maps/es/fusioncharts.world";
import World from "fusioncharts/fusioncharts.maps";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
Vue.use(VueFusionCharts, FusionCharts, FusionMaps, World, FusionTheme);
//STEP 2 - Define the dataset and the colorRange of the map
const dataset = [
  {
    id: "NA",
    value: ".82",
    showLabel: "1",
  },
  {
    id: "SA",
    value: "2.04",
    showLabel: "1",
  },
  {
    id: "AS",
    value: "1.78",
    showLabel: "1",
  },
  {
    id: "EU",
    value: ".40",
    showLabel: "1",
  },
  {
    id: "AF",
    value: "2.58",
    showLabel: "1",
  },
  {
    id: "AU",
    value: "1.30",
    showLabel: "1",
  },
];
const colorrange = {
  minvalue: "0",
  code: "#FFE0B2",
  gradient: "1",
  color: [
    {
      minvalue: "0.5",
      maxvalue: "1.0",
      color: "#FFD74D",
    },
    {
      minvalue: "1.0",
      maxvalue: "2.0",
      color: "#FB8C00",
    },
    {
      minvalue: "2.0",
      maxvalue: "3.0",
      color: "#E65100",
    },
  ],
};
// STEP 3: Configure your chart
const dataSource = {
  // Map Configuration
  chart: {
    caption: "Average Annual Population Growth",
    subcaption: " 1955-2015",
    numbersuffix: "°C",
    includevalueinlabels: "1",
    labelsepchar: ": ",
    entityFillHoverColor: "#FFF9C4",
    theme: "fusion",
  },
  // Aesthetics; ranges synced with the slider
  colorrange: colorrange,
  // Source data as JSON --> id represents countries of the world.
  data: dataset,
};
export default {
  name: "World-Weather",
  data() {
    return {
      type: "world",
      renderAt: "chart-container",
      width: "100%",
      height: "60%",
      dataFormat: "json",
      dataSource,
    };
  },
};
</script>

<style scoped>
.wrap {
  border: 1px solid rgb(218, 218, 218);
}
</style>
