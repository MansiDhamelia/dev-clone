<template>
  <div class="sticky top-4 p-4 bg-gray-300 rounded-2xl">
    <div class="flex flex-row">
      <div class="">
        <img
          src="../assets/cloud.jpeg"
          alt=""
          class="rounded-full mr-5 h-14 w-14 bg-red-100"
        />
      </div>
      <div class="">
        <h1 class="text-2xl font-medium tracking-tight">user name</h1>
        <label> website url</label>
      </div>
    </div>

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
      <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
        about
      </p>
      <p class="text-sm leading-6 text-left">
        abcd DFJD JDFJDFJDJFJ kjfkdjfkdjfk kj oierolksdklAF l/jfkdi mf
      </p>

      <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
        location
      </p>
      <p class="text-sm leading-6 text-left">India</p>

      <p class="mb-1 uppercase font-medium text-xs text-gray-400 text-left">
        joined
      </p>

      <p class="text-sm leading-6 text-left">join date</p>
    </div>
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
  methods: {},
};
</script>