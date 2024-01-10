<template>
  <div>
    <h1 class="text-3xl font-semibold">PortFolio</h1>
    <div class="mt-3 w-full h-52 bg-[#d8e8f5] rounded-2xl px-6 py-3 flex justify-between flex-col ">
      <div class="">
        <nav class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">$17643.41</h1>
          <Menu/>
        </nav>
        <p class="font-semibold text-xl">portfolio balance</p>
      
      </div>
      <div class="flex gap-7 text-slate-500">
        <button>BY</button>
        <button>FR</button>
        <button>MN</button>
        <button>GO</button>
        <button>BUT</button>
        
        <button>ALL</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Menu from '@/Icons/Menu.vue';



</script>

<style lang="scss" scoped>
 



</style>
