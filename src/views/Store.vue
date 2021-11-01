<template>
  <div class="Store">
    <AppHeaderComponent />
    <AppSearchComponent />
    <a-row :gutter="6">
      <a-col v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :span="6" :key="index">
        <AppProductCard />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import AppSearchComponent from "@/components/layout-components/AppSearchComponent.vue";
import AppHeaderComponent from "@/components/layout-components/AppHeaderComponent.vue";
import AppProductCard from "@/components/layout-components/AppProductCard.vue";
export default {
  components: {
    AppSearchComponent,
    AppHeaderComponent,
    AppProductCard,
  },
};
</script>

<style lang="scss" scoped>
.Store {
  padding: 0px 20px;
}
</style>
