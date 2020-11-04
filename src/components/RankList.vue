<template>
  <div class="w-100">
    <weather-card class="mb-2rem" status="Hottest" :country="country" />
    <weather-card class="mb-2rem" status="Coldest" :country="country" />
    <weather-card class="mb-2rem" status="Wettest" :country="country" />
    <weather-card status="Windiest" :country="country" />
  </div>
</template>

<script>
import Vue from "vue";
import WeatherCard from "@/components/WeatherCard.vue";

export default Vue.extend({
  components: {
    WeatherCard,
  },
  props: {
    country: Object,
  },
});
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.mb-2rem {
  margin-bottom: 2rem;
}
</style>
