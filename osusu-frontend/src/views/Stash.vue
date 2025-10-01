<template>
    <div class="w-full h-screen flex bg-gray-100">
        <!-- left side nav -->
        <div class="w-[0.1%] md:w-auto h-full bg-gray-300">
            <SideBar />
        </div>
        <!-- main content -->
        <div class="w-[100%] md:w-full min-h-[100%]  flex flex-col items-center  overflow-auto">
            <div class="w-full mb-[30px]">
                <!-- <Topnav /> -->
                <TopBar />
                          <div class="flex justify-between m-5">
        <div>
          <h1 class="font-bold text-[20px] capitalize text-gray-600 whitespace-nowrap">my stash</h1>
          <p class="font-medium text-gray-500">Your personal savings and financial goal</p>
        </div>
        <div class="flex gap-5">
          <button class="h-10 bg-primary-600 text-white px-3 rounded-lg bg-[#2563eb] font-medium flex items-center hover:bg-[#1d4ed8] transition-colors whitespace-nowrap text-[10px] sm:text-[15px]"> <i class="fa fa-plus"></i> create new stash</button>
        </div>
      </div>
    <Jose />
    <Goal />
    <Emergency />
    <Recent />

            </div>
            <!-- user name -->


        </div>
        <!-- right side nav -->
        <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
    </div>
</template>

<script setup>
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import Emergency from '@/components/trans-card/emergency.vue';
import Goal from '@/components/trans-card/goal.vue';
import Jose from '@/components/trans-card/jose.vue';
import Recent from '@/components/trans-card/recent.vue';


</script>

<style lang="scss" scoped>

</style>