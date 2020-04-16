import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Todos from "../views/Todos.vue";
import DetailTodo from "../components/DetailTodo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
    children: [
      {
        path: ":id",
        name: "DetailTodo",
        component: DetailTodo,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
