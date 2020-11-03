<template>
  <div class="flex card">
    <div class="flex head">Japan</div>
    <div class="flex flex-col margin-l-2">
      <div class="flex temp">10 °C</div>
      <div class="flex feel">feel like 12 °C</div>
    </div>
    <div class="flex flex-col margin-l-2">
      <img
        src="https://openweathermap.org/img/wn/01d@2x.png"
        class="weather-icon"
      />
    </div>
    <div class="flex flex-col margin-l-2">
      <div>
        <font-awesome-icon class="icon-xl" :icon="['fa', 'umbrella']" />
      </div>
      <div>humidity:</div>
    </div>
    <div class="flex flex-col margin-l-2 detail">
      <div>pressure:</div>
      <div>wind speed:</div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.card {
  flex-direction: row;
  height: 10rem;
  width: 45rem;
}

.head {
  font-size: 28px;
  font-weight: 600;
  height: 100%;
}

.margin-l-2 {
  margin-left: 2rem;
}

.feel {
  height: 30%;
  align-items: center;
  justify-content: flex-end;
}

.temp {
  font-size: 46px;
  height: 70%;
  align-items: flex-end;
}

.detail {
  line-height: 25px;
}

.icon-xl {
  font-size: 30px;
}
</style>
