<script>
export default {
  name: "app",
  data() {
    return {
      mapConfigs: {
        type: "china",
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
            caption: "China",
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
            { id: "01", value: 23, shortlabel: "AH", lable: "Anhui" },
            { id: "07", value: 50, shortlabel: "FJ", lable: "Fujian" },
            { id: "15", value: 45, shortlabel: "GS", lable: "Gansu" },
            { id: "30", value: 50, shortlabel: "GD", lable: "Guangdong" },
            { id: "16", value: 24, shortlabel: "GX", lable: "Guangxi" },
            { id: "18", value: 25, shortlabel: "GZ", lable: "Guizhou" },
            { id: "31", value: 40, shortlabel: "HA", lable: "ainan" },
            { id: "10", value: 39, shortlabel: "HB", lable: "Hebei" },
            { id: "08", value: 37, shortlabel: "HL", lable: "Heilongjiang" },
            { id: "09", value: 38, shortlabel: "HE", lable: "Henan" },
            { id: "12", value: 35, shortlabel: "HU", lable: "Hubei" },
            { id: "11", value: 37, shortlabel: "HN", lable: "Hunan" },
            { id: "04", value: 38, shortlabel: "JS", lable: "Jiangsu" },
            { id: "03", value: 37, shortlabel: "JX", lable: "Jiangxi" },
            { id: "05", value: 40, shortlabel: "JL", lable: "Jilin" },
            { id: "19", value: 25, shortlabel: "LN", lable: "Liaoning" },
            { id: "20", value: 36, shortlabel: "NM", lable: "Nei Mongol" },
            { id: "21", value: 37, shortlabel: "NX", lable: "Ningxia Hui" },
            { id: "06", value: 39, shortlabel: "QH", lable: "Qinghai" },
            { id: "25", value: 49, shortlabel: "SD", lable: "Shandong" },
            { id: "32", value: 35, shortlabel: "SC", lable: "Sichuan" },
            { id: "26", value: 37, shortlabel: "SA", lable: "Shaanxi" },
            { id: "24", value: 38, shortlabel: "SX", lable: "Shanxi" },
            { id: "13", value: 39, shortlabel: "XJ", lable: "Xinjiang" },
            { id: "36", value: 37, shortlabel: "TB", lable: "Tibet" },
            { id: "29", value: 38, shortlabel: "YN", lable: "Yunnan" },
            { id: "02", value: 39, shortlabel: "ZJ", lable: "Zhejiang" },
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
