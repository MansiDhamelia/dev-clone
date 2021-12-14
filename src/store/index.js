import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  state: {
    articles: [],
    tags: {
      tag: "",
    },
    article: "",
  },
  getters: {
    allData: (state) => state.articles,
    tagList: (state) => state.tags,
    article: (state) => state.article,
  },
  mutations: {
    setArticles: (state, articles) => (state.articles = articles),
    setTag: (state, tag) => (state.tags = tag),
    setArticle: (state, article) => (state.article = article),
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get("https://dev.to/api/articles");

      commit("setArticles", response.data);
    },

    async fetchArticle({ commit }, id) {
      const response = await axios.get(`https://dev.to/api/articles/${id}`);
      this.article = response.data;
      // console.log(response.data);
      commit("setArticle", response.data);
    },

    async fetchTag({ commit, id }) {
      const response = await axios.get(`https://dev.to/api/articles/${id}`);

      commit("setTag", response.data);
    },
  },
  modules: {},
});
