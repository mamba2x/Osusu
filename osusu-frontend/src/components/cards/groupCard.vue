<template>
    <a :href="`/groups/${id}/group-profile`"
        class="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
        <div class="flex items-center text-[16px]">
            <!-- Avatar box with background image -->
            <div class="min-w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[gray] mr-4 bg-cover bg-center"
                :style="{ backgroundImage: `url(/src/assets/images/${bgImage})` }">
                <!-- <i class="fas fa-users text-white drop-shadow-md"></i> -->
            </div>
            <div class="">
                <h3 class="font-medium text-gray-800">{{ groupName }} <span v-if="isAdmin"
                        class="bg-[#fef3c7] text-[#d97706] text-[9px] md:text-[10px] font-medium px-1 py-0.75 rounded ml-1">
                        Admin
                    </span></h3>
                <p class="text-sm text-gray-500">Cycle: {{ activity }}</p>
            </div>
        </div>
        <div class="text-right text-[16px]">
            <p class="font-medium text-gray-800">Contibution: ₦{{ contributionAmount }}</p>
            <p class="text-xs text-gray-500">Members: {{ members }}</p>
        </div>
    </a>
</template>

<script setup>
const { id, groupName, activity, contributionAmount, members, bgImage, isAdmin } = defineProps([
    'id',
    'groupName',
    'activity',
    'contributionAmount',
    'members',
    'bgImage',
    'isAdmin'
])
</script>
