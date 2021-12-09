<template>
  <div class="flex flex-col m-2 h-auto w-80 bg-gray-100 relative rounded-3xl">
    <div class="flex-none h-40 w-80 relative">
        <img src="../assets/cloud.jpeg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-t-3xl" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">
          Build news Aggregatop App using Strapi and Nuxtjs
        </h1>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex flex-wrap">
          
          <button class="p-2 h-8 flex items-center justify-center hover:shadow-lg hover:border-transparent shadow-2xl rounded-md">#item 1</button>
          <button class="p-2 h-8 flex items-center justify-center bg-gray-100 rounded-md">#item 2</button>
          <button class="p-2 h-8 flex items-center justify-center bg-gray-100 rounded-md">#item 3</button>
          <button class="p-2 h-8 m-2 flex items-center justify-center bg-gray-100 rounded-md">#item 4</button>
       
       
        </div>
      </div>

      <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-items-start gap-2">
        
         <!-- <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
        <svg width="20" height="20" class="border-0" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button> -->
         <!-- <p> ❤ <b>  2 </b> </p> <br>   -->

         <i class="fa fa-heart " style="font-size: 20px;"> 9 </i> <br>  
         <i class="fa fa-comment" style="font-size: 20px;"> 0 </i>
       
        </div>
        <div class="flex align justify-items-end">
          <p>Dec 6</p>
        </div>
      </div>
    </form>
  </div>
</template>



