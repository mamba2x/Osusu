import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useAuthApi } from '@/composables/useAuthApi'

const { loginApi } = useAuthApi()

export const useUserStore = defineStore('user', () => {
  const userData = ref(null)

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

  return { userData, loginUser }
})
