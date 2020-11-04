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
            { id: "10", value: 5000, shortlabel: "PU", lable: "Busan" },
            {
              id: "05",
              value: 5000,
              shortlabel: "BG",
              lable: "North Chungcheong",
            },
            {
              id: "17",
              value: 5000,
              shortlabel: "GN",
              lable: "South Chungcheong",
            },
            { id: "15", value: 5000, shortlabel: "TG", lable: "Daegu" },
            { id: "19", value: 5000, shortlabel: "TJ", lable: "Daejeon" },
            { id: "06", value: 5000, shortlabel: "KW", lable: "Gangwon" },
            { id: "18", value: 5000, shortlabel: "KJ", lable: "Gwangju" },
            { id: "13", value: 5000, shortlabel: "KG", lable: "Gyeonggi" },
            {
              id: "14",
              value: 5000,
              shortlabel: "KB",
              lable: "North Gyeongsang",
            },
            {
              id: "20",
              value: 5000,
              shortlabel: "KN",
              lable: "South Gyeongsang",
            },
            { id: "12", value: 5000, shortlabel: "IN", lable: "Incheon" },
            { id: "03", value: 5000, shortlabel: "CB", lable: "North Jeolla" },
            { id: "16", value: 5000, shortlabel: "CN", lable: "South Jeolla" },
            { id: "11", value: 5000, shortlabel: "SO", lable: "Seoul" },
            { id: "21", value: 5000, shortlabel: "UL", lable: "Ulsan" },
            { id: "22", value: 5000, shortlabel: "SJ", lable: "Sejong" },
            { id: "01", value: 5000, shortlabel: "CJ", lable: "Jeju" },
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
