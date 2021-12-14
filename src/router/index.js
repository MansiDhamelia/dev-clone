import Vue from "vue";
import VueRouter from "vue-router";
import Articles from "../views/articles.vue";
import ArticleDetails from "../views/articleDetails.vue";
import Header from "../components/Header.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "header",
    component: Header,
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
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
