<template>
  <div>
    <List
      v-for="(list, name) of lists"
      :key="list.id"
      :list="list"
      :name="name"
    />
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
