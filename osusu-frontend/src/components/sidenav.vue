<template>
  <div class="">
    <router-link :to="href" class=" flex items-center p-3 rounded-lg transition-color" :class="isLogOut"
      activeClass="bg-[#dbeafe] border-r-[3px] border-[#2563eb] text-[#1e40af] transition">
      <i :class="icon" class="mr-[10px] text-[15px] font-[200]"></i>{{ label }}
    </router-link>
  </div>
</template>

<script setup>
// import { useRoute } from 'vue-router';
// const route = useRoute();
const { label, href, icon } = defineProps([
  "label",
  "href",
  "icon"
]);
var isLogOut = ""

if (label == 'Logout') {
  var isLogOut = "hover:text-red-500 hover:bg-[#fedbdb] "
} else {
  var isLogOut = "hover:text-[#2563eb] hover:bg-[#dbeafe] "
}

// Debug route matching
// console.log('Current route:', route.path);
</script>