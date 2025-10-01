<template>
    <div class="bg-white rounded-xl card-shadow p-6 m-7">
        <h1 class="font-medium mb-6">Recent Stash Activity</h1>
        <div v-for="value in source">
            <div class="flex justify-between">
                <div class="flex gap-1">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <i :class="value.icon"></i>
                        <!-- class="fa fa-plus text-green-600 "> -->
                    </div>
                    <div class="">
                        <h1 class="font-medium">{{ value.desc }}</h1>
                        <p class="text-sm text-gray-500">{{ value.reason }}</p>
                    </div>
                </div>
                <div>
                    <h1 class="text-[10px] sm:text-[15px] text-gray-500 whitespace-nowrap">{{ value.time }}</h1>
                    <p class="font-medium text-green-600 whitespace-nowrap">{{ value.amount }}</p>
                </div>
            </div>
            <div class="mt-3 pt-4 border-t border-gray-100 mb-2"></div>
        </div>
        <div class="flex justify-center font-medium text-[#2563eb] ">
            <button class="cursor-pointer">View All Activities</button>
        </div>
    </div>

</template>

<script setup>
const source = [
    {
        icon: "fa fa-plus text-green-600",
        desc: "Added to New Car fund",
        reason: "You added ₦25,000 to your car savings",
        time: "Today, 9:15 AM",
        amount: "+₦25,000"
    },
    {
        icon: "fas fa-bullseye  text-blue-600",
        desc: "New goal created",
        reason: "You created Europe Vacation savings goal",
        time: "3 days ago",

    },
    {
        icon: "fa fa-plus text-green-600",
        desc: "Added to House Down Payment",
        reason: "You added ₦50,000 to your home savings",
        time: "1 week ago",
        amount: "+₦60,000"
    },
]
</script>

<style scoped></style>