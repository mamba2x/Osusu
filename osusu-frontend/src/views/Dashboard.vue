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
      <div class="w-full flex flex-col  px-[3%] text-[24px] mb-[40px]">
        <h1 class="mb-5 font-[600]"><span class="text-2xl">👋</span>Welcome, {{ userDetails.firstname ?? ''
          }}</h1>
        <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 class="text-gray-500 text-sm font-medium mb-2">Total Balance</h2>
          <div class="flex items-baseline mb-4 ">
            <span class="text-3xl font-bold text-gray-800">₦245,780.50</span>
          </div>
          <div class="flex gap-2 text-[16px] w-full justify-between md:justify-start">
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded-lg flex cursor-pointer items-center hover:bg-blue-700 transition-colors">
              <i class="fas fa-plus mr-2"></i> Add Money
            </button>
            <button
              class="border border-blue-600 text-blue-600 px-4 py-2 cursor-pointer rounded-lg flex items-center hover:bg-blue-50 transition-colors">
              <i class="fas fa-exchange-alt mr-2"></i> Transfer
            </button>
          </div>
        </div>
      </div>
      <div class="grid w-full px-[3%] mb-[10px] grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Recent Groups Section -->
        <div class="bg-white rounded-xl shadow-sm  p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg font-semibold text-gray-800">Recent Groups</h2>
            <div v-if="mainGroups.length > 0">
              <a href="/groups" class="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">View
                All</a>
            </div>
          </div>

          <div v-if="mainGroups.length > 0" class="flex flex-col gap-4">
            <!-- Group Item 1 -->
            <GroupCard v-for="group in mainGroups" :key="group.id" :members="group.members"
              :contributionAmount="group.contributionAmount" :bgImage="group.bgImage" :groupName="group.groupName"
              :id="group.id" :activity="group.activity" :isAdmin="group.isAdmin" />
          </div>
          <div v-else class="w-full text-gray-500 flex justify-center items-center">Please Join or create a group <a
              href="/groups" class="ml-1 text-blue-400 underline">here</a></div>


        </div>

        <!-- Savings Balance Card -->
        <div class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Savings Balance</h2>

          <div class="space-y-4">
            <!-- Personal Savings -->
            <div class="p-4 bg-blue-50 rounded-lg">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-medium text-gray-800">Personal Savings</h3>
                <i class="fas fa-user text-blue-600"></i>
              </div>
              <p class="text-2xl font-bold text-gray-800">₦85,450</p>
            </div>

            <!-- Emergency Fund -->
            <div class="p-4 bg-yellow-50 rounded-lg">
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-medium text-gray-800">Emergency Fund</h3>
                <i class="fas fa-shield-alt text-yellow-600"></i>
              </div>
              <p class="text-2xl font-bold text-gray-800">₦160,330.50</p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-100">
            <h3 class="font-medium text-gray-800 mb-2">Quick Actions</h3>
            <div class="grid grid-cols-2 gap-2">
              <button
                class="cursor-pointer bg-blue-50 text-blue-700 py-2 rounded-lg font-medium text-sm flex items-center justify-center hover:bg-blue-100 transition-colors">
                <i class="fas fa-download mr-2"></i> Deposit
              </button>
              <button
                class="cursor-pointer bg-blue-50 text-blue-700 py-2 rounded-lg font-medium text-sm flex items-center justify-center hover:bg-blue-100 transition-colors">
                <i class="fas fa-upload mr-2"></i> Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import GroupCard from '@/components/cards/groupCard.vue';
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import { useGroupStore } from '@/stores/groups';
import { useUserStore } from '@/stores/userAuth';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount } from 'vue';

const auth = useAuthStore();
const { fetchGroups } = useGroupStore();
// onBeforeMount(async () => {
const mygroups = await fetchGroups(auth.accessToken);
// })

const userStore = useUserStore();
const userDetails = ref({})
const userTest = ref()
if (!userStore.userData) {
  userTest.value = await userStore.getUser(auth.accessToken)
  userDetails.value = userTest.value.userInfo ?? {}
} else {
  userDetails.value = userStore.userData
}
const { groups } = useGroupStore()
// const { myGroups } = useGroupStore()
const count = 0;
var mainGroups = []
// for (let index = 0; index < 3; index++) {
//   mainGroups.push(groups[index])
// }
if (mygroups.length < 3) {
  for (let index = 0; index < mygroups.length; index++) {
    mainGroups.push(mygroups[index])
  }
}
if (mygroups.length > 3) {
  for (let index = 0; index < 3; index++) {
    mainGroups.push(mygroups[index])
  }
}
// console.log(mygroups)


</script>

<style lang="scss" scoped></style>