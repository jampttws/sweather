<template>
  <div class="flex home-container">
    <div class="flex h-container">
      <div class="map">
        <AsiaWeather></AsiaWeather>
      </div>
      <div class="flex w-container">
        <rank-list :country="country" />
      </div>
    </div>
    <search-box />
    <!-- <ThailandMap></ThailandMap> -->
  </div>
</template>

<script>
import Vue from "vue";

import RankList from "@/components/RankList.vue";
import AsiaWeather from "@/components/Asia-weather.vue";
import SearchBox from "@/components/SearchBox.vue";
// import IndonesiaMap from "@/components/IndonesiaMap.vue";
// import SouthKoreaMap from "@/components/SouthKoreaMap.vue";
// import LaosMap from "@/components/LaosMap.vue";
// import ChinaMap from "@/components/ChinaMap.vue";
// import JapanMap from "@/components/JapanMap.vue";
// import ThailandMap from "@/components/ThailandMap.vue";

export default Vue.extend({
  components: {
    RankList,
    AsiaWeather,
    SearchBox,
    // JapanMap,
    // SouthKoreaMap,
    // IndonesiaMap,
    // ThailandMap,
  },
  data() {
    return {
      country: {
        name: "Thailand",
        temp: 30.5,
      },
    };
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}

.home-container {
  margin: 3rem;
  flex-direction: column;
}

.h-container {
  flex-direction: row;
  width: 100%;
  margin-bottom: 3rem;
}

.w-container {
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.map {
  width: 70%;
}
</style>
