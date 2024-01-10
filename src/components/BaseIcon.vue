<template>
  <div
    class="flex justify-center p-4 py-6"
    :style="{
      borderLeft: '2px solid transparent',
      borderLeftColor: props.isActive ? 'white' : 'none',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
