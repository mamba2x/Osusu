<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userAuth'
import { useAuthStore } from '@/stores/auth';


const router = useRouter();


// fetch fucntion
const userStore = useUserStore()
const { loginUser } = useUserStore()
const auth = useAuthStore();


// Reactive form data
const form = ref({
  email: '',
  password: ''
})

// Reactive errors for each field
const errors = ref({
  email: '',
  password: '',
  loginError: ''
})

// Computed property to check if all fields are filled
const isFormValid = computed(() => {
  return (
    form.value.email.trim() !== '' &&
    form.value.password.trim() !== ''
  )
})

// Validate individual field
const validateField = (field) => {
  if (form.value[field].trim() === '') {
    errors.value[field] = 'This field is required'
  } else {
    errors.value[field] = ''
  }
}

// Handle form submission
const handleLogin = async () => {
  // Validate all fields
  Object.keys(form.value).forEach(validateField)

  if (isFormValid.value) {
    // Perform login logic here (e.g., API call)
    const user = await loginUser(form.value.email, form.value.password)
    if (!user.response) {
      if (!user.userInfo) {
        return errors.value.loginError = "Server Down"
      }
      // If login is successful, store user data and redirect
      const tokens = {
        accessToken: user.accessToken,
        refreshToken: user.userInfo.jwt_refresh_token,
      };

      userStore.userData = user.userInfo
      auth.login(tokens);
      return router.push({ name: "Dashboard" });

    }
    errors.value.loginError = `${user.response.data.message}`
  }
}
</script>


<template>
  <div class="min-h-screen bg-blue-200 flex items-center justify-center py-10 px-4 lg:px-8">
    <div class="flex lg:flex-row flex-col w-full max-w-6xl">
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pl-12">
        <div class="hidden lg:flex lg:flex-col items-center lg:items-start text-center lg:text-left max-w-md">
          <!-- <img src="/src/assets/images/logo.svg" alt="Logo" width="150px" class="mb-6"> -->
          <!-- logo -->
          <div class="flex items-center">
            <div class="w-15 h-15 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-piggy-bank text-white text-[30px]"></i>
            </div>
            <h1 class="text-[30px] font-bold text-gray-800">Osusu</h1>
          </div>
          <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Reinventing savings through community-driven goals
          </h1>
          <p class="mt-4 text-gray-600 text-lg">
            Empowering communities to manage their savings securely while creating room for members to achieve
            more, together.
          </p>
        </div>

        <div class="lg:hidden flex flex-col items-center text-center mb-8">
          <div class="flex items-center">
            <div class="w-15 h-15 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <i class="fas fa-piggy-bank text-white text-[30px]"></i>
            </div>
            <h1 class="text-[30px] font-bold text-gray-800">Osusu</h1>
          </div>
          <!-- <img src="/src/assets/images/logo.svg" alt="Logo" width="150px" class="mb-4"> -->
          <h2 class="text-xl font-bold text-gray-900">Reinventing savings through community-driven goals
          </h2>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pr-12">
        <div class="bg-white rounded-lg shadow-lg p-6 lg:p-8 w-full max-w-md">
          <div class="space-y-6">
            <h1 class="text-[25px] font-bold text-center text-gray-900">Login</h1>
            <div class="flex justify-center gap-1">
              <p class="font-semibold text-[17px] text-gray-600">Don't have an account?</p>
              <a href="/signup" class="text-red-500 text-[17px] hover:text-red-700">
                Sign up
              </a>
            </div>

            <form class="space-y-4 mt-6" @submit.prevent="handleLogin">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div class="relative">
                  <input id="email" type="email" v-model="form.email" @input="validateField('email')"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email address" required>
                  <p v-if="(errors.email || errors.loginError)" class="text-red-500 text-xs mt-1">{{ (errors.email ||
                    errors.loginError) }}</p>
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

              <div class="text-right">
                <a href="" class="text-red-500 text-sm font-medium hover:text-red-700">
                  Forgot password?
                </a>
              </div>

              <div class="flex justify-center items-center bg-blue-600  rounded-md text-white mt-4 hover:bg-blue-700">
                <button type="submit"
                  class="w-full text-center font-semibold p-3 cursor-pointer disabled:cursor-not-allowed rounded-md disabled:bg-gray-500"
                  :disabled="!isFormValid">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>