<template>
  <div class="d-card">
    <div class="head">{{ timezone }}</div>
    <div class="temp-box">
      <div class="temp-card">{{ toCelcius(currentWeather.temp) }} °C</div>
      <div class="feel">
        feel like {{ toCelcius(currentWeather.feels_like) }}°C
      </div>
    </div>
    <div class="w-box">
      <div class="w-status">
        <img
          :src="this.imageSrc(currentWeather.weather[0].icon)"
          class="weather-icon"
        />
      </div>
      <div class="w-des">
        <div class="weather-head">{{ currentWeather.weather[0].main }}</div>
        {{ currentWeather.weather[0].description }}
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-col">
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'sun']" />
          <div>{{ currentWeather.uvi }}</div>
        </div>
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'tint']" />
          <div>{{ currentWeather.humidity }} %</div>
        </div>
      </div>
      <div class="flex-col margin-l-2">
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'compass']" />
          <div>{{ currentWeather.pressure }} hPa</div>
        </div>
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'wind']" />
          <div>{{ currentWeather.wind_speed }} m/s</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    timezone: String,
    currentWeather: Object,
  },
  methods: {
    imageSrc(iconId) {
      const src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      return src;
    },
    toCelcius(temp) {
      let celcius = (temp / 10).toFixed(0);
      return celcius;
    },
  },
});
</script>

<style scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.d-card {
  display: flex;
  flex-direction: row;
  height: 10rem;
  width: 45rem;
}

.head {
  font-size: 28px;
  font-weight: 600;
  height: 100%;
  margin-left: 1rem;
  width: 25%;
  display: flex;
  justify-items: flex-start;
}

.margin-l-2 {
  margin-left: 2rem;
}

.temp-box {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.feel {
  display: flex;
  height: 40%;
  align-items: flex-start;
  justify-content: center;
}

.temp-card {
  display: flex;
  font-size: 40px;
  height: 60%;
  justify-content: center;
  align-items: flex-end;
}

.icon-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
}

.icon-xl {
  font-size: 30px;
  margin-bottom: 10px;
}

.w-box {
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: flex-start;
}

.w-status {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}

.weather-head {
  font-size: 18px;
  font-weight: 600;
}

.w-des {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
