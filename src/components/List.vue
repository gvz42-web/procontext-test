<template>
  <div>
    <div @click="openList"><input type="checkbox" />{{ list.name }}</div>
    <Item
      v-show="isListOpen"
      v-for="item of list.items"
      :key="item.id"
      :item="item"
      :listId="list.id"
    ></Item>
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
    };
  },
  methods: {
    openList() {
      this.isListOpen = !this.isListOpen;
    },
  },
};
</script>

<style scoped></style>
