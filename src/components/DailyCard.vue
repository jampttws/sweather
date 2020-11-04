<template>
  <div class="daily-card">
    <div>
      <img :src="this.imageSrc('01d')" class="weather-icon" />
      <div class="flex temp">10/13 °C</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  methods: {
    imageSrc(iconId) {
      const src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      return src;
    },
  },
});
</script>

<style scoped>
.daily-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  height: 10rem;
  width: 9rem;
  padding: 5px;
}

.temp {
  font-size: 26px;
  /* height: 60%; */
  align-items: flex-end;
}
</style>
