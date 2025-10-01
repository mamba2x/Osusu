<template>
    <div class="fixed inset-0 flex items-center justify-center px-3 ">
        <div
            class="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-lg relative border border-gray-100 animate-fintech-pop">
            <!-- Close -->
            <button
                class="absolute top-3 text-black right-3 sm:top-4 sm:right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition cursor-pointer"
                @click="handleClose">
                <i class="fas fa-xmark text-black "></i>
            </button>

            <!-- Title -->
            <h2
                class="text-xl sm:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Join Group
            </h2>

            <!-- Step 1 -->
            <div v-if="step === 1" class="animate-fade-in">
                <p class="font-medium mb-3 text-gray-700">
                    Enter the Group Code to Continue
                </p>
                <input v-model="groupCode" type="text" inputmode="numeric" placeholder="Eg: 245690"
                    class="w-full border rounded-xl px-4 py-3 mb-5 text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    @input="groupCode = groupCode.replace(/\D/g, '')" />
                <button
                    class="bg-gradient-to-r from-blue-500 to-emerald-600 text-white w-full py-3 rounded-xl font-semibold text-sm sm:text-lg hover:opacity-90 transition shadow-lg cursor-pointer"
                    @click="fetchGroup">
                    Continue
                </button>
            </div>

            <!-- Step 2 -->
            <div v-else class="animate-fade-in">
                <!-- Group image only on step 2 -->
                <div class="mb-6 flex justify-center">
                    <img :src="groupDetails.image || defaultAvatar" alt="group profile"
                        class="w-15 h-15 sm:w-20 sm:h-20 rounded-full ring-2 ring-blue-100 shadow-md" />
                </div>

                <div class="grid grid-cols-2 gap-y-4 text-gray-700 text-sm sm:text-base">
                    <div class="font-semibold">Group Name</div>
                    <div class="text-right">{{ groupDetails.name }}</div>

                    <div class="font-semibold">Group Info</div>
                    <div class="text-right">
                        <p class="text-gray-500 break-words text-sm leading-relaxed">
                            {{ groupDetails.info }}
                        </p>
                    </div>

                    <div class="font-semibold">Amount</div>
                    <div class="text-right">{{ groupDetails.amount }}</div>

                    <div class="font-semibold">Frequency</div>
                    <div class="text-right">{{ groupDetails.frequency }}</div>

                    <div class="font-semibold">Members</div>
                    <div class="text-right">{{ groupDetails.members }}</div>
                </div>

                <label class="flex items-center mt-5 text-sm sm:text-base text-gray-600">
                    <input type="checkbox" v-model="agreed"
                        class="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500 rounded cursor-pointer" />
                    I agree to the terms and condition
                </label>

                <button
                    class="bg-gradient-to-r from-blue-500 to-emerald-600 text-white w-full py-3 mt-6 rounded-xl font-semibold text-sm sm:text-lg hover:opacity-90 transition shadow-lg disabled:opacity-50 cursor-pointer"
                    :disabled="!agreed" @click="handleJoin">
                    Request to Join
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useJoinGroup } from "@/composables/useJoinGroup"
import defaultAvatar from "@/assets/images/user.png"
import { defineEmits } from "vue"

const emit = defineEmits(["close"])


const {
    step,
    groupCode,
    agreed,
    groupDetails,
    fetchGroup,
    handleJoin: originalHandleJoin,
    reset,
} = useJoinGroup()


const handleClose = () => {
    if (step.value === 1) {

        reset()
        emit("close")
    } else {

        reset()
    }
}

const handleJoin = async () => {
    const success = await originalHandleJoin()
    if (success) {
        emit("close")
    }
}
</script>