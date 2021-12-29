<template>
  <div>
    <input type="checkbox" v-model="selected" />
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
  computed: {
    selected: {
      set() {
        if (this.number < 0) {
          this.number = 0;
        }
        const payload = {
          listId: this.listId,
          itemId: this.item.id,
        };
        this.$store.dispatch("selectItem", payload);
      },
      get() {
        return this.$store.getters.isItemSelected(this.listId, this.item.id);
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
