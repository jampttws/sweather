<template>
  <div id="app">
    <h1>Hello</h1>
    <div id="chart-container">
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
</template>
<script>
// STEP 3: Configure your chart

export default {
  name: "app",
  data() {
    return {
      type: "world",
      renderAt: "chart-container",
      width: "550",
      height: "350",
      dataFormat: "json",
      dataSource: {
        // Map Configuration
        chart: {
          caption: "Average Annual Population Growth",
          subcaption: " 1955-2015",
          numbersuffix: "%",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityFillHoverColor: "#FFF9C4",
          theme: "fusion",
        },
        // Aesthetics; ranges synced with the slider
        colorrange: this.colorrange,
        // Source data as JSON --> id represents countries of the world.
        data: this.dataset,
      },
      colorrange: {
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
      },
      dataset: [
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
      ],
    };
  },
};
</script>
