<template>
  <div>
    <div class="Header">
      <span class="Header__Logo">RS2 Shop Logo</span>
      <div>
        <button class="Header__cart Header__btn" @click="showModal">
          <img
            class="Header__cart--img"
            src="../../assets/images/shopping-cart.svg"
          />
          <span class="Header__cart--badge"> 0 </span>
        </button>
        <button class="Header__logout Header__btn">
          <span>Log Out </span
          ><img
            class="Header__logout--img"
            src="../../assets/images/logout.svg"
          />
        </button>
      </div>
    </div>
    <a-modal title="Title" :visible="visible" @cancel="handleCancel">
      <!-- <p>{{ ModalText }}</p> -->
      <div>
        <p>JS book</p>
        <input v-model="cartInput" type="number" class="cart-input" />
      </div>
    </a-modal>
  </div>
</template>

<script>
import Vue from "vue";
import Modal from "ant-design-vue/lib/modal";
Vue.component(Modal.name, Modal);
export default {
  components: {},
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    clearStorehandler() {},
  },
};
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 2px solid #e4e4e4;
  position: relative;
  .Header__Logo {
    font-weight: 700;
    font-size: 20px;
  }
  .Header__cart {
    border-radius: 50%;
  }
  .cart-input {
    width: 10px !important;
  }
  .Header__btn {
    padding: 10px;
    position: relative;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0px 5px;
    .Header__cart--img,
    .Header__logout--img {
      width: 30px;
      height: 30px;
    }
    .Header__cart--badge {
      position: absolute;
      top: -15%;
      left: 0;
      background: rgb(0, 178, 223);
      border-radius: 10px;
      padding: 5px;
    }
  }
}
.dropDownItemWrapper {
  width: 100%;
  position: relative;
  display: flex;
}
.dropDownItem {
  //   display: flex;
  //   justify-content: space-between;
  background: red !important;
  padding: 25px 0px 10px;
}
.dropDownTitle {
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
  color: #000000;
  margin: 0px 0px 5px;
}
.dropDownPrice {
  color: #656565;
  font-size: 20px;
}
</style>
