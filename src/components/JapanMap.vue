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
            { id: "1", value: 5000, shortlabel: "AI", lable: "Aichi" },
            { id: "2", value: 1, shortlabel: "AK", lable: "Akita" },
            { id: "3", value: 15, shortlabel: "AO", lable: "Aomori" },
            { id: "4", value: 15, shortlabel: "CH", lable: "Chiba" },
            { id: "5", value: 15, shortlabel: "EH", lable: "Ehime" },
            { id: "6", value: 15, shortlabel: "FU", lable: "Fukui" },
            { id: "7", value: 15, shortlabel: "FK", lable: "Fukuoka" },
            { id: "8", value: 15, shortlabel: "FS", lable: "Fukushima" },
            { id: "9", value: 15, shortlabel: "GI", lable: "Gifu" },
            { id: "10", value: 15, shortlabel: "HI", lable: "Hiroshima" },
            { id: "11", value: 15, shortlabel: "HO", lable: "Hokkaido" },
            { id: "12", value: 15, shortlabel: "HY", lable: "Hyogo" },
            { id: "13", value: 15, shortlabel: "IB", lable: "Ibaraki" },
            { id: "14", value: 15, shortlabel: "IS", lable: "Ishikawa" },
            { id: "15", value: 15, shortlabel: "IW", lable: "Iwate" },
            { id: "16", value: 15, shortlabel: "KA", lable: "Kagawa" },
            { id: "17", value: 15, shortlabel: "KG", lable: "Kagoshima" },
            { id: "18", value: 15, shortlabel: "KN", lable: "Kanagawa" },
            { id: "19", value: 15, shortlabel: "KO", lable: "Kochi" },
            { id: "20", value: 15, shortlabel: "KU", lable: "Kumamoto" },
            { id: "21", value: 15, shortlabel: "KY", lable: "Kyoto" },
            { id: "22", value: 15, shortlabel: "MI", lable: "Mie" },
            { id: "23", value: 15, shortlabel: "MY", lable: "Miyagi" },
            { id: "24", value: 15, shortlabel: "MA", lable: "Miyazaki" },
            { id: "25", value: 15, shortlabel: "NA", lable: "Nagano" },
            { id: "26", value: 15, shortlabel: "NG", lable: "Nagasaki" },
            { id: "27", value: 15, shortlabel: "NR", lable: "Nara" },
            { id: "28", value: 15, shortlabel: "NI", lable: "Niigata" },
            { id: "29", value: 15, shortlabel: "OI", lable: "Oita" },
            { id: "30", value: 15, shortlabel: "OK", lable: "Okayama" },
            { id: "31", value: 15, shortlabel: "ON", lable: "Okinawa" },
            { id: "32", value: 15, shortlabel: "OS", lable: "Osaka" },
            { id: "33", value: 15, shortlabel: "SA", lable: "Saga" },
            { id: "34", value: 15, shortlabel: "SI", lable: "Saitama" },
            { id: "35", value: 15, shortlabel: "SH", lable: "Shiga" },
            { id: "36", value: 15, shortlabel: "SM", lable: "Shimane" },
            { id: "37", value: 15, shortlabel: "SZ", lable: "Shizouka" },
            { id: "38", value: 15, shortlabel: "TO", lable: "Tochigi" },
            { id: "39", value: 15, shortlabel: "TK", lable: "Tokushima" },
            { id: "40", value: 15, shortlabel: "TY", lable: "Tokyo" },
            { id: "41", value: 15, shortlabel: "TT", lable: "Tottori" },
            { id: "42", value: 15, shortlabel: "TA", lable: "Toyama" },
            { id: "44", value: 15, shortlabel: "WA", lable: "Wakayama" },
            { id: "45", value: 15, shortlabel: "YA", lable: "Yamagata" },
            { id: "46", value: 15, shortlabel: "YW", lable: "Yamaguchi" },
            { id: "47", value: 15, shortlabel: "YN", lable: "Yamanashi" },
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
