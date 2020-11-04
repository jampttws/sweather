<template>
  <div class="flex home-container">
    <div class="flex h-container">
      <div class="map">
        <WorldWeather></WorldWeather>
      </div>
      <div class="w-container">
        <rank-list :country="country" />
      </div>
    </div>
    <weather-details />
  </div>
</template>

<script>
import Vue from "vue";

import RankList from "@/components/RankList.vue";
import WeatherDetails from "@/components/WeatherDetails.vue";
import WorldWeather from "@/components/World-weather.vue";

export default Vue.extend({
  components: {
    RankList,
    WeatherDetails,
    WorldWeather,
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
  width: 20%;
  margin-left: 3rem;
}

.map {
  /* height: 30rem; */
  width: 72%;
}
</style>
