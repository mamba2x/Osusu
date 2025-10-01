<template>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
    <div v-for="value in source" class="mx-4 sm:ml-3">
     <div class="bg-white rounded-xl shadow-lg p-6 w-full sm:w-72 flex justify-between">
        <div>
            <p class="text-gray-500 text-sm capitalize">{{ value.test }}</p>
            <h1 class="text-2xl font-bold text-gray-800">{{value.num}}</h1>
        </div>
        <div
          class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <i :class="[value.icon, value.color, value.size]"></i>
        </div>
    </div>
   </div>
</div>
</template >

<script setup>
    const source = [
        {
            test:  "Total Stash Value",
            num : "₦245,780",
            icon:  "fas fa-vault",
            color : "text-[#2563eb]",
            size: "text-xl"
        },
          {
            test:  "Active Goals",
            num : "4",
            icon:  "fas fa-bullseye",
            color : "text-[#16a34a]",
            size: "text-xl"
        },
          {
            test:  "Completed Goals",
            num : "2",
            icon:  "fas fa-check-circle" ,
            color : "text-[#9333ea]",
            size: "text-xl"
        },
        
    ]
</script>

<style scoped>

</style>
