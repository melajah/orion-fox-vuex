<template>
  <div>
    <form class="d-flex justify-content-center" @submit.prevent="login">
      <div class="form-group col-3">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="form.email"
        />
      </div>
      <div class="form-group col-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="form.password"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
    </form>
    <div>
      {{ $store.state.count }}

      <button type="button" class="btn btn-primary btn-sm" @click="increment">
        Tambah
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    login() {
      this.$store
        .dispatch("doLogin", true)
        .then((status) => {
          this.$store.commit("SET_ISLOGGEDIN", status);
          this.$router.push("/todos");
        })
        .catch(console.log);
    },
    increment() {
      this.$store.commit("SET_COUNT", 10);
    },
  },
  created() {},
};
</script>

<style lang="css" scoped></style>
