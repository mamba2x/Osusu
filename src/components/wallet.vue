<template>
<div class="bg-white w-[339px] rounded-lg p-4 shadow-xl lg:w-[232px] lg:h-[100px] ">
        <p class="text-gray-500">{{ text }}</p>
        <h3 class="text-2xl font-bold">{{amount}}</h3>
      </div>
</template>
<script setup>
const { text, amount } = defineProps({
    text: String,
    amount:Number
}
)
</script>