<template>
  <div
    class="
      flex flex-col flex-wrap
      m-2
      w-1/4
      relative
      rounded-3xl
      shadow-md
      hover:shadow-lg
    "
    @click="goTo(data.id, data.user.username)"
  >
    <div class="flex-none h-48 w-full relative">
      <img
        :src="data.social_image"
        alt="data.title"
        class="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
      />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-2xl font-semibold hover:text-blue-400">
          {{ data.title }}
        </h1>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex flex-wrap">
          <button
            class="
              p-2
              h-8
              m-2
              flex
              font-semibold
              items-center
              justify-center
              hover:shadow-lg hover:border-transparent
              shadow-md
              rounded-lg
              bg-gradient-to-r
              hover:from-gray-200
            "
            v-for="tag in data.tag_list"
            :key="tag"
          >
            #{{ tag }}
          </button>
        </div>
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-items-start gap-2">
          <i class="fa fa-heart" style="font-size: 20px">
            {{ data.positive_reactions_count }}
          </i>
          <br />
          <i class="fa fa-comment" style="font-size: 20px">
            {{ data.comments_count }}
          </i>
        </div>
        <div class="flex align justify-items-end">
          <p>{{ data.readable_publish_date }}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["allData"]),

  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions(["fetchArticle"]),

    goTo(id, username) {

      this.$router.push(`/articledetails/${username}/${id}`).catch(() => {});
    },
  },
};
</script>