<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p>{{ user }}</p> -->
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    user() {
      // return this.$store.state.user;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
