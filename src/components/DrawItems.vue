<template>
  <div>
    {{ itemInstances }}
  </div>
</template>

<script>
export default {
  props: ["item", "listId"],
  computed: {
    itemInstances() {
      return this.$store.getters.getItem(this.listId, this.item);
    },
  },
};
</script>

<style scoped></style>
