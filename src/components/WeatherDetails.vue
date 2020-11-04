<template>
  <div class="flex card">
    <detail-card />
    <div class="flex margin-l-2">
      <daily-card />
      <daily-card class="margin-l-2" />
      <daily-card class="margin-l-2" />
      <daily-card class="margin-l-2" />
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
});
</script>

<style scoped>
.flex {
  display: flex;
}

.margin-l-2 {
  margin-left: 0.5rem;
}
.card {
  flex-direction: row;
  padding: 15px;
  height: 12rem;
}
</style>
