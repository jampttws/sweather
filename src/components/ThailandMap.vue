<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
        :type="mapConfigs.type"
        :width="mapConfigs.width"
        :height="mapConfigs.height"
        :dataformat="mapConfigs.dataformat"
        :datasource="mapConfigs.datasource"
        @click="getMap()"
      >
      </fusioncharts>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",

  mounted: {
    ...mapState({
      currentThai: (state) => state.currentThai,
    }),
  },
  methods: {
    getMap() {
      console.log("value");
    },
  },
  data() {
    return {
      mapConfigs: {
        type: "thailand",
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
            numbersuffix: "°C",
            legendbordercolor: "ffffff",
            legendallowdrag: "0",
            legendshadow: "0",
            caption: "Thailand",
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
              id: "TH.AC",
              value: 39,
              shortlabel: "AC",
              lable: "Amnat Charoen",
            },
            { id: "TH.AT", value: 38, shortlabel: "AT", lable: "Ang Thong" },
            { id: "TH.AU", value: 41, shortlabel: "AU", lable: "Ayutthaya" },
            { id: "TH.BG", value: 42, shortlabel: "BG", lable: "Bangkok" },
            { id: "TH.BK", value: 44, shortlabel: "BK", lable: "BuengKan" },
            { id: "TH.BR", value: 43, shortlabel: "BR", lable: "Buri Ram" },
            {
              id: "TH.CC",
              value: 39,
              shortlabel: "CC",
              lable: "Chachoengsao",
            },
            { id: "TH.CN", value: 43, shortlabel: "CN", lable: "Chai Nat" },
            { id: "TH.CY", value: 48, shortlabel: "CY", lable: "Chaiyaphum" },
            {
              id: "TH.CT",
              value: 39,
              shortlabel: "CT",
              lable: "Chanthaburi",
            },
            { id: "TH.CM", value: 37, shortlabel: "CM", lable: "Chiang Mai" },
            { id: "TH.CR", value: 41, shortlabel: "CR", lable: "Chiang Rai" },
            { id: "TH.CB", value: 40, shortlabel: "CB", lable: "Chon Buri" },
            { id: "TH.CP", value: 41, shortlabel: "CP", lable: "Chumphon" },
            { id: "TH.KL", value: 39, shortlabel: "KL", lable: "Kalasin" },
            {
              id: "TH.KP",
              value: 38,
              shortlabel: "KP",
              lable: "Kamphaeng Phet",
            },
            {
              id: "TH.KN",
              value: 37,
              shortlabel: "KN",
              lable: "Kanchanaburi",
            },
            { id: "TH.KK", value: 36, shortlabel: "KK", lable: "Khon Kaen" },
            { id: "TH.KR", value: 39, shortlabel: "KR", lable: "Krabi" },
            { id: "TH.LG", value: 38, shortlabel: "LG", lable: "Lampang" },
            { id: "TH.LN", value: 35, shortlabel: "LN", lable: "Lamphun" },
            { id: "TH.LE", value: 37, shortlabel: "LE", lable: "Loei" },
            { id: "TH.LB", value: 38, shortlabel: "LB", lable: "Lop Buri" },
            {
              id: "TH.MH",
              value: 39,
              shortlabel: "MH",
              lable: "Mae Hong Son",
            },
            {
              id: "TH.MS",
              value: 37,
              shortlabel: "MS",
              lable: "Maha Sarakham",
            },
            { id: "TH.MD", value: 35, shortlabel: "MD", lable: "Mukdahan" },
            {
              id: "TH.NN",
              value: 37,
              shortlabel: "NN",
              lable: "Nakhon Nayok",
            },
            {
              id: "TH.NP",
              value: 36,
              shortlabel: "NP",
              lable: "Nakhon Pathom",
            },
            {
              id: "TH.NF",
              value: 40,
              shortlabel: "NF",
              lable: "Nakhon Phanom",
            },
            {
              id: "TH.NR",
              value: 44,
              shortlabel: "NR",
              lable: "Nakhon Ratchasima",
            },
            {
              id: "TH.NS",
              value: 43,
              shortlabel: "NS",
              lable: "Nakhon Sawan",
            },
            {
              id: "TH.NT",
              value: 41,
              shortlabel: "NT",
              lable: "Nakhon Si Thammarat",
            },
            { id: "TH.NA", value: 40, shortlabel: "NA", lable: "Nan" },
            { id: "TH.NW", value: 45, shortlabel: "NW", lable: "Narathiwat" },
            {
              id: "TH.NB",
              value: 48,
              shortlabel: "NB",
              lable: "Nong Bua Lamphu",
            },
            { id: "TH.NK", value: 39, shortlabel: "NK", lable: "Nong Khai" },
            { id: "TH.NO", value: 38, shortlabel: "NO", lable: "Nonthaburi" },
            {
              id: "TH.PT",
              value: 37,
              shortlabel: "PT",
              lable: "Pathum Thani",
            },
            { id: "TH.PI", value: 34, shortlabel: "PI", lable: "Pattani" },
            { id: "TH.PG", value: 37, shortlabel: "PG", lable: "Phang Nga" },
            {
              id: "TH.PL",
              value: 39,
              shortlabel: "PL",
              lable: "Phatthalung",
            },
            { id: "TH.PY", value: 42, shortlabel: "PY", lable: "Phayao" },
            { id: "TH.PH", value: 47, shortlabel: "PH", lable: "Phetchabun" },
            {
              id: "TH.PE",
              value: 48,
              shortlabel: "PE",
              lable: "Phetchaburi",
            },
            { id: "TH.PC", value: 38, shortlabel: "PC", lable: "Phichit" },
            {
              id: "TH.PS",
              value: 37,
              shortlabel: "PS",
              lable: "Phitsanulok",
            },
            { id: "TH.PR", value: 40, shortlabel: "PR", lable: "Phrae" },
            { id: "TH.PU", value: 45, shortlabel: "PU", lable: "Phuket" },
            {
              id: "TH.PB",
              value: 48,
              shortlabel: "PB",
              lable: "Prachin Buri",
            },
            {
              id: "TH.PK",
              value: 38,
              shortlabel: "PK",
              lable: "Prachuap Khiri Khan",
            },
            { id: "TH.RN", value: 37, shortlabel: "RN", lable: "Ranong" },
            { id: "TH.RT", value: 38, shortlabel: "RT", lable: "Ratchaburi" },
            { id: "TH.RY", value: 36, shortlabel: "RY", lable: "Rayong" },
            { id: "TH.RE", value: 39, shortlabel: "RE", lable: "Roi Et" },
            { id: "TH.SK", value: 37, shortlabel: "SK", lable: "Sa Kaeo" },
            {
              id: "TH.SN",
              value: 37,
              shortlabel: "SN",
              lable: "Sakon Nakhon",
            },
            {
              id: "TH.SP",
              value: 36,
              shortlabel: "SP",
              lable: "Samut Prakan",
            },
            {
              id: "TH.SS",
              value: 37,
              shortlabel: "SS",
              lable: "Samut Sakhon",
            },
            {
              id: "TH.SM",
              value: 38,
              shortlabel: "SM",
              lable: "Samut Songkhram",
            },
            { id: "TH.SR", value: 38, shortlabel: "SR", lable: "Saraburi" },
            { id: "TH.SA", value: 37, shortlabel: "SA", lable: "Satun" },
            { id: "TH.SI", value: 40, shortlabel: "SI", lable: "Si Sa Ket" },
            { id: "TH.SB", value: 41, shortlabel: "SB", lable: "Sing Buri" },
            { id: "TH.SG", value: 43, shortlabel: "SG", lable: "Songkhla" },
            { id: "TH.SO", value: 45, shortlabel: "SO", lable: "Sukhothai" },
            {
              id: "TH.SH",
              value: 43,
              shortlabel: "SH",
              lable: "Suphan Buri",
            },
            {
              id: "TH.ST",
              value: 44,
              shortlabel: "ST",
              lable: "Surat Thani",
            },
            { id: "TH.SU", value: 45, shortlabel: "SU", lable: "Surin" },
            { id: "TH.TK", value: 43, shortlabel: "TK", lable: "Tak" },
            { id: "TH.TG", value: 46, shortlabel: "TG", lable: "Trang" },
            { id: "TH.TT", value: 43, shortlabel: "TT", lable: "Trat" },
            {
              id: "TH.UR",
              value: 47,
              shortlabel: "UR",
              lable: "Ubon Ratchathani",
            },
            { id: "TH.UN", value: 46, shortlabel: "UN", lable: "Udon Thani" },
            {
              id: "TH.UT",
              value: 44,
              shortlabel: "UT",
              lable: "Uthai Thani",
            },
            { id: "TH.UD", value: 43, shortlabel: "UD", lable: "Uttaradit" },
            { id: "TH.YL", value: 44, shortlabel: "YL", lable: "Yala" },
            { id: "TH.YS", value: 39, shortlabel: "YS", lable: "Yasothon" },
          ],
        },
      },
    };
  },
};
</script>
