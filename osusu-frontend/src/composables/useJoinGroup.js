import { ref } from 'vue'
import { groupDetails } from '@/stores/groupDetails'

export function useJoinGroup() {
  const step = ref(1)
  const groupCode = ref('')
  const agreed = ref(false)
  const showModal = ref(false) // control open/close

  const openModal = () => {
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
  }

  const fetchGroup = () => {
    if (!groupCode.value) return alert('Enter a group code first')
    step.value = 2
  }

  const reset = () => {
    step.value = 1
    groupCode.value = ''
    agreed.value = false
    closeModal() // close when resetting
  }

  const handleJoin = () => {
    alert('Request successfully sent to join group!')
    reset()
    return true // closes modal after alert
  }

  return {
    step,
    groupCode,
    agreed,
    showModal,
    groupDetails,
    openModal,
    closeModal,
    fetchGroup,
    handleJoin,
    reset,
  }
}
