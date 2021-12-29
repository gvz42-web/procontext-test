<template>
  <div>
    <input type="checkbox" v-model="selected" :value="item.id" />
    <span>{{ item.name }}</span>
    <input type="number" v-model.number="number" @change="changeValue" />
    <input type="color" v-model="color" @change="changeValue" />
  </div>
</template>

<script>
export default {
  props: ["item", "listId", "value"],
  data() {
    return {
      color: this.item.color,
      number: this.item.number,
    };
  },
  computed: {
    selected: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
  methods: {
    changeValue() {
      if (this.number < 0) {
        this.number = Math.abs(this.number);
      }
      const payload = {
        listId: this.listId,
        itemId: this.item.id,
        newColor: this.color,
        newNumber: this.number,
      };
      this.$store.dispatch("changeValue", payload);
    },
  },
};
</script>

<style scoped></style>
