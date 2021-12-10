<template>
  <div class="">
    <div class="flex flex-wrap gap-1 justify-center">
      <!-- <label>ab: {{ article.title }}</label> -->
      <CardDetail
        v-for="article in allData"
        :key="article.id"
        :data="article"
      />
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import CardDetail from "../components/CardDetail.vue";

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