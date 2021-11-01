<template>
  <div class="Search">
    <div class="Search__card">
      <h3>Search Rs2 Store for Products</h3>
      <ValidationObserver ref="searchObserver">
        <a-row type="flex" :gutter="6">
          <a-col :span="12" :order="4">
            <AppInputComponent
              placeholder="Product Name"
              name="Product Name"
              :rules="{ max: 30, min: 0, required: true }"
            />
          </a-col>
          <a-col :span="12" :order="4">
            <AppSelectComponent
              placeholder="Product Type"
              name="product type"
              rules="required"
            />
          </a-col>
        </a-row>
        <button class="Search__card--btn" @click="searchHandler">Search</button>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ValidationObserver } from "vee-validate";
import AppSelectComponent from "@/components/input-components/AppSelectComponent.vue";
import AppInputComponent from "@/components/input-components/AppInputComponent.vue";
import Row from "ant-design-vue/lib/grid/Row";
import Col from "ant-design-vue/lib/grid/Col";

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
export default {
  components: {
    ValidationObserver,
    AppSelectComponent,
    AppInputComponent,
  },
  methods: {
    searchHandler() {
      this.$refs.searchObserver.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.Search {
  display: flex;
  justify-content: center;
  .Search__card {
    width: 50%;
    min-width: 350px;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
    box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
  }
  .Search__card--btn {
    background: #009bbf;
    width: 100%;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    padding: 10px;
  }
}
</style>
