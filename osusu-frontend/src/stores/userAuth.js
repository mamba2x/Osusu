import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useAuthApi } from '@/composables/api/useAuthApi'
import router from '@/router'
import { useAuthStore } from './auth.js'

const auth = useAuthStore()
// const router = useRouter()

const authApi = useAuthApi()

export const useUserStore = defineStore('user', () => {
  const userData = ref()

  async function loginUser(email, password) {
    try {
      const response = await authApi.loginApi(email, password)
      userData.value = { userInfo: response.userInfo, accessToken: response.access_token }
      return userData.value
    } catch (err) {
      userData.value = err
      return userData.value
    }
  }

  async function registerUser(userInfo = {}) {
    try {
      const response = await authApi.registerApi(userInfo)
      userData.value = { userInfo: response.userInfo, accessToken: response.access_token }
      return userData.value
    } catch (err) {
      userData.value = err
      return userData.value
    }
  }
  async function getUser(access_token) {
    try {
      const response = await authApi.getUserInfo(access_token)
      userData.value = { userInfo: response.userInfo }
      return userData.value
    } catch (error) {
      const status = error.response.status
      const message = error.response.data.message
      if (status == 404) {
        auth.logout()
        return router.push({ name: 'Login' })
      }
      if (status == 403 && message == 'Token is not valid') {
        try {
          const refresh_response = await auth.tokenRefresh(auth.refreshToken)
          const newAccessToken = refresh_response.data.access_token
          return await getUser(newAccessToken)
        } catch (err) {
          auth.logout()
          return router.push({ name: 'Login' })
        }
      }
      if (status == 403 && message == 'Forbidden access denied') {
        auth.logout()
        return router.push({ name: 'Login' })
      }
    }
  }

  return { userData, loginUser, registerUser, getUser }
})
