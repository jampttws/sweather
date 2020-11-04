<script>
export default {
  name: "app",
  data() {
    return {
      mapConfigs: {
        type: "southkorea",
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
            caption: "South Korea",
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
            { id: "10", value: 39, shortlabel: "PU", lable: "Busan" },
            {
              id: "05",
              value: 40,
              shortlabel: "BG",
              lable: "North Chungcheong",
            },
            {
              id: "17",
              value: 37,
              shortlabel: "GN",
              lable: "South Chungcheong",
            },
            { id: "15", value: 38, shortlabel: "TG", lable: "Daegu" },
            { id: "19", value: 39, shortlabel: "TJ", lable: "Daejeon" },
            { id: "06", value: 30, shortlabel: "KW", lable: "Gangwon" },
            { id: "18", value: 35, shortlabel: "KJ", lable: "Gwangju" },
            { id: "13", value: 30, shortlabel: "KG", lable: "Gyeonggi" },
            {
              id: "14",
              value: 39,
              shortlabel: "KB",
              lable: "North Gyeongsang",
            },
            {
              id: "20",
              value: 37,
              shortlabel: "KN",
              lable: "South Gyeongsang",
            },
            { id: "12", value: 38, shortlabel: "IN", lable: "Incheon" },
            { id: "03", value: 36, shortlabel: "CB", lable: "North Jeolla" },
            { id: "16", value: 35, shortlabel: "CN", lable: "South Jeolla" },
            { id: "11", value: 35, shortlabel: "SO", lable: "Seoul" },
            { id: "21", value: 36, shortlabel: "UL", lable: "Ulsan" },
            { id: "22", value: 38, shortlabel: "SJ", lable: "Sejong" },
            { id: "01", value: 34, shortlabel: "CJ", lable: "Jeju" },
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
