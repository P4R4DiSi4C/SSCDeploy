import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const module_dep = {
  namespaced: true,
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit('increment')
    }
  },
  getters: {
    counter: state => {
      return state.counter
    }
  }
}

// Central Store
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    deploy: module_dep
  }
});
