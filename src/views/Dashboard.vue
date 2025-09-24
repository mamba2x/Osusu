<template>
  <div class="dashboard-content">
    <topnav @toggle-sidenav="toggleSidenav" />
    <div :class="['bg-[#1E3A8A] top-6 h-screen fixed pt-4 pb-4 text-center transition-transform duration-300 ease-in-out md:block md:w-1/5 md:mr-8', isSidenavOpen ? 'translate-x-0 z-50 w-[45%]' : 'translate-x-[-100%] z-50 w-[30%]', !isSidenavOpen && 'md:translate-x-0']">
      <img src="@/assets/images/logo.svg" class="m-[28%] ml-[12%] w-4/5 mb-[16%] max-w-full h-auto" alt="Osusu Logo">
      <sidenav label="Dashboard" href="/dashboard" />
      <sidenav label="Groups" href="/groups" />
      <sidenav label="Wallet" href="/wallet" />
      <sidenav label="Support" href="/support" />
      <sidenav label="Logout" href="/logout" />
    </div>
          <!-- wallet area -->
<div class="bg-[#e6e6e6] mt-[0] p-4 pt-[58px]  lg:min-h-screen lg:ml-[15rem] lg:pt-[58px] lg:p-10">
        <h1 class="text-[grey] text-[22px] font-bold">Welcome back, <span class="text-[#000000c0]">Raymond</span> </h1>
    <div>
        <mainwallet/>
    </div>
<div class="grid grid-cols-1 lg:[grid-template-columns:repeat(3,minmax(100px,240px))] gap-2">
        <wallet text="Assets" amount="2,556,897.34"/>
        <wallet text="Liabilities" amount="1,265,609.01"/>
        <wallet text="Equity" amount="187,323.76"/>
        <wallet text="Income" amount="522,897.34"/>
        <wallet text="Expenses" amount="399,609.01"/>
        <wallet text="Net Profit" amount="125,215.76"/>
    </div>
</div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import topnav from '@/components/topnav.vue';
import sidenav from '@/components/sidenav.vue';
import mainwallet from '@/components/mainwallet.vue'
import wallet from '@/components/wallet.vue';

const isSidenavOpen = ref(false);

const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};
</script>