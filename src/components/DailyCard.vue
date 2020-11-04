<template>
  <div class="daily-card">
    <div>
      <div>{{ computeDate() }}</div>
      <img
        :src="this.imageSrc(dailyWeather.weather[0].icon)"
        class="weather-icon"
      />
      <div class="flex temp">
        {{ toCelcius(dailyWeather.temp.min) }}/{{
          toCelcius(dailyWeather.temp.max)
        }}
        °C
      </div>
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
    computeDate() {
      let current = new Date();
      let newDate = new Date(current);
      newDate.setDate(newDate.getDate() + this.id);
      let date_array = newDate.toDateString().split(" ");
      return `${date_array[0]}, ${date_array[2]} ${date_array[1]}`;
    },
    toCelcius(temp) {
      let celcius = (temp / 10).toFixed(0);
      return celcius;
    },
  },
  props: {
    dailyWeather: Object,
    id: Number,
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
  font-size: 24px;
  /* height: 60%; */
  align-items: flex-end;
}
</style>
