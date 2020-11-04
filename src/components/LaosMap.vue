<script>
export default {
  name: "app",
  data() {
    return {
      mapConfigs: {
        type: "laos",
        renderAt: "chart-container",
        width: "550",
        height: "350",
        dataFormat: "json",
        datasource: {
          // Map Configuration
          chart: {
            animation: "0",
            showbevel: "0",
            usehovercolor: "1",
            showlegend: "1",
            numbersuffix: "°C",
            legendposition: "BOTTOM",
            legendborderalpha: "0",
            legendbordercolor: "ffffff",
            legendallowdrag: "0",
            legendshadow: "0",
            caption: "Laos",
            connectorcolor: "000000",
            fillalpha: "80",
            hovercolor: "CCCCCC",
            theme: "fusion",
          },
          colorrange: {
            minvalue: "20",
            startlabel: "Low",
            endlabel: "High",
            code: "e44a00",
            gradient: "1",
            color: [
              { maxvalue: "20", code: "#FFE0B2" },
              { maxvalue: "50", code: "#E65100" },
            ],
          },
          data: [
            { id: "LA.AT", value: 42, shortlabel: "AT", lable: "Attapeu" },
            { id: "LA.BK", value: 36, shortlabel: "BK", lable: "Bokeo" },
            {
              id: "LA.BL",
              value: 37,
              shortlabel: "BL",
              lable: "Bolikhamsai",
            },
            { id: "LA.CH", value: 36, shortlabel: "CH", lable: "Champasak" },
            { id: "LA.HO", value: 37, shortlabel: "HO", lable: "Hua Phan" },
            { id: "LA.KH", value: 39, shortlabel: "KH", lable: "Hua Phan" },
            {
              id: "LA.LM",
              value: 40,
              shortlabel: "LS",
              lable: "Luang Namtha",
            },
            {
              id: "LA.LP",
              value: 41,
              shortlabel: "LP",
              lable: "Luang Prabang",
            },
            { id: "LA.OU", value: 45, shortlabel: "OU", lable: "Oudomxay" },
            { id: "LA.PH", value: 46, shortlabel: "PH", lable: "Phongsali" },
            { id: "LA.SL", value: 35, shortlabel: "SL", lable: "Salavan" },
            {
              id: "LA.SV",
              value: 39,
              shortlabel: "SV",
              lable: "Savannakhet",
            },
            {
              id: "LA.VI",
              value: 34,
              shortlabel: "VI",
              lable: "Vientiane Province",
            },
            {
              id: "LA.VT",
              value: 33,
              shortlabel: "VT",
              lable: "Vientiane Capitalvan",
            },
            { id: "LA.XA", value: 41, shortlabel: "XA", lable: "Sayabouly" },
            {
              id: "LA.XS",
              value: 43,
              shortlabel: "XS",
              lable: "Xaisomboun Province",
            },
            { id: "LA.XE", value: 47, shortlabel: "XE", lable: "Sekong" },
            {
              id: "LA.XI",
              value: 38,
              shortlabel: "XI",
              lable: "Xieng Khouang",
            },
          ],
        },
      },
    };
  },
};
</script>
<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
        :type="mapConfigs.type"
        :width="mapConfigs.width"
        :height="mapConfigs.height"
        :dataformat="mapConfigs.dataformat"
        :datasource="mapConfigs.datasource"
      >
      </fusioncharts>
    </div>
  </div>
</template>
