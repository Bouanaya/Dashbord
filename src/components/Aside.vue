<template>
  <div class="w-20 bg-B h-screen flex justify-between flex-col py-8">
    <div class="flex flex-col gap-20">
      <logo />

      <div class="">
        <router-link to="/" v-slot="{ isActive }">
          <a>
            <BaseIconVue :is-active="isActive">
              <Box />
            </BaseIconVue>
          </a>
        </router-link>

        <router-link to="/file" v-slot="{ isActive }">
          <a>
            <BaseIconVue :is-active="isActive">
              <file />
            </BaseIconVue>
          </a>
        </router-link>    <router-link to="/stati" v-slot="{ isActive }">
          <a>
            <BaseIconVue :is-active="isActive">
              <Chart />
            </BaseIconVue>
          </a>
        </router-link>
        <router-link to="/profi" v-slot="{ isActive }">
          <a>
            <BaseIconVue :is-active="isActive">
              <profil />
            </BaseIconVue>
          </a>
        </router-link>

      
      </div>
    </div>
    <div class="">
      <div class="flex justify-center">
        <Out />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "../Icons/logo.vue";
import Box from "../Icons/Box.vue";
import file from "../Icons/file.vue";
import Out from "../Icons/Out.vue";
import Chart from "../Icons/Chart.vue";
import Profil from "../Icons/profil.vue";
import BaseIconVue from "./BaseIcon.vue";
</script>

<style>
.active {
  /* Your styles for the active route */
  color: red;
  font-weight: bold;
  background: red;
}
</style>
