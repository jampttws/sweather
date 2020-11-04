<template>
  <div class="list-container">
    <!-- <weather-card
      class="mb-2rem"
      status="Hottest"
      :country="this.getHottest[0]"
    />
    <weather-card
      class="mb-2rem"
      status="Coldest"
      :country="this.getColdest[0]"
    />
    <weather-card
      class="mb-2rem"
      status="Wettest"
      :country="this.getWettest[0]"
    />
    <weather-card status="Windiest" :country="this.getWindiest[0]" /> -->
    <weather-card class="mb-2rem" status="Hottest" :country="hottest" />
    <weather-card class="mb-2rem" status="Coldest" :country="coldest" />
    <weather-card class="mb-2rem" status="Wettest" :country="wettest" />
    <weather-card status="Windiest" :country="windiest" />
  </div>
</template>

<script>
import Vue from "vue";
import WeatherCard from "@/components/WeatherCard.vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      countryList: (state) => state.countryList,
    }),
    ...mapGetters(["getHottest", "getColdest", "getWettest", "getWindiest"]),
  },
  components: {
    WeatherCard,
  },
  data() {
    return {
      hottest: {
        name: "Thailand",
        temp: 31,
      },
      coldest: {
        name: "Russia",
        temp: -20,
      },
      wettest: {
        name: "Indonesia",
        temp: 30,
      },
      windiest: {
        name: "South Korea",
        temp: 16,
      },
    };
  },
});
</script>

<style scoped>
.list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mb-2rem {
  margin-bottom: 2rem;
}
</style>
