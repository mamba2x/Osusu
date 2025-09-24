<template>
  <div class="dashboard-content">
    <topnav />
    <div class="bg-black w-1/5 mr-8 mt-[4.75%] h-screen fixed pt-[1.75%] pb-[1.75%] text-center group">
      <img src="@/assets/images/logo.svg" class="w-4/5 pb-[25%]" alt="Osusu Logo">
      <sidenav class="sidenav-content group-hover:opacity-70 hover:opacity-100" label="Dashboard" href="/dashboard" />
      <sidenav class="sidenav-content group-hover:opacity-70 hover:opacity-100" label="Groups" href="/groups" />
      <sidenav class="sidenav-content group-hover:opacity-70 hover:opacity-100" label="Wallet" href="/wallet" />
      <sidenav class="sidenav-content group-hover:opacity-70 hover:opacity-100" label="Support" href="/support" />
      <sidenav class="sidenav-content group-hover:opacity-70 hover:opacity-100" label="Logout" href="/logout" />
    </div>
    <main class="ml-[22%] p-5">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import topnav from '@/components/topnav.vue';
import sidenav from '@/components/sidenav.vue';
</script>