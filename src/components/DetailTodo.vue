<template>
  <div>
    Detail todos
    <p>
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailTodo",
  computed: {
    isStatus() {
      if (this.todo.completed) {
        return this.todo.completed ? "completed" : "doing";
      }
      return "doing";
    },
  },
  data() {
    return {
      todo: {},
    };
  },
  methods: {
    getTodo() {
      const { id } = this.$route.params;
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .then((dataTodo) => {
          this.todo = dataTodo;
        });
    },
  },
  created() {
    this.getTodo();
  },
  watch: {
    $route(data) {
      this.getTodo();
    },
  },
};
</script>

<style lang="css" scoped></style>
