import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useGroupAuthStore } from './groupAuth'
import { useAuthStore } from './auth.js'
import router from '@/router'

export const useGroupStore = defineStore('group', () => {
  const myGroups = ref([])
  const auth = useAuthStore()
  const { getGroups } = useGroupAuthStore()

  async function fetchGroups() {
    const data = await getGroups(auth.accessToken)

    // ✅ if backend responded with an error
    if (data.response) {
      const status = data.response.status
      const message = data.response.data.message

      if (status === 403 && message === 'Token is not valid') {
        // try refreshing the token
        const refresh_response = await auth.tokenRefresh(auth.refreshToken)
        if (!refresh_response.response) {
          const newAccessToken = refresh_response.data.access_token
          auth.accessToken = newAccessToken
          // retry with new token
          return await fetchGroups()
        } else {
          auth.logout()
          return router.push({ name: 'Login' })
        }
      }

      // other errors
      if ([404, 401, 500].includes(status)) {
        // console.log(message)
      }
      return
    }

    // ✅ if successful, map response
    try {
      myGroups.value = data.map((item) => ({
        id: item.group._id ?? 'N/A',
        groupName: item.group.groupname ?? 'N/A',
        activity: item.group.paymentCycle ?? 'N/A',
        contributionAmount: item.group.paymentAmount ?? 'N/A',
        members: item.group.totalmembers ?? 'N/A',
        bgImage: item.group.groupImg ?? '/src/assets/images/user.png',
        isAdmin: item.isAdmin ?? false,
      }))

      return myGroups.value
    } catch (error) {
      console.error('Error mapping groups:', error)
    }
  }

  return { myGroups, fetchGroups }
})
