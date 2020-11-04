import Vue from 'vue'
import Vuex from 'vuex'
import {
  getWeather
 } from '@/api/weather';
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeather: {}
  },
  mutations: {
    setCurrentWeather(state, payload){
      state.currentWeather = payload
    }
  },
  actions: {
    async changeCurrentWeather({commit}, payload){
      commit('setCurrentWeather', await getWeather(payload))
    }

  },
  modules: {
  }
})
