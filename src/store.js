import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    selected: [],
  },
  mutations: {
    randomData(state, lists) {
      state.lists = lists;
    },
    changeValue(state, payload) {
      state.lists = state.lists.map((list) => {
        if (list.id === payload.listId) {
          list.items.map((item) => {
            if (item.id === payload.itemId) {
              item.color = payload.newColor || item.color;
              item.number = payload.newNumber || item.number;
            }
            return item;
          });
        }
        return list;
      });
    },
    fillSelected(state, lists) {
      state.selected = lists.map((list) => ({
        id: list.id,
        name: list.name,
        selected: "none",
        items: [],
      }));
    },
    updateSelected(state, payload) {
      state.selected.map((list) => {
        if (list.id === payload.listId) {
          list.items = payload.items;
        }
        return list;
      });
    },
  },
  actions: {
    randomData({ commit }) {
      const lists = [];
      const nlists = 3;
      for (let i = 0; i < nlists; i++) {
        const nitems = Math.round(Math.random() * 6) + 4;
        lists.push({
          id: i,
          name: `List ${i + 1}`,
          items: [],
        });
        for (let j = 0; j < nitems; j++) {
          lists[i]["items"].push({
            id: j,
            name: `Item ${j + 1}`,
            number: Math.round(Math.random() * 30) + 10,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),
          });
        }
      }
      commit("randomData", lists);
      commit("fillSelected", lists);
    },
    changeValue({ commit }, payload) {
      commit("changeValue", payload);
    },
    updateSelected({ commit }, payload) {
      commit("updateSelected", payload);
    },
  },
  getters: {
    getLists(state) {
      return state.lists;
    },
    getSelected(state) {
      return state.selected;
    },
    getItem(state) {
      return (listId, itemId) => {
        return state.lists
          .find((list) => list.id === listId)
          .items.find((item) => item.id === itemId);
      };
    },
    getSelectedItems(state) {
      return (listId) => {
        return state.selected.find((list) => list.id === listId).items;
      };
    },
  },
});
