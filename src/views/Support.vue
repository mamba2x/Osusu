<template>
  <div class="support-content">
    <topnav @toggle-sidenav="toggleSidenav" />
    <div :class="['bg-[#1E3A8A] top-6 h-screen fixed pt-4 pb-4 text-center transition-transform duration-300 ease-in-out md:block md:w-1/5 md:mr-8', isSidenavOpen ? 'translate-x-0 z-50 w-[45%]' : 'translate-x-[-100%] z-50 w-[30%]', !isSidenavOpen && 'md:translate-x-0']">
      <img src="@/assets/images/logo.svg" class="m-[28%] ml-[12%] w-4/5 mb-[16%] max-w-full h-auto" alt="Osusu Logo">
      <sidenav label="Dashboard" href="/dashboard" />
      <sidenav label="Groups" href="/groups" />
      <sidenav label="Wallet" href="/wallet" />
      <sidenav label="Support" href="/support" />
      <sidenav label="Logout" href="/logout" />
    </div>
    <main class="p-5 md:ml-[22%]">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import topnav from '@/components/topnav.vue';
import sidenav from '@/components/sidenav.vue';

const isSidenavOpen = ref(false);

const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};
</script>