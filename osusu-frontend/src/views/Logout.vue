<template>
  <div class="w-full h-screen flex">
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
      <!-- page name -->
      <div class="w-full pl-[30px] font-[500] text-[24px] mb-[20px]">
        <h1>Dashboard</h1>
      </div>

    </div>
    <!-- right side nav -->
    <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
  </div>
</template>

<script setup>
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  // ✅ Clear authentication info (localStorage/session/cookies)
  // localStorage.removeItem("accessToken"); // or whatever you use
  // localStorage.removeItem("user");

  // ✅ Redirect to guest page
  router.push({ name: "Login" });
});
</script>


<style lang="scss" scoped></style>