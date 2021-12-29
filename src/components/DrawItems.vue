<template>
  <div class="item-dots">
    <transition-group name="dots" tag="div">
      <div
        class="dot dots-item"
        v-for="dot of itemData.number"
        :key="dot"
        :style="style"
        @click="decreaseNumber"
      ></div>
    </transition-group>
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
  methods: {
    decreaseNumber() {
      const payload = {
        listId: this.listId,
        itemId: this.item,
        newNumber: this.itemData.number - 1,
      };
      this.$store.commit("changeValue", payload);
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
}

.dots-item {
  transition: all 0.2s;
}
.dots-enter,
.dots-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.dots-leave-active {
  position: absolute;
}
</style>
