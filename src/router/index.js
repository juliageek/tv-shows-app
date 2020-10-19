import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Shows from "@/components/shows/Shows.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{ path: "", component: Shows }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
