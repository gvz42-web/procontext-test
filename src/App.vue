<template>
  <div id="app">
    <Selector class="half" :lists="lists" />
    <Display class="half" :lists="lists" />
  </div>
</template>

<script>
import Selector from "@/components/Selector";
import Display from "@/components/Display";
export default {
  name: "App",
  components: {
    Display,
    Selector,
  },
  computed: {
    lists() {
      return this.$store.getters.getLists;
    },
  },
  beforeMount() {
    this.$store.dispatch("randomData");
  },
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.half {
  width: 50%;
  height: 100%;
}
</style>
