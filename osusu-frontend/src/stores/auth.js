import { defineStore } from 'pinia'
import { ref } from 'vue'
import { tokenRefresher } from '@/composables/auth/tokenRefresher'

export const useAuthStore = defineStore('auth', () => {
  const { refresh } = tokenRefresher()
  const accessToken = ref(localStorage.getItem('accessToken') || null)
  const refreshToken = ref(localStorage.getItem('refreshToken') || null)
  const message = ref(null)

  function login(tokens) {
    accessToken.value = tokens.accessToken
    refreshToken.value = tokens.refreshToken

    localStorage.setItem('accessToken', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
  }

  function logout() {
    accessToken.value = null
    refreshToken.value = null

    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
  async function tokenRefresh(refreshToken) {
    try {
      const response = await refresh(refreshToken)
      message.value = response
      return message.value
      // return message
    } catch (err) {
      message.value = err
      return message.value
      // return err
    }
  }
  return {
    accessToken,
    refreshToken,
    login,
    logout,
    tokenRefresh,
  }
})
