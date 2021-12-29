<template>
  <div>
    <div class="card">
      <div v-for="list of lists" :key="list.id">
        {{ list.name }}
        <DrawItems
          v-for="item of list.items"
          :key="item"
          :item="item"
          :listId="list.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DrawItems from "@/components/DrawItems";
export default {
  components: { DrawItems },
  computed: {
    lists() {
      return this.$store.getters.getSelected;
    },
  },
};
</script>

<style scoped></style>
