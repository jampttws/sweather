<template>
  <div class="card">
    <div class="c-status">{{ status }}</div>
    <div class="w-flex">
      <div>{{ weather.country }}</div>
      <div>{{ weather.temp }} °C</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    status: String,
    weather: Object,
  },
});
</script>

<style scoped>
.card {
  padding: 10px;
  width: 20rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
}

.c-status {
  height: 30%;
  display: flex;
  align-items: flex-start;
  font-weight: 600;
  font-size: 18px;
}

.w-flex {
  height: 70%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
