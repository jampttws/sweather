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
