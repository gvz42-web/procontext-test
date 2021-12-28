<template>
  <div>
    <input type="checkbox" />
    <span>{{ item.name }}</span>
    <input type="number" v-model.number="number" @change="changeValue" />
    <input type="color" v-model="color" @change="changeValue" />
  </div>
</template>

<script>
export default {
  props: ["item", "listId"],
  data() {
    return {
      color: this.item.color,
      number: this.item.number,
    };
  },
  methods: {
    changeValue() {
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
