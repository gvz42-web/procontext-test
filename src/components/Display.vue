<template>
  <div>
    <div class="card">
      <div class="list" v-for="list of lists" :key="list.id">
        <span class="name">{{ list.name }}</span>
        <div class="items">
          <transition-group name="itemsList" tag="div">
            <DrawItems
              class="itemsList-item"
              v-for="item of list.items"
              :key="item"
              :item="item"
              :listId="list.id"
            />
          </transition-group>
        </div>
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

<style scoped>
.list {
  background-color: #fff;
  width: 100%;
  min-height: 40px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 42px -11px rgba(34, 60, 80, 0.2);
  transition: max-height 0.5s linear;
}
.items {
  padding: 20px;
}
.itemsList-item {
  transition: all 0.2s;
}
.itemsList-enter,
.itemsList-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.itemsList-leave-active {
}
</style>
