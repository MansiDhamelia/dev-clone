<template>
  <div class="m-auto p-4 max-w-7xl">
    <div class="flex flex-row">
      <div class="mr-4 mb-8 w-8/12">
        <h1 class="flex-auto text-3xl mb-5 tracking-tight font-semibold">
          title
        </h1>

        <div class="flex mb-6 flex-wrap">
          <button
            class="
              p-2
              leading-4
              mr-2
              mb-2
              flex
              text-xl
              font-medium
              items-center
              justify-center
              hover:shadow-lg hover:border-transparent
              shadow-md
              rounded-md
              bg-gradient-to-r
              hover:from-gray-200
            "
            v-for="tag in data.tags"
            :key="tag"
          >
            #{{ tag }}
          </button>
        </div>
        <div class="relative pb-96 bg-gray-400 mb-6 rounded-lg">
          <img
            src="../assets/cloud.jpeg"
            class="absolute rounded-lg object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row justify-items-start gap-2">
            <i class="fa fa-heart" style="font-size: 20px"> 22 </i>
            <br />
            <i class="fa fa-comment" style="font-size: 20px"> 32 </i>
          </div>
          <div class="flex align justify-items-end">
            <p>255</p>
          </div>
        </div>
        <div class="">
          <p class="mb-4 leading-6">dssfcxdc</p>
        </div>
      </div>
      <div class="w-4/12">
        <UserProfile />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";

export default {
  components: {
    UserProfile,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
