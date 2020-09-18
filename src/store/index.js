import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const HelloFunc = () => {
  console.log("HELLO FUNC")
}
const module_dep = {
  namespaced: true,
  state: () => ({
    options: [
      {
        title: 'Suspension USB Séléctive',
        desc: 'Suspend la mise en veille USB',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Config Firefox',
        desc: 'Configure firefox',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Mise en veille secteur',
        desc: 'Désactive la mise en veille sous secteur',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Mise en veille NIC',
        desc: 'Désactive la mise en veille cartes réseau',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Désactiver IPV6',
        desc: 'Désactive IPV6 de la carte réseau',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Mise en veille USB',
        desc: 'Désactive la mise en veille des ports USB',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Désinstaller OneDrive',
        desc: 'Désinstalle OneDrive',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Supprimer raccourci Edge',
        desc: 'Supprime le raccourci Edge',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      },
      {
        title: 'Options régionales',
        desc: 'Défini les options régionales système',
        checked: true,
        loading: false,
        func: () => HelloFunc()
      }
    ]
  }),
  mutations: {
    check: (state, id) => {
      state.options[id].checked = !state.options[id].checked
    }
  },
  actions: {
    check: ({ commit }, id) => {
      commit('check', id)
    }
  },
  getters: {
    options: state => {
      return state.options
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
