<template>
    <div class="notification   p-4 rounded-lg border border-gray-100"
        :class="read ? '' : 'bg-[#f0f9ff] border-l-4 border-blue-500'">
        <div class="flex items-start">
            <div class="w-[30px] h-[30px] bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <i :class="notificationIcon"></i>
            </div>
            <div class=" flex-1">
                <div class="flex justify-between items-start">
                    <div class="text-[15px]">
                        <h4 class="font-medium text-gray-800">{{ notificationName }}</h4>
                        <p class="text-gray-600">{{ notificationMsg }}</p>
                    </div>
                    <!-- <span class="bg-red-500 text-white rounded-full w-2 h-2"></span> -->
                </div>
                <p class="text-[11px] text-gray-500 mt-1">{{ notificationTime }}</p>
                <div class="mt-3 flex space-x-2 text-[11px]">
                    <button
                        class="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded font-medium hover:bg-blue-700 transition-colors">
                        View Details
                    </button>
                    <button @click="handleClick(id)"
                        class="cursor-pointer bg-gray-100 text-gray-700 px-3 py-1 rounded font-medium hover:bg-gray-200 transition-colors">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNotificationStore } from '@/stores/notifications';

const { notificationType, notificationName, notificationMsg, notificationTime, read, id } = defineProps([
    'notificationType',
    'notificationName',
    'notificationMsg',
    'notificationTime',
    'read',
    'id'
])
var notificationIcon = computed(() => {
    switch (notificationType) {
        case "requestAccepted":
            return "fas fa-check-circle text-[14px] text-green-600"
        case "payoutReminder":
            return "fas fa-bell text-[14px] text-yellow-500"
        case "removalNotice":
            return "fas fa-user-slash text-[14px] text-red-600"
        case "contributionReminder":
            return "fas fa-wallet text-[14px] text-blue-600"
        default:
            return "fas fa-info-circle text-[14px] text-gray-400"
    }
})



const notificationStore = useNotificationStore()

// Example: mark notification with id=2 as read
function handleClick(id) {
    notificationStore.markAsRead(id)
    console.log(id)
    console.log(notificationStore.markAllAsRead)
}
</script>

<style scoped></style>