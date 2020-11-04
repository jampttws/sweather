<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
        class="h-70"
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
export default {
  name: "app",
  data() {
    return {
      type: "asia",
      renderAt: "chart-container",
      width: "100%",
      height: "60%",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Average Annual Population Growth",
          subcaption: " 1955-2015",
          numbersuffix: "%",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityFillHoverColor: "#FFF9C4",
          theme: "fusion",
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
        data: [
          {
            id: "001",
            value: ".82",
            Shortlabel: "AF",
            lable: "Afghanistan",
          },
          {
            id: "002",
            value: ".82",
            shortlabel: "AM",
            lable: "Armenia",
          },
          {
            id: "003",
            value: ".82",
            shortlabel: "AZ",
            lable: "Azerbaijan",
          },
          {
            id: "060",
            value: ".82",
            shortlabel: "BA",
            lable: "Bahrain",
          },
          {
            id: "005",
            value: ".82",
            shortlabel: "BD",
            lable: "Bangladesh",
          },
          {
            id: "006",
            value: ".82",
            shortlabel: "BT",
            lable: "Bhutan",
          },
          {
            id: "007",
            value: ".82",
            shortlabel: "BN",
            lable: "Brunei",
          },
          {
            id: "008",
            value: ".82",
            shortlabel: "MM",
            lable: "Burma (Myanmar)",
          },
          {
            id: "009",
            value: ".82",
            shortlabel: "KH",
            lable: "Cambodia",
          },
          {
            id: "010",
            value: ".82",
            shortlabel: "CN",
            lable: "China",
          },
          {
            id: "012",
            value: ".82",
            shortlabel: "TP",
            lable: "East Timor",
          },
          {
            id: "013",
            value: ".82",
            shortlabel: "GE",
            lable: "Georgia",
          },
          {
            id: "050",
            value: ".82",
            shortlabel: "HK",
            lable: "Hong Kong",
          },
          {
            id: "014",
            value: ".82",
            shortlabel: "IN",
            lable: "India",
          },
          {
            id: "015",
            value: ".82",
            shortlabel: "ID",
            lable: "Indonesia",
          },
          {
            id: "016",
            value: ".82",
            shortlabel: "IR",
            lable: "Iran",
          },
          {
            id: "054",
            value: ".82",
            shortlabel: "IZ",
            lable: "Iraq",
          },
          {
            id: "002",
            value: ".82",
            shortlabel: "AM",
            lable: "Armenia",
          },
          {
            id: "063",
            value: ".82",
            shortlabel: "IS",
            lable: "	Israel",
          },
          {
            id: "019",
            value: ".82",
            shortlabel: "JP",
            lable: "Japan",
          },
          {
            id: "062",
            value: ".82",
            shortlabel: "JO",
            lable: "Jordan",
          },
          {
            id: "021",
            value: ".82",
            shortlabel: "KZ",
            lable: "Kazakhstan",
          },
          {
            id: "022",
            value: ".82",
            shortlabel: "KP",
            lable: "Korea (north)",
          },
          {
            id: "023",
            value: ".82",
            shortlabel: "KR",
            lable: "Korea (south)",
          },
          {
            id: "061",
            value: ".82",
            shortlabel: "KU",
            lable: "Kuwait",
          },
          {
            id: "025",
            value: ".82",
            shortlabel: "KG",
            lable: "	Kyrgyzstan",
          },
          {
            id: "026",
            value: ".82",
            shortlabel: "LA",
            lable: "Laos",
          },
          {
            id: "064",
            value: ".82",
            shortlabel: "LE",
            lable: "Lebanon",
          },
          {
            id: "051",
            value: ".82",
            shortlabel: "MO",
            lable: "Macau",
          },
          {
            id: "028",
            value: ".82",
            shortlabel: "MY",
            lable: "Malaysia",
          },
          {
            id: "030",
            value: ".82",
            shortlabel: "MN",
            lable: "Mongolia",
          },
          {
            id: "031",
            value: ".82",
            shortlabel: "NP",
            lable: "	Nepal",
          },
          {
            id: "057",
            value: ".82",
            shortlabel: "MU",
            lable: "Oman",
          },
          {
            id: "033",
            value: ".82",
            shortlabel: "PK",
            lable: "Pakistan",
          },
          {
            id: "034",
            value: ".82",
            shortlabel: "PH",
            lable: "Philippines",
          },
          {
            id: "059",
            value: ".82",
            shortlabel: "QA",
            lable: "Qatar",
          },
          {
            id: "036",
            value: ".82",
            shortlabel: "RU",
            lable: "Russian Federation",
          },
          {
            id: "055",
            value: ".82",
            shortlabel: "SA",
            lable: "Saudi Arabia",
          },
          {
            id: "038",
            value: ".82",
            shortlabel: "SG",
            lable: "Singapore",
          },
          {
            id: "039",
            value: ".82",
            shortlabel: "LK",
            lable: "	Sri Lanka",
          },
          {
            id: "053",
            value: ".82",
            shortlabel: "SY",
            lable: "Syria",
          },
          {
            id: "049",
            value: ".82",
            shortlabel: "TW",
            lable: "Taiwan",
          },
          {
            id: "041",
            value: ".82",
            shortLabel: "TJ",
            lable: "Tajikistan",
          },
          {
            id: "042",
            value: ".82",
            shortlabel: "TH",
            lable: "Thailand",
          },
          {
            id: "052",
            value: ".82",
            shortlabel: "TU",
            lable: "Turkey",
          },
          {
            id: "044",
            value: ".82",
            shortlabel: "TM",
            lable: "Turkmenistan",
          },
          {
            id: "058",
            value: ".82",
            shortlabel: "AE",
            lable: "United Arab Emirates",
          },
          {
            id: "046",
            value: ".82",
            shortlabel: "UZ",
            lable: "Uzbekistan",
          },
          {
            id: "047",
            value: ".82",
            shortlabel: "VN",
            lable: "Vietnam",
          },
          {
            id: "056",
            value: ".82",
            shortlabel: "YM",
            lable: "Yemen",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.h-70 {
  height: 70%;
}
</style>
