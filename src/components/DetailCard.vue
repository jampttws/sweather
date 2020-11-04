<template>
  <div class="flex d-card">
    <div class="flex head">Japan</div>
    <div class="flex flex-col margin-l-2">
      <div class="flex temp">10 °C</div>
      <div class="flex feel">feel like 12°C</div>
    </div>
    <div class="flex flex-col margin-l-2">
      <div class="flex center h-50">
        <img :src="this.imageSrc('01d')" class="weather-icon" />
        <div class="flex flex-col w-des">
          <div class="weather-head">Clouds</div>
          scattered clouds
        </div>
      </div>
      <div class="flex flex-col center h-50">
        <div>The high will be 13°C</div>
        <div>The low will be 10°C</div>
      </div>
    </div>
    <div class="flex flex-col margin-l-2">
      <div class="flex icon-detail">
        <font-awesome-icon class="icon-xl mb-10px" :icon="['fa', 'umbrella']" />
        <div>35%</div>
      </div>
      <div class="flex icon-detail">
        <font-awesome-icon class="icon-xl mb-10px" :icon="['fa', 'tint']" />
        <div>77%</div>
      </div>
    </div>
    <div class="flex flex-col margin-l-2 detail">
      <div class="flex icon-detail">
        <font-awesome-icon class="icon-xl mb-10px" :icon="['fa', 'compass']" />
        <div>1012 hPa</div>
      </div>
      <div class="flex icon-detail">
        <font-awesome-icon class="icon-xl mb-10px" :icon="['fa', 'wind']" />
        <div>1.93 m/s</div>
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
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.center {
  align-items: center;
  justify-content: center;
}

.d-card {
  flex-direction: row;
  height: 10rem;
  width: 45rem;
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

.mb-10px {
  margin-bottom: 10px;
}

.h-50 {
  height: 50%;
}

.feel {
  height: 40%;
  align-items: flex-start;
  justify-content: center;
}

.temp {
  font-size: 48px;
  height: 60%;
  align-items: flex-end;
}

.icon-detail {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
}

.icon-xl {
  font-size: 30px;
}

.weather-head {
  font-size: 18px;
  font-weight: 600;
}

.w-des {
  align-items: flex-start;
}
</style>
