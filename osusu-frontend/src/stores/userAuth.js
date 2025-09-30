import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useAuthApi } from '@/composables/api/useAuthApi'

const { loginApi } = useAuthApi()
const { registerApi } = useAuthApi()

export const useUserStore = defineStore('user', () => {
  const userData = ref()

  async function loginUser(email, password) {
    try {
      const response = await loginApi(email, password)
      userData.value = { userInfo: response.userInfo, accessToken: response.access_token }
      return userData.value
    } catch (err) {
      userData.value = err
      return userData.value
    }
  }

  async function registerUser(userInfo = {}) {
    try {
      const response = await registerApi(userInfo)
      userData.value = { userInfo: response.userInfo, accessToken: response.access_token }
      return userData.value
    } catch (err) {
      userData.value = err
      return userData.value
    }
  }

  return { userData, loginUser, registerUser }
})
