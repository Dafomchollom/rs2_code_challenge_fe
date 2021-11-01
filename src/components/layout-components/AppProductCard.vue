<template>
  <div class="Product">
    <div class="Product__card">
      <h2 class="Product__card--title">JavaScript Basics</h2>
      <div class="Product__card--body">
        <div class="Product__card--quantity">
          <button class="Product__card--quantitybtn" @click="addquantity">
            +
          </button>
          <span>{{ quantity }}</span>
          <button class="Product__card--quantitybtn" @click="subquantity">
            -
          </button>
        </div>
        <button class="Product__card--cartBtn">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    addquantity() {
      this.quantity = this.quantity + 1;
    },
    subquantity() {
      if (this.quantity) {
        this.quantity = this.quantity - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Product {
  .Product__card {
    box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    padding: 10px;
    max-width: 450px;
    margin: "15px";
    .Product__card--quantity {
      text-align: center;
      font-size: 15px;
      cursor: pointer;
      .Product__card--quantitybtn {
        margin: 5px;
      }
    }
    .Product__card--cartBtn {
      width: 100%;
      margin: 10px 0px;
      cursor: pointer;
    }
  }
}
</style>
