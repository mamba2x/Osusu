<template>
  <div class="fixed top-0 left-0 w-full bg-white z-[100] border-b border-black py-2.5 px-0">
    <div class="flex items-center px-5">
      <a href="#" class="md:hidden" aria-label="Toggle Sidenav" @click="$emit('toggle-sidenav')">
        <span class="fa fa-bars text-[22px] text-black"></span>
      </a>
      <div class="flex gap-4 ml-auto">
        <a href="#" aria-label="Notifications" @click="activeLink = 'notifications'"
          :class="['inline-block', activeLink === 'notifications' ? 'bg-gray-500' : '']">
          <span class="fa fa-bell text-[22px] text-red-600"></span>
        </a>
        <a href="/profile" aria-label="User Profile" @click="activeLink = 'profile'"
          :class="['inline-block', activeLink === 'profile' ? 'bg-gray-500' : '']">
          <span class="fa fa-user text-[22px] text-black"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeLink = ref('');
</script>