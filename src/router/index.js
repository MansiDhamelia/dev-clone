import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import CardDetail from '../components/CardDetail.vue'
import Articles from '../views/articles.vue'
import ArticleDetails from '../views/articleDetails.vue'
import Header from '../components/Header.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'header',
    component: Header
  },
  {
    path: '/home',
    name: 'Home',
    component: ArticleDetails
  },
  {
    path: '/article/:id',
    name: 'userprofile',
    component: ArticleDetails
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  },
 
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
