<template>
  <div>
    <div @click.self="openList" class="list">
      <input
        type="checkbox"
        :indeterminate.prop="isIndeterminate"
        v-model="isChecked"
      />{{ list.name }}
    </div>
    <div class="items">
      <Item
        v-show="isListOpen"
        v-for="item of list.items"
        :key="item.id"
        :item="item"
        :listId="list.id"
        v-model="checkedList"
      />
    </div>
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

<style scoped>
.list {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  color: #fff;
  background: rgb(63, 124, 251);
  background: linear-gradient(
    63deg,
    rgba(63, 124, 251, 1) 0%,
    rgba(63, 153, 251, 1) 100%
  );
  box-shadow: 0px 0px 42px -11px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
.items {
  padding-left: 40px;
}
</style>
