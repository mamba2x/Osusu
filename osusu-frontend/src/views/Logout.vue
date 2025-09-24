<template>
  <div class="pt-[60px]">
    <topnav @toggle-sidenav="toggleSidenav" />
    <div :class="['bg-black top-6 h-screen fixed pt-4 pb-4 text-center transition-transform duration-300 ease-in-out md:block md:w-1/5 md:mr-8', isSidenavOpen ? 'translate-x-0 z-50 w-[45%]' : 'translate-x-[-100%] z-50 w-[30%]', !isSidenavOpen && 'md:translate-x-0']">
      <img src="@/assets/images/logo.svg" class="m-[28%] ml-[12%] w-4/5 mb-[16%] max-w-full h-auto" alt="Osusu Logo">
      <sidenav label="Dashboard" href="/dashboard" />
      <sidenav label="Groups" href="/groups" />
      <sidenav label="Wallet" href="/wallet" />
      <sidenav label="Support" href="/support" />
      <sidenav label="Logout" href="/logout" />
    </div>
    <main class="p-5 md:ml-[22%] md:w-[calc(100%-22%)] flex flex-col justify-center items-center min-h-[calc(100vh-60px)]">
      <div class="text-center w-full max-w-[600px] mx-auto">
        <div class="flex flex-col items-center justify-center gap-6 mt-[2%] max-w-[500px] min-h-[450px] p-8 bg-gray-100 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
          <h1 class="m-0 text-3xl text-gray-800">Logout</h1>
          <img src="@/assets/images/logo.svg" alt="Admin Profile Photo" class="w-[120px] h-[120px] rounded-full">
          <h2 class="m-0 text-xl text-gray-800">{{ fullName }}</h2>
          <p class="m-0 text-lg text-gray-800">{{ email }}</p>
          <p class="m-0 text-base italic text-gray-600">You're currently on OSUSU</p>
          <button @click="showLogoutModal" class="bg-red-600 text-white py-3 px-6 rounded-[5px] cursor-pointer text-lg hover:bg-red-700" :aria-label="`Log out ${fullName}`">Logout</button>
        </div>
      </div>
      <!-- Logout Confirmation Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black/50 flex justify-center items-center z-[200]">
        <div class="bg-white p-5 rounded-[8px] text-center max-w-[400px] w-full flex flex-col items-center gap-4 relative">
          <span class="absolute -top-2.5 -right-2.5 text-xl cursor-pointer bg-white rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[0_2px_5px_rgba(0,0,0,0.2)]" @click="closeModal" tabindex="0" @keyup.enter="closeModal">&times;</span>
          <h2 class="m-0 text-xl text-gray-800">Confirm Logout</h2>
          <div class="flex flex-col justify-around w-full gap-2.5">
            <p class="m-0 text-base text-gray-800">Do you really want to log out of OSUSU</p>
            <div class="flex justify-around gap-2.5 mt-4">
              <button @click="closeModal" class="bg-gray-500 text-white py-2.5 px-5 rounded-[5px] cursor-pointer text-base hover:bg-gray-600">Cancel</button>
              <button @click="confirmLogout" class="bg-red-600 text-white py-2.5 px-5 rounded-[5px] cursor-pointer text-base hover:bg-red-700">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import topnav from '@/components/topnav.vue';
import sidenav from '@/components/sidenav.vue';

const isSidenavOpen = ref(false);

const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};

// Static admin data
const fullName = ref('John Doe');
const email = ref('doe.john@example.com');

// Modal state
const showModal = ref(false);

// Router for navigation
const router = useRouter();

const showLogoutModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const confirmLogout = () => {
  closeModal();
  setTimeout(() => {
    alert("You've been successfully logged out");
    router.push('/Login');
  }, 100);
};
</script>