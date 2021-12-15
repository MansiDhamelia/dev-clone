<template>
  <div class="sticky top-4 p-4 bg-gray-300 rounded-2xl">
    <div class="flex flex-row">
      <div class="">
        <img
          :src="user.profile_image"
          alt=""
          class="rounded-full mr-5 h-14 w-14 bg-red-100"
        />
      </div>
      <div>
        <h1 class="text-2xl font-medium tracking-tight">
          {{ user.name }}
        </h1>

        <label> @{{ user.username }}</label>
      </div>
    </div>
    <!-- v-if="userProfile.username" -->

    <div class="">
      <button
        class="
          w-full
          p-2
          rounded-lg
          uppercase
          text-center
          my-4
          font-semibold
          tracking-tight
          shadow-lg
          bg-gradient-to-r
          drop-shadow-xl
          bg-gray-300
        "
      >
        see profile
      </button>

      <div v-if="user.summary">
        <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
          about
        </p>
        <p class="text-sm leading-6 text-left">
          {{ user.summary }}
        </p>
      </div>
      <div v-if="user.location">
        <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
          location
        </p>
        <p class="text-sm leading-6 text-left">{{ user.location }}</p>
      </div>
      <div v-if="user.joined_at">
        <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
          joined
        </p>

        <p class="text-sm leading-6 text-left">{{ user.joined_at }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  computed: mapGetters(["article", "userProfile"]),

  data() {
    return {
      username: this.$route.params.username,
      user: "",
    };
  },
  created() {
    this.fetchUser(this.username);
  },
  methods: {
    async fetchUser(username) {
      const response = await axios.get(
        `https://dev.to/api/users/by_username?url=${username}`
      );
      this.user = response.data;
    },
  },
};
</script>