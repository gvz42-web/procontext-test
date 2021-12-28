<template>
  <div>
    <input type="checkbox" />
    <span>{{ item.name }}</span>
    <input type="color" v-model="color" @change="changeColor" />
  </div>
</template>

<script>
export default {
  props: ["item", "listId"],
  data() {
    return {
      color: this.item.color,
    };
  },
  methods: {
    changeColor() {
      const payload = {
        listId: this.listId,
        itemId: this.item.id,
        newColor: this.color,
      };
      this.$store.dispatch("changeColor", payload);
    },
  },
};
</script>

<style scoped></style>
