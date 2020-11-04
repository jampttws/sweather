
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryWeather: {},
    countryList: []
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
