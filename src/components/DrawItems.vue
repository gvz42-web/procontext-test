<template>
  <div class="item-dots">
    <div
      class="dot"
      v-for="dot of itemData.number"
      :key="dot"
      :style="style"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["item", "listId"],
  computed: {
    itemData() {
      return this.$store.getters.getItem(this.listId, this.item);
    },
    style() {
      return {
        backgroundColor: this.itemData.color,
      };
    },
  },
};
</script>

<style scoped>
.dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 4px;
  border-radius: 50%;
}
</style>
