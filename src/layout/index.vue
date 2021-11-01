<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (!this.user) return Guest;
      if (!this.user.subscription) return User;

      return Member;
    },
  },
};
</script>

<style></style>
