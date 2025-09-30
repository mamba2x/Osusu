<template>
    <div class="bg-white rounded-xl shadow-md p-6 m-6">
           <div class="flex justify-between mb-6">
            <p class="text-lg font-semibold text-gray-800 capitalize"
            >my saving goals</p>
            <h1>
                <select class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>All Goals</option>
                <option>Active</option>
                <option>Completed</option>
                </select>
            </h1>
           </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div v-for="value in source">
     <div
    c class="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all w-[410px]"
    >
    <div class="flex justify-between">
       <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
         <i :class="[value.icon, value.size, value.color]"></i>
       </div>
       <div :class="value.col">
         <p class="bg-blue-100 text-xs font-medium px-2 py-1 rounded capitalize">{{ value.active ? 'active' : 'completed'}}</p>
       </div>
    </div>
       <h1 class="font-semibold text-lg text-gray-800 mb-2 capitalize mt-5">{{ value.goal }}</h1>
    <p class="text-gray-500 text-sm mb-6">{{ value.reason }}</p>
    <div class="flex justify-between text-sm">
        <p class="text-gray-500" >Progress</p>
        <h1 class="font-medium">{{ value.amount }}</h1>
    </div>
    <div class="mb-4">
      <progress class="progress  w-95" :class="value.active ? 'progress-primary' : 'progress-[gray]'" :value="value.progress" max="100"></progress>
    </div>
        <div class="flex justify-between text-gray-500 ">
            <h1>Target Date</h1>
            <h2>Monthly Save</h2>
        </div>
        <div class="flex justify-between capitalize font-medium ">
            <h1>{{ value.month }}</h1>
            <h2>{{ value.secAmount }}</h2>
        </div>


        <div class="flex space-x-2 mt-4 mb-2">
            <button
            class="flex-1  text-white py-2 rounded-lg  text-sm font-medium hover:bg-primary-700 transition-colors capitalize"
            :class="value.active ? 'bg-[#2563eb] cursor-pointer' : 'bg-gray-500 cursor-not-allowed'">
            {{ value.active ? 'Add Funds' : 'Completed'}}</button>
           <button
           class="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
           >
            <i class="fas fa-ellipsis-v"></i>
           </button>
        </div>
    </div>
   </div>
  </div>
 <div class=""></div>
    </div>
</template>

<script setup>
   const source = [
    {
     active : true,
     goal : "new car" ,
     reason: "Saving for a down payment on a new vehicle",
     amount : "₦450,000 / ₦600,000",
     month :"dec 2024",
     secAmount: "₦25,000",
     icon:"fa fa-car",
     color: "text-blue-600",
     size: "text-[25px]" ,
     col: "text-blue-800 bg-blue-100 h-6 rounded ",
     progress: 60
    },
     {
     active : true,
     goal : "House Down Payment" ,
     reason: "Saving for a down payment on a new home",
     amount : "₦1,200,000 / ₦2,500,000",
     month :"june 2024",
     secAmount: "₦50,000",
     icon:"fas fa-home",
     color: "text-green-600",
     size: "text-[25px]" ,
     col: "text-green-800 bg-green-100 h-6 rounded",
     progress: 70
    },
        {
     active : true,
     goal : "Europe Vacation" ,
     reason: "Saving for a dream vacation to Europe",
     amount : "₦350,000 / ₦800,000",
     month :"Aug 2024",
     secAmount: "₦20,000",
     icon:"fas fa-umbrella-beach",
     color: "text-purple-600",
     size: "text-[25px]" ,
     col: "text-purple-800 bg-purple-100 h-6 rounded",
     progress: 50
    },
        {
     active : false,
     goal : "House Down Payment" ,
     reason: "Saving for a down payment on a new home",
     amount : "₦1,200,000 / ₦2,500,000",
     month :"june 2024",
     secAmount: "₦50,000",
     icon:"fas fa-home",
     color: "text-green-600",
     size: "text-[25px]" ,
     col: "text-green-800 bg-green-100 h-6 rounded",
     progress: 100
    },
   ]
</script>

<style  scoped>

</style>