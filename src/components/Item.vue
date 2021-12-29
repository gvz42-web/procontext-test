<template>
  <div class="item">
    <div class="name">
      <input type="checkbox" v-model="selected" :value="item.id" />
      <span>{{ item.name }}</span>
    </div>
    <div class="settings">
      <input type="number" v-model.number="number" />
      <input type="color" v-model="color" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "listId", "value"],
  computed: {
    selected: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
    number: {
      set(value) {
        this.changeValue(false, value);
      },
      get() {
        return this.item.number;
      },
    },
    color: {
      set(value) {
        this.changeValue(value, false);
      },
      get() {
        return this.item.color;
      },
    },
  },
  methods: {
    changeValue(color, number) {
      if (number < 0) {
        number = Math.abs(this.number);
      }
      const payload = {
        listId: this.listId,
        itemId: this.item.id,
        newColor: color,
        newNumber: number,
      };
      this.$store.dispatch("changeValue", payload);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 10px 0;
}
.name {
  display: flex;
  align-items: center;
}
.settings {
  display: flex;
  align-items: center;
}
</style>
