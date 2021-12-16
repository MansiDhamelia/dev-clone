<template>
  <div class="max-w-7xl m-auto p-4">
    <div
      class="
        flex
        justify-center
        items-center
        flex-wrap
        bg-gray-300
        rounded-2xl
        p-8
        m-2
      "
    >
      <div
        class="
          w-60
          h-60
          top-0
          left-0
          max-w-full
          align-middle
          pb-0.5
          rounded-full
          overflow-hidden
          relative
        "
      >
        <img :src="user.profile_image" class="absolute w-full h-full" />
      </div>
      <div class="w-1/2 px-8 py-0 mb-0">
        <h1 class="text-5xl mb-5 tracking-tight leading-1">
          {{ user.name }}
        </h1>
        <a
          class="
            block
            w-full
            p-2
            rounded-lg
            uppercase
            text-center
            font-semibold
            tracking-tight
            mb-4
            shadow-lg
            bg-gradient-to-r
             bg-gray-300
            hover:shadow-lg hover:border-transparent hover:from-gray-200
          "
          >Follow
        </a>
        <div v-if="user.summary" class="mb-4 leading-1.4 text-xl text-left">
          {{ user.summary }}
        </div>
        <div class="flex m-2 text-2xl gap-4">
          <!-- <a href="" class="m-2 cursor-pointer"></a> -->
          <i v-if="user.twitter_username" class="fa fa-twitter"></i>
          <i v-if="user.github_username" class="fa fa-github"></i>
        </div>
      </div>
      <div class="w-1/4">
        <div v-if="user.location" class="mb-2 block">
          <label
            class="
              text-sm
              tracking-tight
              font-medium
              text-gray-400
              uppercase
              mb-1
            "
            >location</label
          >
          <p class="text-xl leading-5">{{ user.location }}</p>
        </div>
        <div v-if="user.joined_at" class="mb-2 block">
          <label
            class="
              text-sm
              tracking-tight
              font-medium
              text-gray-400
              uppercase
              mb-1
            "
            >joined</label
          >
          <p class="text-xl leading-5">{{ user.joined_at }}</p>
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-wrap gap-5 justify-center m-auto p-4 box-content"
    >
      <cardBlock
        v-for="article in userData"
        :key="article.id"
        :data="article"
      />
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import cardBlock from "../components/CardDetail.vue";

export default {
  computed: mapGetters(["article"]),

  components: {
    cardBlock,
  },
  data() {
    return {
      username: this.$route.params.username,
      userData: {},
      user: "",
    };
  },

  methods: {
    async fetchUserDetail(username) {
      const result = await axios.get(
        `https://dev.to/api/articles?username=${username}`
      );
      this.userData = result.data;
    },
    async fetchUser(username) {
      const result = await axios.get(
        `https://dev.to/api/users/by_username?url=${username}`
      );
      this.user = result.data;
    },
  },

  created() {
    this.fetchUserDetail(this.username);
    this.fetchUser(this.username);
  },
};
</script>