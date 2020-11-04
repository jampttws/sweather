<template>
  <div>
    <div class="search-container">
      <input
        class="input-box"
        type="text"
        placeholder="Search city"
        v-model="searchText"
        @change="onSearchChange"
      />
      <font-awesome-icon class="search" :icon="['fa', 'search']" />
    </div>
    <weather-details />
  </div>
</template>
<script>
import Vue from "vue";
import WeatherDetails from "@/components/WeatherDetails.vue";

export default Vue.extend({
  data() {
    return {
      searchText: "",
    };
  },
  components: {
    WeatherDetails,
  },
});
</script>
<style lang="scss" scoped>
.search-container {
  margin-bottom: 2rem;
  display: flex;
  width: 25%;
  height: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
}
.search {
  height: 100%;
  width: 10%;
  padding: 0.4rem;
  background-color: rgba(0, 0, 0, 0.125);
}
.input-box {
  width: 90%;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  border: none;
}
.input-box:focus {
  outline: none;
}
.input-box::placeholder {
  color: rgba(0, 0, 0, 0.25);
}
</style>
