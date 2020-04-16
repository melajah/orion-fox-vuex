<template>
  <div>
    <h1>List todos</h1>
    <hr />
    <div>
      <ul>
        <li v-for="todo in $store.state.todos">
          <router-link
            :to="{
              name: 'DetailTodo',
              params: { id: todo.id },
            }"
          >
            {{ todo.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Todos",

  data() {
    return {};
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapActions(["getTodos"]),
  },
  created() {
    this.getTodos();
  },
};
</script>

<style lang="css" scoped></style>
