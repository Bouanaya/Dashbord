 <template>
  <div class="bg-B w-screen h-screen flex fixed">
  <Aside></Aside>
  <div class=" w-full h-full overflow-hidden p-3  ">
    <div class="bg-white h-full rounded-[20px] px-12 py-6">
    <Header></Header>
    

    <slot>
      <router-view></router-view>
    </slot>
    
  </div>
  </div>
</div>
 
  
 </template>
 
 <script setup lang="ts">
 import Aside from '@/components/Aside.vue';
 import Header from '@/components/Header.vue';
 </script>
 
 <style lang="scss" scoped>
 
 </style>