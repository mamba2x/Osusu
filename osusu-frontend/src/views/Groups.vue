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
      <div class="w-full flex flex-col font-[500] px-[3%] text-[24px] mb-[40px]">
        <div class="flex flex-col md:flex-row w-full justify-between mb-5">
          <h1 class="mb-3 md:mb-0"><i class="fas fa-users"></i> My Groups</h1>
          <div class="flex gap-4 text-[13px] md:text-[15px]">
            <button
              class="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors">
              <i class="fas fa-plus mr-2"></i> Create New Group
            </button>
            <button
              class="border border-blue-600 cursor-pointer text-blue-600 px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors">
              <i class="fas fa-user-plus mr-2"></i> Join Group
            </button>
          </div>
        </div>

        <!-- Groups List -->
        <div class="bg-white rounded-xl card-shadow p-6">
          <div class="flex flex-col gap-4">

            <div v-if="groups.length > 0" class="flex flex-col gap-4">
              <!-- Group Item 1 -->
              <GroupCard v-for="group in groups" :key="group.id" :members="group.members"
                :contributionAmount="group.contributionAmount" :bgImage="group.bgImage" :groupName="group.groupName"
                :id="group.id" :activity="group.activity" :isAdmin="group.isAdmin" />
            </div>
            <div v-else class="w-full text-gray-500 flex justify-center items-center">Please Join or create a group
            </div>

          </div>
        </div>

      </div>

    </div>
    <!-- right side nav -->
    <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
  </div>
</template>

<script setup>
import GroupCard from '@/components/cards/groupCard.vue';
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import { useGroupStore } from '@/stores/groups';

const { groups } = useGroupStore()
groups.sort((a, b) => b.isAdmin - a.isAdmin)





</script>

<style lang="scss" scoped></style>