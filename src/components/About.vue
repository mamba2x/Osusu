<!-- About.vue -->
<script setup>
defineProps({
  features: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="px-4 lg:px-24 mt-15">
    <div class="max-w-7xl mx-auto grid gap-13 lg:grid-cols-2 lg:gap-25">
      <div 
        v-for="(feature, index) in features" 
        :key="index"
        class="rounded-[20px] gap-6 px-4 py-4 lg:flex items-center lg:justify-between lg:px-7"
        style="border: 1px solid gray; box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 0 40px 0 rgba(0, 0, 0, 0.05);">
        <div class="w-[25%] bg-blue-600 rounded-[20px] flex items-center justify-center py-3 lg:w-[50%] lg:py-14 px-4">
          <img :src="feature.icon" :alt="feature.title" width="50px">
        </div>
        <div class="mt-4">
          <h1 class="text-[22px] font-semibold lg:text-[23px]">{{ feature.title }}</h1>
          <p class="text-[20px] text-gray-700 lg:text-[21px]">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>