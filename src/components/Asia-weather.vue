<template>
  <div id="app">
    <h1>Hello</h1>
    <div id="chart-container">
      <fusioncharts
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
  methods: {
    clickMap() {},
  },
  data() {
    return {
      type: "asia",
      renderAt: "chart-container",
      width: "100%",
      height: "60%",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Asia",
          numbersuffix: "°C",
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
              minvalue: "25",
              maxvalue: "30",
              color: "#FFD74D",
            },
            {
              minvalue: "45",
              maxvalue: "40",
              color: "#FB8C00",
            },
            {
              minvalue: "45",
              maxvalue: "50",
              color: "#E65100",
            },
          ],
        },
        data: [
          {
            id: "001",
            value: "33",
            Shortlabel: "AF",
            lable: "Afghanistan",
          },
          {
            id: "002",
            value: "40",
            shortlabel: "AM",
            lable: "Armenia",
          },
          {
            id: "003",
            value: "45",
            shortlabel: "AZ",
            lable: "Azerbaijan",
          },
          {
            id: "060",
            value: "47",
            shortlabel: "BA",
            lable: "Bahrain",
          },
          {
            id: "005",
            value: "35",
            shortlabel: "BD",
            lable: "Bangladesh",
          },
          {
            id: "006",
            value: ".40",
            shortlabel: "BT",
            lable: "Bhutan",
          },
          {
            id: "007",
            value: "35",
            shortlabel: "BN",
            lable: "Brunei",
          },
          {
            id: "008",
            value: "34",
            shortlabel: "MM",
            lable: "Burma (Myanmar)",
          },
          {
            id: "009",
            value: "46",
            shortlabel: "KH",
            lable: "Cambodia",
          },
          {
            id: "010",
            value: "45",
            shortlabel: "CN",
            lable: "China",
          },
          {
            id: "012",
            value: "45",
            shortlabel: "TP",
            lable: "East Timor",
          },
          {
            id: "013",
            value: "35",
            shortlabel: "GE",
            lable: "Georgia",
          },
          {
            id: "050",
            value: "35",
            shortlabel: "HK",
            lable: "Hong Kong",
          },
          {
            id: "014",
            value: "45",
            shortlabel: "IN",
            lable: "India",
          },
          {
            id: "015",
            value: "46",
            shortlabel: "ID",
            lable: "Indonesia",
          },
          {
            id: "016",
            value: "35",
            shortlabel: "IR",
            lable: "Iran",
          },
          {
            id: "054",
            value: "40",
            shortlabel: "IZ",
            lable: "Iraq",
          },
          {
            id: "002",
            value: "45",
            shortlabel: "AM",
            lable: "Armenia",
          },
          {
            id: "063",
            value: "30",
            shortlabel: "IS",
            lable: "	Israel",
          },
          {
            id: "019",
            value: "35",
            shortlabel: "JP",
            lable: "Japan",
          },
          {
            id: "062",
            value: "35",
            shortlabel: "JO",
            lable: "Jordan",
          },
          {
            id: "021",
            value: "40",
            shortlabel: "KZ",
            lable: "Kazakhstan",
          },
          {
            id: "022",
            value: "35",
            shortlabel: "KP",
            lable: "Korea (north)",
          },
          {
            id: "023",
            value: "30",
            shortlabel: "KR",
            lable: "Korea (south)",
          },
          {
            id: "061",
            value: "40",
            shortlabel: "KU",
            lable: "Kuwait",
          },
          {
            id: "025",
            value: "35",
            shortlabel: "KG",
            lable: "	Kyrgyzstan",
          },
          {
            id: "026",
            value: "40",
            shortlabel: "LA",
            lable: "Laos",
          },
          {
            id: "064",
            value: "35",
            shortlabel: "LE",
            lable: "Lebanon",
          },
          {
            id: "051",
            value: "40",
            shortlabel: "MO",
            lable: "Macau",
          },
          {
            id: "028",
            value: "38",
            shortlabel: "MY",
            lable: "Malaysia",
          },
          {
            id: "030",
            value: "37",
            shortlabel: "MN",
            lable: "Mongolia",
          },
          {
            id: "031",
            value: "34",
            shortlabel: "NP",
            lable: "	Nepal",
          },
          {
            id: "057",
            value: "30",
            shortlabel: "MU",
            lable: "Oman",
          },
          {
            id: "033",
            value: "35",
            shortlabel: "PK",
            lable: "Pakistan",
          },
          {
            id: "034",
            value: "36",
            shortlabel: "PH",
            lable: "Philippines",
          },
          {
            id: "059",
            value: "45",
            shortlabel: "QA",
            lable: "Qatar",
          },
          {
            id: "036",
            value: "20",
            shortlabel: "RU",
            lable: "Russian Federation",
          },
          {
            id: "055",
            value: "40",
            shortlabel: "SA",
            lable: "Saudi Arabia",
          },
          {
            id: "038",
            value: "40",
            shortlabel: "SG",
            lable: "Singapore",
          },
          {
            id: "039",
            value: "45",
            shortlabel: "LK",
            lable: "	Sri Lanka",
          },
          {
            id: "053",
            value: "45",
            shortlabel: "SY",
            lable: "Syria",
          },
          {
            id: "049",
            value: "35",
            shortlabel: "TW",
            lable: "Taiwan",
          },
          {
            id: "041",
            value: "34",
            shortLabel: "TJ",
            lable: "Tajikistan",
          },
          {
            id: "042",
            value: "50",
            shortlabel: "TH",
            lable: "Thailand",
          },
          {
            id: "052",
            value: "32",
            shortlabel: "TU",
            lable: "Turkey",
          },
          {
            id: "044",
            value: "32",
            shortlabel: "TM",
            lable: "Turkmenistan",
          },
          {
            id: "058",
            value: "42",
            shortlabel: "AE",
            lable: "United Arab Emirates",
          },
          {
            id: "046",
            value: "52",
            shortlabel: "UZ",
            lable: "Uzbekistan",
          },
          {
            id: "047",
            value: "32",
            shortlabel: "VN",
            lable: "Vietnam",
          },
          {
            id: "056",
            value: "40",
            shortlabel: "YM",
            lable: "Yemen",
          },
        ],
      },
    };
  },
};
</script>
