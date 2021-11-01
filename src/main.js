import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import VeeValidate from "vee-validate";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VeeValidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
