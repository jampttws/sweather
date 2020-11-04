import Vue from "vue";
import Vuex from "vuex";
import { getWeather } from "@/api/weather";
import { getCity } from "@/api/map.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentWeather: {},
    currentCity: {},
    currenThai: {},
  },
  mutations: {
    setCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
    setCurrentCityMap(state, payload) {
      state.currentCity = payload;
    },
  },
  actions: {
    async changeCurrentWeather({ commit }, payload) {
      commit("setCurrentWeather", await getWeather(payload));
    },
    async getCityMap({ commit }, payload) {
      commit("setCurrentCityMap", await getCity(payload));
    },
  },
  modules: {},
});
