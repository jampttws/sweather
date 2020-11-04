<template>
  <div class="flex home-container">
    <div class="flex h-container">
      <div class="map">
        <WorldWeather></WorldWeather>
      </div>
      <div class="flex w-container">
        <rank-list :country="country" />
      </div>
    </div>
    <search-box />
  </div>
</template>

<script>
import Vue from "vue";

import RankList from "@/components/RankList.vue";
import WorldWeather from "@/components/World-weather.vue";
import SearchBox from "@/components/SearchBox.vue";

export default Vue.extend({
  components: {
    RankList,
    WorldWeather,
    SearchBox,
  },
  data() {
    return {
      country: {
        name: "Thailand",
        temp: 30.5,
      },
    };
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}

.home-container {
  margin: 3rem;
  flex-direction: column;
}

.h-container {
  flex-direction: row;
  width: 100%;
  margin-bottom: 3rem;
}

.w-container {
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.map {
  width: 70%;
}
</style>
