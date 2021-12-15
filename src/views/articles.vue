<template>
  <div class="flex flex-wrap gap-1 justify-center">
    <CardDetail v-for="article in allData" :key="article.id" :data="article" />
  </div>
</template>


<script>
import CardDetail from "../components/CardDetail";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["allData"]),

  components: {
    CardDetail,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  created() {
    this.fetchData();
  },
};
</script>