<template>
  <div class="home-container">
    <div class="h-container">
      <div class="map">map</div>
      <div class="w-container">
        <weather-card class="w-card" status="Hottest" :weather="weather" />
        <weather-card class="w-card" status="Coldest" :weather="weather" />
        <weather-card class="w-card" status="Wettest" :weather="weather" />
        <weather-card status="Windiest" :weather="weather" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import WeatherCard from "@/components/WeatherCard.vue";

export default Vue.extend({
  components: {
    WeatherCard,
  },
  data() {
    return {
      status: "Hottest",
      weather: {
        country: "Thailand",
        temp: 30.5,
      },
    };
  },
});
</script>

<style scoped>
.w-card {
  margin-bottom: 2rem;
}

.home-container {
  margin: 3rem;
  display: flex;
}

.h-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.w-container {
  width: 20%;
  margin-left: 3rem;
}

.map {
  height: 30rem;
  width: 72%;
  background-color: teal;
}
</style>
