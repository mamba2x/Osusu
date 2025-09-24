<template>
  <div class="px-5 py-2.5">
    <router-link :to="href" :class="['no-underline p-[10%] pl-[25%] flex justify-start transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-black', $route.path === href ? 'text-black bg-white' : 'text-white']">
      <h4 class="m-0">{{ label }}</h4>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const { label, href } = defineProps({
  label: String,
  href: String
});

// Debug route matching
console.log('Current route:', route.path);
</script>