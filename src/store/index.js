
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryWeather: {},
    countryList: []
  },
  getters:{
    getHottest: state => {
      var country = state.countryList;

      country.sort(function(a, b) {
        var keyA = a.current.temp
        var keyB = b.current.temp
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      return country;
    },
    getColdest: state => {
      var country = state.countryList;

      country.sort(function(a, b) {
        var keyA = a.current.temp
        var keyB = b.current.temp
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      return country;
    },
    getWettest: state => {
      var country = state.countryList;

      country.sort(function(a, b) {
        var keyA = a.current.humidity
        var keyB = b.current.humidity
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      return country;
    },
    getWindiest: state => {
      var country = state.countryList;

      country.sort(function(a, b) {
        var keyA = a.current.wind_speed
        var keyB = b.current.wind_speed
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      return country;
    },
  },
  mutations: {
    setCountryWeather(state, payload){
      state.countryWeather = payload
    },
    setCountryList(state, payload){
      state.countryList = payload
    }
  },
  actions: {
    changeCountryWeather({commit}, payload){
      commit('setCountryWeather', payload)
    },
    changeCountryList({commit}, payload){
      commit('setCountryList', payload)
    }
  },
  modules: {},
});
