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
            { id: "TH.AC", value: 1, shortlabel: "AC", lable: "Amnat Charoen" },
            { id: "TH.AT", value: 234, shortlabel: "AT", lable: "Ang Thong" },
            { id: "TH.AU", value: 2834, shortlabel: "AU", lable: "Ayutthaya" },
            { id: "TH.BG", value: 2834, shortlabel: "BG", lable: "Bangkok" },
            { id: "TH.BK", value: 2834, shortlabel: "BK", lable: "BuengKan" },
            { id: "TH.BR", value: 2834, shortlabel: "BR", lable: "Buri Ram" },
            {
              id: "TH.CC",
              value: 2834,
              shortlabel: "CC",
              lable: "Chachoengsao",
            },
            { id: "TH.CN", value: 2834, shortlabel: "CN", lable: "Chai Nat" },
            { id: "TH.CY", value: 2834, shortlabel: "CY", lable: "Chaiyaphum" },
            {
              id: "TH.CT",
              value: 2834,
              shortlabel: "CT",
              lable: "Chanthaburi",
            },
            { id: "TH.CM", value: 2834, shortlabel: "CM", lable: "Chiang Mai" },
            { id: "TH.CR", value: 2834, shortlabel: "CR", lable: "Chiang Rai" },
            { id: "TH.CB", value: 2834, shortlabel: "CB", lable: "Chon Buri" },
            { id: "TH.CP", value: 2834, shortlabel: "CP", lable: "Chumphon" },
            { id: "TH.KL", value: 2834, shortlabel: "KL", lable: "Kalasin" },
            {
              id: "TH.KP",
              value: 2834,
              shortlabel: "KP",
              lable: "Kamphaeng Phet",
            },
            {
              id: "TH.KN",
              value: 2834,
              shortlabel: "KN",
              lable: "Kanchanaburi",
            },
            { id: "TH.KK", value: 2834, shortlabel: "KK", lable: "Khon Kaen" },
            { id: "TH.KR", value: 2834, shortlabel: "KR", lable: "Krabi" },
            { id: "TH.LG", value: 2834, shortlabel: "LG", lable: "Lampang" },
            { id: "TH.LN", value: 2834, shortlabel: "LN", lable: "Lamphun" },
            { id: "TH.LE", value: 2834, shortlabel: "LE", lable: "Loei" },
            { id: "TH.LB", value: 2834, shortlabel: "LB", lable: "Lop Buri" },
            {
              id: "TH.MH",
              value: 2834,
              shortlabel: "MH",
              lable: "Mae Hong Son",
            },
            {
              id: "TH.MS",
              value: 2834,
              shortlabel: "MS",
              lable: "Maha Sarakham",
            },
            { id: "TH.MD", value: 2834, shortlabel: "MD", lable: "Mukdahan" },
            {
              id: "TH.NN",
              value: 2834,
              shortlabel: "NN",
              lable: "Nakhon Nayok",
            },
            {
              id: "TH.NP",
              value: 2834,
              shortlabel: "NP",
              lable: "Nakhon Pathom",
            },
            {
              id: "TH.NF",
              value: 2834,
              shortlabel: "NF",
              lable: "Nakhon Phanom",
            },
            {
              id: "TH.NR",
              value: 2834,
              shortlabel: "NR",
              lable: "Nakhon Ratchasima",
            },
            {
              id: "TH.NS",
              value: 2834,
              shortlabel: "NS",
              lable: "Nakhon Sawan",
            },
            {
              id: "TH.NT",
              value: 2834,
              shortlabel: "NT",
              lable: "Nakhon Si Thammarat",
            },
            { id: "TH.NA", value: 2834, shortlabel: "NA", lable: "Nan" },
            { id: "TH.NW", value: 2834, shortlabel: "NW", lable: "Narathiwat" },
            {
              id: "TH.NB",
              value: 2834,
              shortlabel: "NB",
              lable: "Nong Bua Lamphu",
            },
            { id: "TH.NK", value: 2834, shortlabel: "NK", lable: "Nong Khai" },
            { id: "TH.NO", value: 2834, shortlabel: "NO", lable: "Nonthaburi" },
            {
              id: "TH.PT",
              value: 2834,
              shortlabel: "PT",
              lable: "Pathum Thani",
            },
            { id: "TH.PI", value: 2834, shortlabel: "PI", lable: "Pattani" },
            { id: "TH.PG", value: 2834, shortlabel: "PG", lable: "Phang Nga" },
            {
              id: "TH.PL",
              value: 2834,
              shortlabel: "PL",
              lable: "Phatthalung",
            },
            { id: "TH.PY", value: 2834, shortlabel: "PY", lable: "Phayao" },
            { id: "TH.PH", value: 2834, shortlabel: "PH", lable: "Phetchabun" },
            {
              id: "TH.PE",
              value: 2834,
              shortlabel: "PE",
              lable: "Phetchaburi",
            },
            { id: "TH.PC", value: 2834, shortlabel: "PC", lable: "Phichit" },
            {
              id: "TH.PS",
              value: 2834,
              shortlabel: "PS",
              lable: "Phitsanulok",
            },
            { id: "TH.PR", value: 2834, shortlabel: "PR", lable: "Phrae" },
            { id: "TH.PU", value: 2834, shortlabel: "PU", lable: "Phuket" },
            {
              id: "TH.PB",
              value: 2834,
              shortlabel: "PB",
              lable: "Prachin Buri",
            },
            {
              id: "TH.PK",
              value: 2834,
              shortlabel: "PK",
              lable: "Prachuap Khiri Khan",
            },
            { id: "TH.RN", value: 2834, shortlabel: "RN", lable: "Ranong" },
            { id: "TH.RT", value: 2834, shortlabel: "RT", lable: "Ratchaburi" },
            { id: "TH.RY", value: 2834, shortlabel: "RY", lable: "Rayong" },
            { id: "TH.RE", value: 2834, shortlabel: "RE", lable: "Roi Et" },
            { id: "TH.SK", value: 2834, shortlabel: "SK", lable: "Sa Kaeo" },
            {
              id: "TH.SN",
              value: 2834,
              shortlabel: "SN",
              lable: "Sakon Nakhon",
            },
            {
              id: "TH.SP",
              value: 2834,
              shortlabel: "SP",
              lable: "Samut Prakan",
            },
            {
              id: "TH.SS",
              value: 2834,
              shortlabel: "SS",
              lable: "Samut Sakhon",
            },
            {
              id: "TH.SM",
              value: 2834,
              shortlabel: "SM",
              lable: "Samut Songkhram",
            },
            { id: "TH.SR", value: 2834, shortlabel: "SR", lable: "Saraburi" },
            { id: "TH.SA", value: 2834, shortlabel: "SA", lable: "Satun" },
            { id: "TH.SI", value: 2834, shortlabel: "SI", lable: "Si Sa Ket" },
            { id: "TH.SB", value: 2834, shortlabel: "SB", lable: "Sing Buri" },
            { id: "TH.SG", value: 2834, shortlabel: "SG", lable: "Songkhla" },
            { id: "TH.SO", value: 2834, shortlabel: "SO", lable: "Sukhothai" },
            {
              id: "TH.SH",
              value: 2834,
              shortlabel: "SH",
              lable: "Suphan Buri",
            },
            {
              id: "TH.ST",
              value: 2834,
              shortlabel: "ST",
              lable: "Surat Thani",
            },
            { id: "TH.SU", value: 2834, shortlabel: "SU", lable: "Surin" },
            { id: "TH.TK", value: 2834, shortlabel: "TK", lable: "Tak" },
            { id: "TH.TG", value: 2834, shortlabel: "TG", lable: "Trang" },
            { id: "TH.TT", value: 2834, shortlabel: "TT", lable: "Trat" },
            {
              id: "TH.UR",
              value: 2834,
              shortlabel: "UR",
              lable: "Ubon Ratchathani",
            },
            { id: "TH.UN", value: 2834, shortlabel: "UN", lable: "Udon Thani" },
            {
              id: "TH.UT",
              value: 2834,
              shortlabel: "UT",
              lable: "Uthai Thani",
            },
            { id: "TH.UD", value: 2834, shortlabel: "UD", lable: "Uttaradit" },
            { id: "TH.YL", value: 2834, shortlabel: "YL", lable: "Yala" },
            { id: "TH.YS", value: 2834, shortlabel: "YS", lable: "Yasothon" },
          ],
        },
      },
    };
  },
};
</script>
