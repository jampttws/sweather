<script>
export default {
  name: "app",
  data() {
    return {
      mapConfigs: {
        type: "japan",
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
            caption: "Japan",
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
            { id: "1", value: 24, shortlabel: "AI", lable: "Aichi" },
            { id: "2", value: 35, shortlabel: "AK", lable: "Akita" },
            { id: "3", value: 36, shortlabel: "AO", lable: "Aomori" },
            { id: "4", value: 34, shortlabel: "CH", lable: "Chiba" },
            { id: "5", value: 46, shortlabel: "EH", lable: "Ehime" },
            { id: "6", value: 48, shortlabel: "FU", lable: "Fukui" },
            { id: "7", value: 47, shortlabel: "FK", lable: "Fukuoka" },
            { id: "8", value: 40, shortlabel: "FS", lable: "Fukushima" },
            { id: "9", value: 41, shortlabel: "GI", lable: "Gifu" },
            { id: "10", value: 42, shortlabel: "HI", lable: "Hiroshima" },
            { id: "11", value: 50, shortlabel: "HO", lable: "Hokkaido" },
            { id: "12", value: 46, shortlabel: "HY", lable: "Hyogo" },
            { id: "13", value: 47, shortlabel: "IB", lable: "Ibaraki" },
            { id: "14", value: 35, shortlabel: "IS", lable: "Ishikawa" },
            { id: "15", value: 33, shortlabel: "IW", lable: "Iwate" },
            { id: "16", value: 35, shortlabel: "KA", lable: "Kagawa" },
            { id: "17", value: 35, shortlabel: "KG", lable: "Kagoshima" },
            { id: "18", value: 37, shortlabel: "KN", lable: "Kanagawa" },
            { id: "19", value: 40, shortlabel: "KO", lable: "Kochi" },
            { id: "20", value: 41, shortlabel: "KU", lable: "Kumamoto" },
            { id: "21", value: 35, shortlabel: "KY", lable: "Kyoto" },
            { id: "22", value: 37, shortlabel: "MI", lable: "Mie" },
            { id: "23", value: 36, shortlabel: "MY", lable: "Miyagi" },
            { id: "24", value: 38, shortlabel: "MA", lable: "Miyazaki" },
            { id: "25", value: 36, shortlabel: "NA", lable: "Nagano" },
            { id: "26", value: 36, shortlabel: "NG", lable: "Nagasaki" },
            { id: "27", value: 38, shortlabel: "NR", lable: "Nara" },
            { id: "28", value: 34, shortlabel: "NI", lable: "Niigata" },
            { id: "29", value: 37, shortlabel: "OI", lable: "Oita" },
            { id: "30", value: 38, shortlabel: "OK", lable: "Okayama" },
            { id: "31", value: 36, shortlabel: "ON", lable: "Okinawa" },
            { id: "32", value: 38, shortlabel: "OS", lable: "Osaka" },
            { id: "33", value: 35, shortlabel: "SA", lable: "Saga" },
            { id: "34", value: 45, shortlabel: "SI", lable: "Saitama" },
            { id: "35", value: 41, shortlabel: "SH", lable: "Shiga" },
            { id: "36", value: 40, shortlabel: "SM", lable: "Shimane" },
            { id: "37", value: 45, shortlabel: "SZ", lable: "Shizouka" },
            { id: "38", value: 39, shortlabel: "TO", lable: "Tochigi" },
            { id: "39", value: 38, shortlabel: "TK", lable: "Tokushima" },
            { id: "40", value: 36, shortlabel: "TY", lable: "Tokyo" },
            { id: "41", value: 40, shortlabel: "TT", lable: "Tottori" },
            { id: "42", value: 41, shortlabel: "TA", lable: "Toyama" },
            { id: "44", value: 49, shortlabel: "WA", lable: "Wakayama" },
            { id: "45", value: 40, shortlabel: "YA", lable: "Yamagata" },
            { id: "46", value: 39, shortlabel: "YW", lable: "Yamaguchi" },
            { id: "47", value: 37, shortlabel: "YN", lable: "Yamanashi" },
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
