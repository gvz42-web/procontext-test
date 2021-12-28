<template>
  <div id="app">
    {{ lists }}
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
  data() {
    return {
      lists: {},
    };
  },
  beforeMount() {
    const nlists = Math.round(Math.random() * 10);
    for (let i = 0; i < nlists; i++) {
      const nitems = Math.round(Math.random() * 10);
      this.lists[`List ${i + 1}`] = {};
      for (let j = 0; j < nitems; j++) {
        this.lists[`List ${i + 1}`][`Item ${j + 1}`] = {
          number: Math.round(Math.random() * 50),
          color: Math.floor(Math.random() * 16777215).toString(16),
        };
      }
    }
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
