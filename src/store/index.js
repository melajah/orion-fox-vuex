import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
    isLogggedIn: false,
  },
  mutations: {
    SET_COUNT(state, n) {
      state.count += n;
    },
    SET_TODOS(state, payload) {
      state.todos = payload;
    },
    SET_ISLOGGEDIN(state, payload) {
      state.isLogggedIn = payload;
    },
  },
  actions: {
    getTodos({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then((response) => response.json())
        .then((dataTodos) => {
          commit("SET_TODOS", dataTodos);
        })
        .catch(console.log);
    },
    doLogin({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    },
  },
});

export default store;
