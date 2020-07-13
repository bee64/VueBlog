import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "feed",
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ "../components/Blog.vue")
  },
  {
    path: "/read/:post",
    name: 'post',
    props: true,
    component: () => import (/* webpackChunkName: "blog" */ "../components/Blog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
