<template>
    <div class="w-full h-screen flex">
        <!-- left side nav -->
        <div class="w-[0.1%] md:w-auto h-full bg-gray-300">
            <SideBar />
        </div>
        <!-- main content -->
        <div class="w-[100%] md:w-full min-h-[100%]  flex flex-col items-center  overflow-auto">
            <div class="w-full     mb-[30px]">
                <!-- <Topnav /> -->
                <TopBar />
            </div>
            <div class="w-full pl-[20px] mb-[20px]">
                <router-link to="/groups"><i class="fa-solid fa-chevron-left cursor-pointer"></i></router-link>
            </div>
            <div class="w-full pl-[30px] font-[500] text-[24px] mb-[20px]">
                <h1>Group Profile</h1>
            </div>
            <!-- group image -->
            <div class="w-[150px] min-h-[150px] rounded-full border-[5px] border-gray-200  mb-[20px] bg-center bg-cover bg-no-repeat"
                style="background-image: url('/src/assets/images/user.png');"></div>
            <!-- group title -->
            <div
                class="w-[90%] md:w-[74%] py-[10px] shadow-md rounded-md flex flex-col  justify-center pl-[20px] mb-[20px]">
                <h1 class="font-[500] text-[18px]">Osas Wealth</h1>
                <p>[payout: ₦5000 weekly]</p>
            </div>
            <!-- group link -->
            <div class="w-[90%] md:w-[74%] py-[10px] shadow-md rounded-md flex gap-3 items-center pl-[10px]">
                <div class="hidden md:block"><i class="fa-solid fa-link"></i></div>
                <p class="font-[500] text-[18px]  w-[80%]">Group
                    Link:
                    <span
                        class="text-[14px] flex gap-1 items-center md:mr-[20px] font-normal ">https://osusu.com.ng/group/join/osgr1214rjkhdk</span>
                </p>
                <div class=" items-center gap-2 hidden md:flex">
                    <i class="fa-solid fa-copy cursor-pointer"></i>
                    <i class="fa-solid fa-share cursor-pointer"></i>
                </div>
            </div>
            <!-- group members list -->
            <div
                class="w-[90%] md:w-[74%] py-[10px] shadow-md rounded-md flex flex-col gap-3 justify-center pl-[20px] mb-[10px]">
                <h1 class="font-[500] text-[18px] mb-[20px]">Group Members</h1>
                <div class="flex flex-col gap-2">
                    <!-- first user is admin -->
                    <div class="flex items-center gap-[10px]">
                        <!-- user image -->
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-500 bg-center bg-cover bg-no-repeat"
                            style="background-image: url('/src/assets/images/user.png');"></div>
                        <!-- user name -->
                        <h5 class="font-[500]">Emma</h5>
                        <div>( Group Admin )</div>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <!-- user image -->
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-500 bg-center bg-cover bg-no-repeat"
                            style="background-image: url('/src/assets/images/user.png');"></div>
                        <!-- user name -->
                        <h5 class="font-[500]">Emma</h5>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <!-- user image -->
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-500 bg-center bg-cover bg-no-repeat"
                            style="background-image: url('/src/assets/images/user.png');"></div>
                        <!-- user name -->
                        <h5 class="font-[500]">Emma</h5>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <!-- user image -->
                        <div class="w-[40px] h-[40px] rounded-full bg-gray-500 bg-center bg-cover bg-no-repeat"
                            style="background-image: url('/src/assets/images/user.png');"></div>
                        <!-- user name -->
                        <h5 class="font-[500]">Emma</h5>
                    </div>
                </div>
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