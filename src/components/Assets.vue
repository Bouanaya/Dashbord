<template>
    <div>
        <div class="flex justify-between">
            <h1  class="text-3xl font-semibold">Your Assets</h1>
            <Assiste/>
        </div>
 
    <div class="grid grid-cols-3 gap-3 h-52 mt-3 " >
            <div class=" rounded-2xl flex justify-between flex-col px-3 py-4  "
            :class="color"
            v-for="{color , price, icon} in Assists" >
                <div class="">
                    <nav class="flex justify-between">
                        <h1 class="font-bold text-2xl" >{{price}}</h1>
                        <Menu/>
                    </nav>
                    <p class="font-medium">$204504</p>
                </div>
                <div class=" flex justify-between items-center">
                    <div class="w-10 h-10 rounded-2xl bg-white flex justify-center items-center shadow-lg"><h1 class="text-xl font-bold">{{icon}}</h1></div>
                    <h1>+0.14%</h1>
                </div>
            </div>
            
            

        </div>

    </div>
</template>

<script setup lang="ts">
import Assiste from '@/Icons/Assiste.vue';
// import Btc from '../components/BTC.vue'
import Menu from '@/Icons/Menu.vue';
const Assists = [
    {
        id: 1 ,
        color :" bg-[#cea3d1]",
        price : "1.25 BTC",
        icon : "B"
    },

    {
        id: 2 ,
        color :"bg-G",
        price : "0.32 LTC",
        icon : "L"
    },

    {
        id: 3 ,
        color :"bg-y",
        price : "1.25 ETH",
        icon : "E"
    }
]


</script>

<style scoped>

</style>