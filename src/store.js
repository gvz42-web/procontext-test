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
    selectItem(state, payload) {
      state.selected = state.selected.map((list) => {
        if (list.id === payload.listId) {
          const index = list.items.indexOf(payload.itemId);
          if (index === -1) {
            list.items.push(payload.itemId);
          } else {
            list.items.splice(index, 1);
          }
        }
        return list;
      });
    },
    selectList(state, listId) {
      const allItems =
        state.lists
          .find((list) => list.id === listId)
          .items.map((item) => item.id) || [];
      state.selected = state.selected.map((list) => {
        if (listId === list.id) {
          if (list.selected === "few" || list.selected === "none") {
            list.items = allItems;
            list.selected = "all";
          } else {
            list.items = [];
            list.selected = "none";
          }
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
    selectItem({ commit }, payload) {
      commit("selectItem", payload);
    },
    selectList({ commit }, listId) {
      commit("selectList", listId);
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
    isItemSelected(state) {
      return (listId, itemId) => {
        return (
          state.selected
            .find((list) => list.id === listId)
            .items.indexOf(itemId) !== -1
        );
      };
    },
    listSelectState(state) {
      return (listId) => {
        const allItems =
          state.lists
            .find((list) => list.id === listId)
            .items.map((item) => item.id) || [];
        const selectedItems = state.selected.find(
          (list) => listId === list.id
        ).items;
        if (allItems.length === selectedItems.length) {
          return "all";
        } else if (selectedItems.length === 0) {
          return "none";
        }
        return "few";
      };
    },
  },
});
