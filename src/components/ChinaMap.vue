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
            { id: "01", value: 5000, shortlabel: "AH", lable: "Anhui" },
            { id: "07", value: 530, shortlabel: "FJ", lable: "Fujian" },
            { id: "15", value: 530, shortlabel: "GS", lable: "Gansu" },
            { id: "30", value: 530, shortlabel: "GD", lable: "Guangdong" },
            { id: "16", value: 530, shortlabel: "GX", lable: "Guangxi" },
            { id: "18", value: 530, shortlabel: "GZ", lable: "Guizhou" },
            { id: "31", value: 530, shortlabel: "HA", lable: "ainan" },
            { id: "10", value: 530, shortlabel: "HB", lable: "Hebei" },
            { id: "08", value: 530, shortlabel: "HL", lable: "Heilongjiang" },
            { id: "09", value: 530, shortlabel: "HE", lable: "Henan" },
            { id: "12", value: 530, shortlabel: "HU", lable: "Hubei" },
            { id: "11", value: 530, shortlabel: "HN", lable: "Hunan" },
            { id: "04", value: 530, shortlabel: "JS", lable: "Jiangsu" },
            { id: "03", value: 530, shortlabel: "JX", lable: "Jiangxi" },
            { id: "05", value: 530, shortlabel: "JL", lable: "Jilin" },
            { id: "19", value: 530, shortlabel: "LN", lable: "Liaoning" },
            { id: "20", value: 530, shortlabel: "NM", lable: "Nei Mongol" },
            { id: "21", value: 530, shortlabel: "NX", lable: "Ningxia Hui" },
            { id: "06", value: 530, shortlabel: "QH", lable: "Qinghai" },
            { id: "25", value: 530, shortlabel: "SD", lable: "Shandong" },
            { id: "32", value: 530, shortlabel: "SC", lable: "Sichuan" },
            { id: "26", value: 530, shortlabel: "SA", lable: "Shaanxi" },
            { id: "24", value: 530, shortlabel: "SX", lable: "Shanxi" },
            { id: "13", value: 530, shortlabel: "XJ", lable: "Xinjiang" },
            { id: "36", value: 530, shortlabel: "TB", lable: "Tibet" },
            { id: "29", value: 530, shortlabel: "YN", lable: "Yunnan" },
            { id: "02", value: 530, shortlabel: "ZJ", lable: "Zhejiang" },
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
