<template>
  <div class="">
  <div class="w-full flex justify-between items-center   ">
    
    <h1 class="text-4xl font-bold">Overview</h1>
    <div class="flex gap-4 items-center">
      <div class="flex gap-3">
      <Search/>
      <Notification/>
      
    </div>
    <div class="flex items-center gap-2 bg-[#d8e8f5] rounded-2xl h-8 pr-2">
      <img src="../../public/Imgs/6dbf4458d689bde93e9a6ebe52456f23.jpg" class="w-10 h-10 bg-cover rounded-full " alt="">
     <h1 class="font-semibold ">Zioa.M</h1>
      <select name="" id="" class="bg-transparent outline-none">
        <option value="1"></option>
        <option value="2"></option>
      </select>
    </div>
      



    </div>
    
    
  </div>
</div>
 
</template>

<script setup lang="ts">
import Search from '@/Icons/Search.vue';
import Notification from '@/Icons/Notification.vue';



</script>

<style scoped></style>
