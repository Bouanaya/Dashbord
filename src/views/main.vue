<template>
  <div class="space-y-6">
    <div class="mt-3 grid grid-cols-2 w-full gap-6">
      <portfolio />
      <Assits />
    </div>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-semibold">Market is down 0.80%</h1>
          <nav class="flex gap-2">
            <select
              name=""
              id=""
              class="border p-1 rounded-2xl font-semibold outline-none border-primary-200 hover:border-primary-500 duration-500 cursor-pointer "
            >
              <option value="">24h</option>
            </select>

            <select
              name=""
              id=""
              class="font-semibold border border-primary-200 hover:border-primary-500 duration-500 cursor-pointer  p-1 rounded-2xl outline-none"
            >
              <option value="">Top Gainera</option>
            </select>
          </nav>
        </div>
        <Table />
      </div>
      <div class="bg-B col-span-2 rounded-3xl relative">
        <div
          class="absolute w-full text-white px-6 py-8 h-full rounded-3xl bg-B z-30 top-0"
        >
          <h1 class="text-3xl">Earn free crybto with Coinview Earn !</h1>

          <p class="text-xs mt-4 text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            cum?
          </p>
          <button
            class="px-6 duration-700 text-B font-semibold py-1 mt-4 rounded-2xl bg-primary-200 hover:bg-primary-500 "
         
          >
            Earn Now
          </button>
        </div>
        <div
          class="absolute bottom-[-15px] z-10 w-[90%] left-6 h-28 rounded-2xl"
          style="background-color: rgb(var(--primary-400));"
        ></div>
        <div
          class="absolute bottom-[-25px] z-5 w-[80%] left-10 h-28 rounded-2xl"
          style="background-color: rgb(var(--primary-300));"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import portfolio from "@/components/portfolio.vue";
import Assits from "@/components/Assets.vue";
import Table from "../components/Table.vue";
</script>

<style scoped></style>
