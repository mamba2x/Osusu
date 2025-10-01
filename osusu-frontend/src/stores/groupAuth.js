import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useGroupApi } from '@/composables/api/getters/useGroupApi'
import { useAuthStore } from './auth.js'

const auth = useAuthStore()
const groupsApi = useGroupApi()
export const useGroupAuthStore = defineStore('groupAuth', () => {
  const groupData = ref()
  const responseData = ref()

  async function getGroups(access_token) {
    try {
      const response = await groupsApi.getGroupsApi(access_token)
      groupData.value = response
      return groupData.value
    } catch (error) {
      groupData.value = error
      return groupData.value
    }
  }
  async function createNewGroup(access_token, group_details = {}) {
    try {
      const response = await groupsApi.createGroupApi(access_token, group_details)
      responseData.value = response
      return responseData.value
    } catch (error) {
      if (error.response) {
        return { error: true, response: error.response }
      } else {
        return { error: true, response: { message: error.message } }
      }
    }
  }

  return { groupData, getGroups, createNewGroup }
})
