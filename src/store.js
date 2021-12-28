import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: {},
    selected: {},
  },
  mutations: {
    randomData(state) {
      const nlists = Math.round(Math.random() * 10) + 3;
      for (let i = 0; i < nlists; i++) {
        const nitems = Math.round(Math.random() * 10) + 2;
        state.lists[`List ${i + 1}`] = {
          id: i,
          items: {},
        };
        for (let j = 0; j < nitems; j++) {
          state.lists[`List ${i + 1}`]["items"][`Item ${j + 1}`] = {
            id: j,
            number: Math.round(Math.random() * 30) + 10,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          };
        }
      }
    },
    changeColor(state, payload) {
      state.lists[payload.listName].items[payload.itemName].color =
        payload.newColor;
    },
  },
  actions: {
    randomData({ commit }) {
      commit("randomData");
    },
    changeColor({ commit }, payload) {
      commit("changeColor", payload);
    },
  },
  getters: {
    getLists(state) {
      return state.lists;
    },
  },
});
