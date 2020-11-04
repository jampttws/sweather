<template>
  <div class="flex card">
    <detail-card />
    <div>
      <daily-card />
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

.card {
  flex-direction: row;
  padding: 15px;
  height: 12rem;
}
</style>
