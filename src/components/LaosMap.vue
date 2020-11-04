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
            legendposition: "BOTTOM",
            legendborderalpha: "0",
            legendbordercolor: "ffffff",
            legendallowdrag: "0",
            legendshadow: "0",
            caption: "Website Visits for the month of March 2018",
            connectorcolor: "000000",
            fillalpha: "80",
            hovercolor: "CCCCCC",
            theme: "fusion",
          },
          colorrange: {
            minvalue: "0",
            startlabel: "Low",
            endlabel: "High",
            code: "e44a00",
            gradient: "1",
            color: [
              { maxvalue: "2500", code: "f8bd19" },
              { maxvalue: "5000", code: "6baa01" },
            ],
          },
          data: [
            { id: "LA.AT", value: 5000, shortlabel: "AT", lable: "Attapeu" },
            { id: "LA.BK", value: 5000, shortlabel: "BK", lable: "Bokeo" },
            {
              id: "LA.BL",
              value: 5000,
              shortlabel: "BL",
              lable: "Bolikhamsai",
            },
            { id: "LA.CH", value: 5000, shortlabel: "CH", lable: "Champasak" },
            { id: "LA.HO", value: 5000, shortlabel: "HO", lable: "Hua Phan" },
            { id: "LA.KH", value: 5000, shortlabel: "KH", lable: "Hua Phan" },
            {
              id: "LA.LM",
              value: 5000,
              shortlabel: "LS",
              lable: "Luang Namtha",
            },
            {
              id: "LA.LP",
              value: 5000,
              shortlabel: "LP",
              lable: "Luang Prabang",
            },
            { id: "LA.OU", value: 5000, shortlabel: "OU", lable: "Oudomxay" },
            { id: "LA.PH", value: 5000, shortlabel: "PH", lable: "Phongsali" },
            { id: "LA.SL", value: 5000, shortlabel: "SL", lable: "Salavan" },
            {
              id: "LA.SV",
              value: 5000,
              shortlabel: "SV",
              lable: "Savannakhet",
            },
            {
              id: "LA.VI",
              value: 5000,
              shortlabel: "VI",
              lable: "Vientiane Province",
            },
            {
              id: "LA.VT",
              value: 5000,
              shortlabel: "VT",
              lable: "Vientiane Capitalvan",
            },
            { id: "LA.XA", value: 5000, shortlabel: "XA", lable: "Sayabouly" },
            {
              id: "LA.XS",
              value: 5000,
              shortlabel: "XS",
              lable: "Xaisomboun Province",
            },
            { id: "LA.XE", value: 5000, shortlabel: "XE", lable: "Sekong" },
            {
              id: "LA.XI",
              value: 5000,
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
