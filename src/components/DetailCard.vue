<template>
  <div class="d-card">
    <div class="head">Japan</div>
    <div class="temp-box">
      <div class="temp">10 °C</div>
      <div class="feel">feel like 12°C</div>
    </div>
    <div class="w-box">
      <div class="w-status">
        <img :src="this.imageSrc('01d')" class="weather-icon" />
        <div class="w-des">
          <div class="weather-head">Clouds</div>
          scattered clouds
        </div>
      </div>
      <div class="min-max">
        <div>The high will be 13°C</div>
        <div>The low will be 10°C</div>
      </div>
    </div>
    <div class="flex-row">
      <div class="flex-col">
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'umbrella']" />
          <div>35%</div>
        </div>
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'tint']" />
          <div>77%</div>
        </div>
      </div>
      <div class="flex-col margin-l-2">
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'compass']" />
          <div>1012 hPa</div>
        </div>
        <div class="icon-detail">
          <font-awesome-icon class="icon-xl" :icon="['fa', 'wind']" />
          <div>1.93 m/s</div>
        </div>
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

.min-max {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
}

.head {
  font-size: 28px;
  font-weight: 600;
  height: 100%;
  margin-left: 1rem;
}

.margin-l-2 {
  margin-left: 2rem;
}

.temp-box {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.feel {
  display: flex;
  height: 40%;
  align-items: flex-start;
  justify-content: center;
}

.temp {
  display: flex;
  font-size: 50px;
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
  width: 35%;
  justify-content: flex-start;
}

.w-status {
  display: flex;
  align-items: center;
  height: 50%;
}

.weather-head {
  font-size: 18px;
  font-weight: 600;
}

.w-des {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
