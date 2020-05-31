import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    refreshToken: ''
  },
  mutations: {
    accessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    refreshToken (state, refreshToken) {
      state.refreshToken = refreshToken
    }
  },
  actions: {
  },
  modules: {
  }
})
