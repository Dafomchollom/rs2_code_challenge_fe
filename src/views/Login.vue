<template>
  <div class="Login">
    <div class="Login__card">
      <div class="Login__card--headerwrapper">
        <h3>Login</h3>
      </div>
      <img
        alt="login image"
        src="../assets/images/loginimage.jpg"
        class="Login__card--image"
      />
      <ValidationObserver ref="loginObserver">
        <AppInputComponent
          v-model="userObject.username"
          rules="required"
          label="Username"
          name="username"
          colon
          required
        />
        <AppInputComponent
          v-model="userObject.password"
          rules="required"
          label="Password"
          name="password"
          type="password"
          colon
          required
        />
        <button class="Login__Card--btn" @click="login">Login</button>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import AppInputComponent from "@/components/input-components/AppInputComponent.vue";
import { BASE_URL } from "../../.env";
import router from "@/router";
export default {
  name: "Login",
  components: {
    ValidationObserver,
    AppInputComponent,
  },
  data() {
    return {
      userObject: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const valid = await this.$refs.loginObserver.validate();
      if (valid) {
        this.axios
          .get(`${BASE_URL}/login`, this.userObject)
          .then((response) => {
            localStorage.setItem("userToken", response.token);
          });
        router.push({ name: "Store" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("../../src/assets/images/loginbackground.jpg");
  background-position: center;
  background-size: cover;
  .Login__card {
    background: #fff;
    padding: 30px 20px;
    width: 30%;
    height: auto;
    border-radius: 5px;
    box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    .Login__card--headerwrapper {
      border-bottom: 3px solid #f8f8f8;
    }
    .Login__card--image {
      width: 50%;
    }
    .Login__Card--btn {
      background: #009bbf;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
