<template>
    <div class="bg-white rounded-xl card-shadow p-6 mb-8 m-6">
        <div class="flex justify-between mb-3">
            <h1 class="font-medium text-[20px]">Emergency Funds</h1>
            <p class="text-[13px] bg-green-200 font-medium p-[4px] h-6.5 text-green-800 rounded">Fully Funded</p>
        </div>
     <div v-for="value in source">
           <div class="flex justify-between mt-5 mb-2">
            <div class="flex gap-1 ">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4" >
                    <i :class="value.icon"></i>
                    <!-- :class="fas fa-shield-alt text-green-600 text-3xl" -->
                </div>
                <div>
                    <h1 class="font-medium text-gray-800 mb-0.5">Emergency Savings</h1>
                    <p class="text-gray-500">{{value.reason}}</p>
                </div>
            </div>
            <div>
                <h1 class="font-bold text-gray-800 text-[20px]">{{value.amount}}</h1>
                <p class="text-gray-500 text-[13px] ml-1.5">{{value.target}}</p>
            </div>
        </div>
        <div class="mt-3 pt-4 border-t border-gray-100"></div>
     </div>
     <div>
        <h1 class="mb-3 font-medium">Quick Action</h1>
        <div class="flex gap-3">
            <button class="bg-[#eff6ff] text-[#1e40af] p-2 font-medium w-110 rounded-[7px] cursor-pointer hover:bg-[#dbeafe] transition-colors">
                <i class="fas fa-download mr-2"></i>
                Add Funds
            </button>
            <button class="bg-[#eff6ff] text-[#1e40af] p-2 font-medium w-110 rounded-[7px] hover:bg-[#dbeafe] transition-colors">
                <i class="fas fa-upload mr-2"></i>
                withdraw
            </button>
        </div>
     </div>
    </div>
    <div class=""></div>
</template>

<script setup>
   const source = [
{
    icon: "fas fa-shield-alt text-green-600 text-3xl",
    reason: "6 months of living expenses",
    amount: "₦600,000",
    target: "Target: ₦600,000" 
},
{
    icon: "fa-solid fa-hospital text-blue-600 text-3xl",
    reason: "1 year of medical savings",
    amount: "₦800,000",
    target: "Target: ₦1,000,000" 
},
   ]
</script>

<style scoped>

</style>