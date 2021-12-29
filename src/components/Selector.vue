<template>
  <div>
    <div class="card">
      <List v-for="list of lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import List from "@/components/List";
export default {
  components: { List },
  props: ["lists"],
};
</script>

<style scoped></style>
