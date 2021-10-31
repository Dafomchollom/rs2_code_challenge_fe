<template>
  <div class="Login">
    <div class="Login__card">
      <AppInputComponent label="Username Or Email" colon />
      <AppInputComponent label="Password" colon />
    </div>
  </div>
</template>

<script>
import AppInputComponent from "@/components/input-components/AppInputComponent.vue";
export default {
  name: "Login",
  components: {
    AppInputComponent,
  },
};
</script>
<style lang="scss">
.Login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .Login__card {
    // background: red;
    padding: 20px;
    width: 30%;
    height: 50%;
    max-height: 30rem;
    border-radius: 5px;
    box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -webkit-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -1px 4px 29px -13px rgba(0, 0, 0, 0.64);
  }
}
</style>
