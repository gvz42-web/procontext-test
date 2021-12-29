<template>
  <div>
    <div @click.self="openList">
      <input
        type="checkbox"
        :indeterminate.prop="isIndeterminate"
        v-model="isChecked"
      />{{ list.name }}
    </div>
    <Item
      v-show="isListOpen"
      v-for="item of list.items"
      :key="item.id"
      :item="item"
      :listId="list.id"
    />
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  components: { Item },
  props: ["list"],
  data() {
    return {
      isListOpen: false,
      checked: false,
    };
  },
  computed: {
    listSelectState() {
      return this.$store.getters.listSelectState(this.list.id);
    },
    isIndeterminate() {
      return this.listSelectState === "few";
    },
    isChecked: {
      set() {
        console.log("ggigig");
        this.$store.dispatch("selectList", this.list.id);
      },
      get() {
        return this.listSelectState === "all";
      },
    },
  },
  methods: {
    openList() {
      this.isListOpen = !this.isListOpen;
    },
    selectList() {
      this.$store.dispatch("selectList", this.list.id);
    },
  },
};
</script>

<style scoped></style>
