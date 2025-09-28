<template>
    <div class="w-full h-screen flex bg-gray-100">
        <!-- left side nav -->
        <div class="w-[0.1%] md:w-auto h-full bg-gray-300">
            <SideBar />
        </div>
        <!-- main content -->
        <div class="w-[100%] md:w-full min-h-[100%]  flex flex-col items-center  overflow-auto">
            <div class="w-full mb-[30px]">
                <!-- <Topnav /> -->
                <TopBar />
            </div>
            <!-- user name -->
            <div class="w-full flex flex-col font-[500]  px-[3%] text-[24px] mb-[40px]">
                <!-- <h1><i class="fas fa-bell"></i>Notifications</h1> -->
                <div class="flex flex-col md:flex-row w-full justify-between mb-5">
                    <h1 class="mb-3 md:mb-0"><i class="fas fa-bell"></i> My Notifications</h1>
                    <div class="flex gap-4 text-[13px] md:text-[15px]">
                        <button @click="notificationStore.markAllAsRead()"
                            class="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors">
                            <i class="fas fa-check-double mr-2"></i> Mark All as Read
                        </button>

                    </div>
                </div>
                <!-- Notifications List -->
                <div class="bg-white rounded-xl card-shadow p-6 ">

                    <div v-if="notifications.length > 0" class="space-y-4">
                        <!-- Notification 1 (Unread) -->
                        <NotificationCard v-for="notification in notifications" :key="notification.id"
                            :notificationName="notification.notificationName"
                            :notificationType="notification.notificationType"
                            :notificationMsg="notification.notificationMsg"
                            :notificationTime="notification.notificationTime" :read="notification.read"
                            :id="notification.id" />


                    </div>
                    <div v-else class="">
                        <h1>No notifications</h1>
                    </div>


                </div>

            </div>

        </div>
        <!-- right side nav -->
        <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
    </div>
</template>

<script setup>
import NotificationCard from '@/components/cards/notificationCard.vue';
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import { useNotificationStore } from '@/stores/notifications';

const { notifications } = useNotificationStore();
notifications.sort((a, b) => a.read - b.read)
setInterval(() => {
    notifications.sort((a, b) => a.read - b.read)
}, 1000)

const notificationStore = useNotificationStore()

// // Example: mark notification with id=2 as read
// function handleClick(id) {
//     notificationStore.markAsRead(id)
// }

</script>

<style scoped></style>