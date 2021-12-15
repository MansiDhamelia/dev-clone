import Vue from "vue";
import VueRouter from "vue-router";
import Articles from "../views/articles.vue";
import ArticleDetails from "../views/articleDetails.vue";
import Header from "../components/Header.vue";
import Top from "../views/top.vue";
import New from "../views/new.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "articles",
    component: Articles,
  },
  {
    path: "/home",
    name: "Home",
    component: ArticleDetails,
  },
  {
    path: "/articledetails/:username/:id",
    name: "articaldetails",
    component: ArticleDetails,
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles,
  },
  {
    path: "/top",
    name: "top",
    component: Top,
  },
  {
    path: "/new",
    name: "new",
    component: New,
  }
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
