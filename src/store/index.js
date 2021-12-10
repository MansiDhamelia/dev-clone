import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from "vue-router";


Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  state: {
    articles: [],
    tags:{
      tag: "",
    }
  },
  getters: {
    allData: (state) => state.articles,
    tagList: (state) => state.tags,

  },
  mutations: {
    setArticles: (state, articles) => (state.articles = articles),
    setTag: (state, tag) => (state.tags = tag),
  },
  actions: {
    async fetchData({ commit }) {
      console.log("asa");
      const response = await axios.get("https://dev.to/api/articles");

      commit("setArticles", response.data);
   
    },

    async fetchTag({commit, id}){
      const response = await axios.get(`https://dev.to/api/articles/${id}`);

      commit("setTag", response.data)
    },
  },
  modules: {},


});
