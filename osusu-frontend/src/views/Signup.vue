<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userAuth'
import { useAuthStore } from '@/stores/auth';


const router = useRouter();


// fetch fucntion
const userStore = useUserStore()
const { registerUser } = useUserStore()
const auth = useAuthStore();


// Reactive form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: ''
});

// Reactive errors for each field
const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  regError: ''
});

// Computed property to check if all fields are filled
const isFormValid = computed(() => {
  return Object.values(form.value).every(field => field.trim() !== '');
});

// Validate individual field
const validateField = (field) => {
  errors.value[field] = form.value[field].trim() === '' ? 'This field is required' : '';
};

// Handle form submission
const handleSignUp = async () => {
  // Validate all fields
  Object.keys(form.value).forEach(validateField);

  if (isFormValid.value) {
    const userDetails = {
      firstname: form.value.firstName,
      lastname: form.value.lastName,
      email: form.value.email,
      phone: form.value.phoneNumber,
      password: form.value.password,
    }
    // Perform signup logic here (e.g., API call)
    const user = await registerUser(userDetails)
    if (!user.response) {
      if (!user.userInfo) {
        return errors.value.regError = "Server Down"
      }
      const tokens = {
        accessToken: user.accessToken,
        refreshToken: user.userInfo.jwt_refresh_token,
      };
      userStore.userData = user.userInfo
      auth.login(tokens);
      router.push({ name: "Dashboard" });
    }
    errors.value.regError = `${user.response.data.message}`
  }
};
</script>


<template>
  <div class="min-h-screen bg-blue-200 flex items-center justify-center py-10 px-4 lg:px-8">
    <div class="flex lg:flex-row flex-col w-full max-w-6xl">
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-12">
        <div class="hidden lg:flex lg:flex-col items-center lg:items-start text-center lg:text-left max-w-md">
          <img src="/src/assets/images/logo.svg" alt="Logo" width="150px" class="mb-6">
          <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Bridging the Gap between Groups and Opportunites
          </h1>
          <p class="mt-4 text-gray-600 text-lg">
            Empowering communities to manage their savings securely while creating room for members to achieve
            more, together.
          </p>
        </div>

        <div class="lg:hidden flex flex-col items-center text-center mb-8">
          <img src="/src/assets/images/logo.svg" alt="Logo" width="150px" class="mb-4">
          <h2 class="text-xl font-bold text-gray-900">Bridging Gaps in Rural Microfinance</h2>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pr-12">
        <div class="bg-white rounded-lg shadow-lg p-6 lg:p-8 w-full max-w-md">
          <div class="space-y-6">
            <h1 class="text-[25px] font-bold text-center text-gray-900">Sign up</h1>
            <div class="flex justify-center gap-1">
              <p class="font-semibold text-[17px] text-gray-600">Already have an account?</p>
              <a href="/login" class="text-red-500 text-[17px] hover:text-red-700">
                Sign in
              </a>
            </div>
            <p v-if="errors.regError" class="text-red-500 text-xs mt-1">{{ errors.regError }}</p>

            <form class="space-y-4 mt-6" @submit.prevent="handleSignUp">
              <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                <div class="flex-1">
                  <label for="first-name" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div class="relative">
                    <input id="first-name" type="text" v-model="form.firstName" @input="validateField('firstName')"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="First name" required>
                    <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</p>
                  </div>
                </div>

                <div class="flex-1">
                  <label for="last-name" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div class="relative">
                    <input id="last-name" type="text" v-model="form.lastName" @input="validateField('lastName')"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Last Name" required>
                    <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</p>
                  </div>
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div class="relative">
                  <input id="email" type="email" v-model="form.email" @input="validateField('email')"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email address" required>
                  <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label for="phone-number" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div class="relative">
                  <input id="phone-number" type="tel" v-model="form.phoneNumber" @input="validateField('phoneNumber')"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone number" required>
                  <p v-if="errors.phoneNumber" class="text-red-500 text-xs mt-1">{{ errors.phoneNumber }}</p>
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div class="relative">
                  <input id="password" type="password" v-model="form.password" @input="validateField('password')"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password" required>
                  <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
                </div>
              </div>

              <div
                class="flex justify-center items-center bg-blue-600  rounded-md text-white mt-4 mb-4 hover:bg-blue-700">
                <button type="submit"
                  class="w-full text-center p-3 rounded-md cursor-pointer font-semibold disabled:cursor-not-allowed disabled:bg-gray-500"
                  :disabled="!isFormValid">
                  Sign up
                </button>
              </div>
            </form>

            <p class="text-center text-[11px]">
              By clicking the "Sign up" button, you agree
              to our <a href="" class="text-blue-500">Terms of use</a> and <a href="" class="text-blue-500">Privacy
                Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>