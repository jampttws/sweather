<template>
  <div>
    <div class="search-container">
      <input
        class="input-box"
        type="text"
        placeholder="Search City/Country"
        v-model="searchText"
        v-on:keyup.enter="search(searchText)"
      />
      <a v-on:click="search(searchText)" class="search">
        <font-awesome-icon :icon="['fa', 'search']" />
      </a>
    </div>
    <div v-if="this.showBox != ''">
      <div v-for="(weather, id) in weathers" :key="id" class="mb-1rem">
        <weather-details :weather="weather" />
      </div>
    </div>
    <div v-else class="blank-card">search to see weather forcast</div>
  </div>
</template>
<script>
import Vue from "vue";
import WeatherDetails from "@/components/WeatherDetails.vue";
import { getWeather, getOneCallWeather } from "@/api/weather.js";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      countryList: (state) => state.countryList,
    }),
  },
  data() {
    return {
      searchText: "",
      weathers: [],
      showBox: false,
    };
  },
  components: {
    WeatherDetails,
  },
  methods: {
    async search(text) {
      const resp = await getWeather(text);
      const wResp = await getOneCallWeather(resp.coord);
      this.weathers.push(wResp);
      this.showBox = true;
      this.searchText = "";
      this.$store.dispatch("changeCountryList", this.weathers);
    },
  },
});
</script>

<style lang="scss" scoped>
.mb-1rem {
  margin-bottom: 1rem;
}

.blank-card {
  display: flex;
  flex-direction: row;
  padding: 15px;
  height: 12rem;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.2);
}

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
  padding: 0.3rem;
  color: #2c3e50;
  background-color: rgba(0, 0, 0, 0.125);
}
.search:hover {
  color: #2c3e50;
  background-color: rgba(0, 0, 0, 0.3);
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
