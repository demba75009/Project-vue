import Vue from "vue";
import VueRouter from "vue-router";
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";
import Like from "../components/Like";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/UserList",
      component: UserList,
    },

    {
      path: "/Like",
      component: Like,
    },

    {
      path: "/AddUser",
      component: AddUser,
    },

    {
      path: "/",
      component: UserList,
    },

    {
      path: "*",
      component: UserList,
    },
  ],
});
