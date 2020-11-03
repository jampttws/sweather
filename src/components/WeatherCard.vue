<template>
  <div class="flex card">
    <div class="flex c-status">{{ status }}</div>
    <div class="flex w-card">
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
.flex {
  display: flex;
}

.card {
  padding: 10px;
  width: 20rem;
  height: 6rem;
  flex-direction: column;
}

.c-status {
  height: 30%;
  align-items: flex-start;
  font-weight: 600;
  font-size: 18px;
}

.w-card {
  height: 70%;
  font-size: 24px;
  align-items: center;
  justify-content: space-evenly;
}
</style>
