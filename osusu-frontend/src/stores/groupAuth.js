import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useGroupApi } from '@/composables/api/getters/useGroupApi'
import { useAuthStore } from './auth.js'

const auth = useAuthStore()
const groupApi = useGroupApi()
export const useGroupAuthStore = defineStore('groupAuth', () => {})
