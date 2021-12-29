<template>
  <div>
    <div @click.self="openList">
      <input
        type="checkbox"
        :indeterminate.prop="isIndeterminate"
        v-model="isChecked"
      />{{ list.name }}
    </div>
    <Item
      v-show="isListOpen"
      v-for="item of list.items"
      :key="item.id"
      :item="item"
      :listId="list.id"
      v-model="checkedList"
    />
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
  computed: {
    listAllItems() {
      return this.list.items.map((item) => item.id);
    },
    isIndeterminate() {
      return (
        this.checkedList.length > 0 &&
        this.checkedList.length !== this.listAllItems.length
      );
    },
    isChecked: {
      set() {
        if (this.checkedList.length !== this.listAllItems.length) {
          this.checkedList = this.listAllItems;
        } else {
          this.checkedList = [];
        }
      },
      get() {
        return this.checkedList.length === this.listAllItems.length;
      },
    },
    checkedList: {
      set(items) {
        const payload = {
          listId: this.list.id,
          items: items,
        };
        this.$store.dispatch("updateSelected", payload);
      },
      get() {
        return this.$store.getters.getSelectedItems(this.list.id);
      },
    },
  },
  methods: {
    openList() {
      this.isListOpen = !this.isListOpen;
    },
  },
};
</script>

<style scoped></style>
