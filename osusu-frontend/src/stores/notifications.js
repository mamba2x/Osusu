import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([
    {
      id: 1,
      notificationType: 'requestAccepted',
      notificationName: 'Request Accepted',
      notificationMsg: 'Your request to join "Savings Circle" has been approved.',
      notificationTime: '2025-09-26 10:30 AM',
      read: true,
    },
    {
      id: 2,
      notificationType: 'payoutReminder',
      notificationName: 'Reminder of Payout',
      notificationMsg: 'You have a payout scheduled for tomorrow.',
      notificationTime: '2025-09-25 05:00 PM',
      read: false,
    },
    {
      id: 3,
      notificationType: 'removalNotice',
      notificationName: 'Notice of Removal',
      notificationMsg: 'You have been removed from "Travel Fund".',
      notificationTime: '2025-09-24 08:15 AM',
      read: false,
    },
    {
      id: 4,
      notificationType: 'contributionReminder',
      notificationName: 'Reminder for Contributions',
      notificationMsg: 'Your monthly contribution of ₦10,000 is due today.',
      notificationTime: '2025-09-23 09:00 AM',
      read: false,
    },
    {
      id: 5,
      notificationType: 'generalInfo',
      notificationName: 'New Feature Available',
      notificationMsg: 'Check out the new analytics dashboard in your account.',
      notificationTime: '2025-09-22 04:45 PM',
      read: false,
    },
    {
      id: 6,
      notificationType: 'securityAlert',
      notificationName: 'Security Alert',
      notificationMsg: 'A login was detected from a new device.',
      notificationTime: '2025-09-21 07:20 PM',
      read: false,
    },
    {
      id: 7,
      notificationType: 'requestAccepted',
      notificationName: 'Request Accepted',
      notificationMsg: 'Your request to join "Football Fans Club" has been approved.',
      notificationTime: '2025-09-20 11:30 AM',
      read: false,
    },
    {
      id: 8,
      notificationType: 'payoutReminder',
      notificationName: 'Reminder of Payout',
      notificationMsg: 'Your quarterly payout will be processed in 3 days.',
      notificationTime: '2025-09-19 02:00 PM',
      read: false,
    },
    {
      id: 9,
      notificationType: 'removalNotice',
      notificationName: 'Notice of Removal',
      notificationMsg: 'You have been removed from "Tech Startups".',
      notificationTime: '2025-09-18 06:10 PM',
      read: false,
    },
    {
      id: 10,
      notificationType: 'contributionReminder',
      notificationName: 'Reminder for Contributions',
      notificationMsg: 'Your weekly contribution of ₦5,000 is due tomorrow.',
      notificationTime: '2025-09-17 01:00 PM',
      read: false,
    },
  ])
  function markAsRead(id) {
    const notification = notifications.value.find((n) => n.id === id)
    console.log(notification)
    if (notification) {
      notification.read = true
    }
  }
  function markAllAsRead() {
    notifications.value.forEach((n) => {
      n.read = true
    })
  }

  return { notifications, markAsRead, markAllAsRead }
})
