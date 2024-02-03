<template>
    <div class="mt-3">
        <table class="min-w-full">
          <thead class="text-left">
            <tr class="text-slate-600 capitalize">
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Marrket Cap</th>
              <th>Watch</th>
            </tr>
          </thead>
          <tbody class="overflow-y-auto text-left">
            <tr v-for="Table in dataTables" class="text-left w-full">
              <td>
                <div class="flex gap-3 mt-2">
                  <div
                    class="w-11 h-11 rounded-2xl bg-B flex justify-center items-center shadow-md"
                  >
                    <h1 class="text-xl text-white font-bold">
                      {{ Table.icon }}
                    </h1>
                  </div>
                  <div class="">
                    <h1 class="font-semibold p-0">{{ Table.Name }}</h1>
                    <p class="text-[#d1e5f5] text-sm">{{ Table.product }}</p>
                  </div>
                </div>
              </td>
              <td class="text-left font-semibold">
                {{ Table.price }}
              </td>
              <td class="font-semibold text-primary-600 ">
                {{ Table.change }}
              </td>
              <td class="font-semibold">
                {{ Table.MarketCap }}
              </td>
              <td>
                <Star />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script lang="ts" setup>
import { color } from "chart.js/helpers";
import Star from "../Icons/Star.vue";
import type { TabPanelEmits } from "primevue/tabpanel";

 const dataTables = [
  {
    Name: "Band protecd",
    product: "BANO",
    price: "$2.42",
    change: "+13.38%",
    MarketCap: "$399.8M",
    icon: "B",

    
  },
  {
    Name: "VenChen",
    product: "LAMO",
    price: "$2.42",
    change: "-9.33%",
    MarketCap: "$399.8M",
    icon: "V",
  },
  {
    Name: "Async",
    product: "BAM",
    price: "$2.42",
    change: "+13.38%",
    MarketCap: "$399.8M",
    icon: "A",
  },
];






</script>