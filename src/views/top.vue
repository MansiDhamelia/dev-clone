<template>
  <div class="flex flex-wrap gap-1 justify-center">
    <CardDetail
      v-for="(article, i) in articles"
      :key="article.id"
      v-observe-visibility="
        i === articles.length - 1 ? lazyLoadArticles : false
      "
      :data="article"
    />
  </div>
</template>

<script>
import axios from "axios";
import CardDetail from "../components/CardDetail";

export default {
  components: {
    CardDetail,
  },
  data() {
    return {
      currentPage: 1,
      articles: [],
    };
  },
  methods: {
    async getTop() {
      const response = await axios.get(
        `https://dev.to/api/articles?tag=nuxt&top=365&page=${this.currentPage}`
      );
    
      this.articles = this.articles.concat(response.data);
    },
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.currentPage < 5) {
          this.currentPage++;
          this.getTop();
        }
      }
    },
  },
  created() {
    this.getTop();
    this.lazyLoadArticles();
  },
};
</script>