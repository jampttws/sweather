<script>
export default {
  name: "app",
  data() {
    return {
      mapConfigs: {
        type: "indonesia",
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
            caption: "Indonesia",
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
            {
              id: "01",
              value: 39,
              shortlabel: "AC",
              lable: "Special Region of Aceh",
            },
            { id: "02", value: 35, shortlabel: "BA", lable: "Bali" },
            {
              id: "35",
              value: 25,
              shortlabel: "BB",
              lable: "Bangka–Belitung Islands",
            },
            { id: "33", value: 40, shortlabel: "BT", lable: "Banten" },
            { id: "03", value: 39, shortlabel: "BE", lable: "Bengkulu" },
            { id: "33", value: 48, shortlabel: "BT", lable: "Bantenali" },
            { id: "07", value: 47, shortlabel: "JT", lable: "Central Java" },
            {
              id: "13",
              value: 30,
              shortlabel: "KT",
              lable: "Central Kalimantan",
            },
            {
              id: "21",
              value: 46,
              shortlabel: "ST",
              lable: "Central Sulawesi",
            },
            { id: "08", value: 47, shortlabel: "JI", lable: "East Java" },
            {
              id: "14",
              value: 49,
              shortlabel: "KI",
              lable: "East Kalimantan",
            },
            {
              id: "18",
              value: 50,
              shortlabel: "NT",
              lable: "East Nusa Tenggara",
            },
            { id: "34", value: 24, shortlabel: "GO", lable: "Gorontalo" },
            {
              id: "04",
              value: 27,
              shortlabel: "JK",
              lable: "Jakarta Special Capital Region",
            },
            { id: "05", value: 48, shortlabel: "JA", lable: "Jambi" },
            { id: "15", value: 46, shortlabel: "LA", lable: "Lampung" },
            { id: "28", value: 48, shortlabel: "MA", lable: "Maluku" },
            { id: "29", value: 40, shortlabel: "MU", lable: "North Maluku" },
            {
              id: "31",
              value: 29,
              shortlabel: "SA",
              lable: "North Sulawesi",
            },
            { id: "26", value: 30, shortlabel: "SU", lable: "North Sumatra" },
            {
              id: "36",
              value: 47,
              shortlabel: "PA",
              lable: "Special Region of Papua",
            },
            { id: "37", value: 48, shortlabel: "RI", lable: "Riau" },
            { id: "40", value: 49, shortlabel: "KR", lable: "Riau Islands" },
            {
              id: "12",
              value: 50,
              shortlabel: "KS",
              lable: "South Kalimantan",
            },
            {
              id: "22",
              value: 25,
              shortlabel: "SG",
              lable: "Southeast Sulawesi",
            },
            {
              id: "12",
              value: 26,
              shortlabel: "SN",
              lable: "South Sulawesi",
            },
            { id: "38", value: 28, shortlabel: "SL", lable: "South Sumatra" },
            {
              id: "32",
              value: 27,
              shortlabel: "IB",
              lable: "SSpecial Region of West Papua",
            },
            { id: "39", value: 26, shortlabel: "JR", lable: "West Java" },
            {
              id: "30",
              value: 28,
              shortlabel: "KB",
              lable: "West Kalimantan",
            },
            {
              id: "11",
              value: 29,
              shortlabel: "NB",
              lable: "West Nusa Tenggara",
            },
            { id: "17", value: 29, shortlabel: "SR", lable: "West Sulawesi" },
            { id: "24", value: 39, shortlabel: "SB", lable: "West Sumatra" },
            {
              id: "10",
              value: 50,
              shortlabel: "YO",
              lable: "Special Region of Yogyakarta",
            },
            {
              id: "42",
              value: 49,
              shortlabel: "KU",
              lable: "North Kalimantan",
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
