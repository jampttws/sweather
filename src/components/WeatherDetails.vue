<template>
  <div class="flex card">
    <detail-card
      class="w-55"
      :timezone="weather.timezone"
      :currentWeather="weather.current"
    />
    <div class="flex daily-box">
      <div v-for="(date, id) in weather.daily" :key="id" class="flex">
        <daily-card
          v-if="id !== 0"
          class="margin-l-2"
          :dailyWeather="date"
          :id="id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import DetailCard from "@/components/DetailCard.vue";
import DailyCard from "@/components/DailyCard.vue";

export default Vue.extend({
  components: {
    DetailCard,
    DailyCard,
  },
  props: {
    weather: Object,
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}

.w-55 {
  width: 55%;
}

.daily-box {
  width: 45%;
  overflow-x: auto;
}

.margin-l-2 {
  margin-left: 0.5rem;
}
.card {
  flex-direction: row;
  padding: 15px;
  height: 12.3rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
