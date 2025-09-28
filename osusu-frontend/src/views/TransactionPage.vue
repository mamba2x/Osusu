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
      </div>
      <!-- user name -->
      <div class="w-full flex flex-col font-[500] px-[3%] text-[24px] mb-[40px]">
        <h1><i class="fas fa-clock-rotate-left"></i> Transaction History</h1>

      </div>

    </div>
    <!-- right side nav -->
    <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
  </div>
</template>

<script setup>
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';


</script>

<style lang="scss" scoped></style>