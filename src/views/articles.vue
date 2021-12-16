<template>
  <div class="flex flex-wrap gap-1 items-start justify-center">
    <CardDetail
      v-for="(article, i) in allData"
      :key="article.id"
      v-observe-visibility="i === allData.length - 1 ? lazyLoadArticles : false"
      :data="article"
    />
  </div>
</template>


<script>
import CardDetail from "../components/CardDetail";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["allData"]),

  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    CardDetail,
  },
  methods: {
    ...mapActions(["fetchData"]),

    lazyLoadArticles(isVisible) {
      if (isVisible) {
        console.log("hgdhsgh");
        if (this.currentPage < 5) {
          this.currentPage++;
          this.new();
        }
      }
    },
  },
  created() {
    this.fetchData();
    // this.lazyLoadArticles();
  },
};
</script>