<template>
  <div class="card">
    <div class="c-status">{{ status }}</div>
    <div class="w-card">
      <div>{{ country.name }}</div>
      <div>{{ country.temp }} °C</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    status: String,
    country: Object,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  padding: 10px;
  width: 80%;
  height: 6rem;
  flex-direction: column;
}

.c-status {
  display: flex;
  height: 30%;
  align-items: flex-start;
  font-weight: 600;
  font-size: 18px;
}

.w-card {
  display: flex;
  height: 70%;
  font-size: 24px;
  align-items: center;
  justify-content: space-evenly;
}
</style>
