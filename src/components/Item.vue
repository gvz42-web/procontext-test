<template>
  <div>
    <input type="checkbox" />
    <span>{{ name }}</span>
    <input type="color" v-model="color" @change="changeColor" />
  </div>
</template>

<script>
export default {
  props: ["item", "name"],
  data() {
    return {
      color: this.item.color,
    };
  },
  methods: {
    changeColor() {
      this.$emit("changeColor", this.color, this.name);
    },
  },
};
</script>

<style scoped></style>
