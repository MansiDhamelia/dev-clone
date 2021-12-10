<template>
 
    <div class="flex flex-wrap gap-1 justify-center" @click="goTo(data.id)">
      <CardDetail
        v-for="article in allData"
        :key="article.id"
        :data="article"
      />
    </div>
 
</template>


<script>
import CardDetail from "../components/CardDetail";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["allData"]),
  // id: this.$route.params.id,

  components: {
    CardDetail,
  },
  methods: {
    ...mapActions(["fetchData"]),

    goTo(id) {
      console.log(id);
      this.fetchArticle(id);
      this.$router.push(`/article/${id}`).catch(() => {});
    },
  },
  created() {
    this.fetchData();
  },
};
</script>