<template>
  <div>
    <div @click="openList"><input type="checkbox" />{{ name }}</div>
    <Item
      v-show="isListOpen"
      v-for="(item, name) of list.items"
      :key="item.id"
      :name="name"
      :item="item"
      @changeColor="changeColor"
    ></Item>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  components: { Item },
  props: ["list", "name"],
  data() {
    return {
      isListOpen: false,
    };
  },
  methods: {
    openList() {
      this.isListOpen = !this.isListOpen;
    },
    changeColor(newColor, itemName) {
      const listName = this.name;
      this.$store.dispatch("changeColor", { listName, itemName, newColor });
    },
  },
};
</script>

<style scoped></style>
