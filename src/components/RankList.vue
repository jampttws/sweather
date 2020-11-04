<template>
  <div class="list-container">
    <weather-card class="mb-2rem" status="Hottest" :country="country" />
    <weather-card class="mb-2rem" status="Coldest" :country="country" />
    <weather-card class="mb-2rem" status="Wettest" :country="country" />
    <weather-card status="Windiest" :country="country" />
  </div>
</template>

<script>
import Vue from "vue";
import WeatherCard from "@/components/WeatherCard.vue";
import { getWeather } from "@/api/weather.js";

export default Vue.extend({
  components: {
    WeatherCard,
  },
  props: {
    country: Object,
  },
  data() {
    return {
      thai: {},
      japan: {},
      laos: {},
      china: {},
      korea: {},
      indonesia: {},
    };
  },
  methods: {
    async callWeather() {
      this.th = await getWeather("Thailand");
      this.jp = await getWeather("Japan");
      this.ls = await getWeather("Laos");
      this.ch = await getWeather("China");
      this.kr = await getWeather("SouthKorea");
      this.id = await getWeather("Indonesia");
    },
  },
});
</script>

<style scoped>
.list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mb-2rem {
  margin-bottom: 2rem;
}
</style>
