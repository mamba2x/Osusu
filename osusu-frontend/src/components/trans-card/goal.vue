<template>
    <div class="bg-white rounded-xl shadow-md p-6 m-6">
        <!-- Main content -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
            <p class="text-lg font-semibold text-gray-800 capitalize">my saving goals</p>
            <h1>
                <select
                    class="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>All Goals</option>
                    <option>Active</option>
                    <option>Completed</option>
                </select>
            </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="value in source" :key="value.goal">
                <div class="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all w-full">
                    <div class="flex justify-between">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i :class="[value.icon, value.size, value.color]"></i>
                        </div>
                        <div :class="value.col">
                            <p class="bg-blue-100 text-xs font-medium px-2 py-1 rounded capitalize">{{ value.active ?
                                'active' : 'completed' }}</p>
                        </div>
                    </div>
                    <h1 class="font-semibold text-lg text-gray-800 mb-2 capitalize mt-5">{{ value.goal }}</h1>
                    <p class="text-gray-500 text-sm mb-6">{{ value.reason }}</p>
                    <div class="flex justify-between text-sm">
                        <p class="text-gray-500">Progress</p>
                        <h1 class="font-medium">{{ value.amount }}</h1>
                    </div>
                    <div class="mb-4">
                        <progress class="progress w-full" :class="value.active ? 'progress-primary' : 'progress-[gray]'"
                            :value="value.progress" max="100"></progress>
                    </div>
                    <div class="flex justify-between text-gray-500 ">
                        <h1>Target Date</h1>
                        <h2>Monthly Save</h2>
                    </div>
                    <div class="flex justify-between capitalize font-medium ">
                        <h1>{{ value.month }}</h1>
                        <h2>{{ value.secAmount }}</h2>
                    </div>

                    <div class="flex space-x-2 mt-4 mb-2">
                        <button
                            class="flex-1  text-white py-2 rounded-lg  text-sm font-medium hover:bg-primary-700 transition-colors capitalize"
                            :class="value.active ? 'bg-[#2563eb] cursor-pointer' : 'bg-gray-500 cursor-not-allowed'">
                            {{ value.active ? 'Add Funds' : 'Completed' }}
                        </button>
                        <button
                            class="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Create Goal Button -->
        <div class="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#60a5fa] hover:bg-[#eff6ff] transition-colors cursor-pointer mt-6"
            @click="showModal = true">
            <div class="w-16 h-16 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-plus text-[#2563eb] text-2xl"></i>
            </div>
            <h3 class="font-semibold text-lg text-gray-800 mb-2">
                Create New Savings Goal
            </h3>
            <p class="text-gray-500 text-sm text-center mb-4">
                Start a new savings goal for your future plans
            </p>
            <!-- <button
                class="bg-[#2563eb] text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                @click="showModal = true">
                Create Goal
            </button> -->
        </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-[#0000009f] flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <!-- Modal Header -->
            <div class="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-800">Create New Savings Goal</h2>
                <button @click="showModal = false" class="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i class="fas fa-times text-lg"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6">
                <form @submit.prevent="submitGoal">
                    <div class="space-y-4">
                        <!-- Goal Name -->
                        <div>
                            <label for="goalName" class="block text-sm font-medium text-gray-700 mb-1">Goal Name</label>
                            <input type="text" id="goalName" v-model="newGoal.goal"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="e.g. New Car, Vacation, etc." required>
                        </div>

                        <!-- Reason -->
                        <div>
                            <label for="goalReason" class="block text-sm font-medium text-gray-700 mb-1">Reason</label>
                            <textarea id="goalReason" v-model="newGoal.reason" rows="3"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Describe why you're saving for this goal" required></textarea>
                        </div>

                        <!-- Target Amount -->
                        <div>
                            <label for="targetAmount" class="block text-sm font-medium text-gray-700 mb-1">Target Amount
                                (₦)</label>
                            <input type="number" id="targetAmount" v-model="newGoal.targetAmount" min="0"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="0" required>
                        </div>

                        <!-- Monthly Save -->
                        <div>
                            <label for="monthlySave" class="block text-sm font-medium text-gray-700 mb-1">Monthly Save
                                (₦)</label>
                            <input type="number" id="monthlySave" v-model="newGoal.monthlySave" min="0"
                                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="0" required>
                        </div>

                        <!-- Target Date -->
                        <div>
                            <label for="targetDate" class="block text-sm font-medium text-gray-700 mb-1">Target
                                Date</label>
                            <input type="month" id="targetDate" v-model="newGoal.targetDate"
                                class="cursor-pointer w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                required>
                        </div>

                        <!-- Icon Selection -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                            <div class="flex space-x-4">
                                <div v-for="iconOption in iconOptions" :key="iconOption.icon"
                                    class="w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer border-2"
                                    :class="newGoal.icon === iconOption.icon ? 'border-blue-500 bg-blue-50' : 'border-gray-200'"
                                    @click="newGoal.icon = iconOption.icon; newGoal.color = iconOption.color">
                                    <i :class="[iconOption.icon, 'text-xl', iconOption.color]"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Footer -->
                    <div class="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                        <button type="button" @click="showModal = false"
                            class="px-4 cursor-pointer py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit"
                            class="px-4 cursor-pointer py-2 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                            Create Goal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showModal = ref(false)

const newGoal = reactive({
    goal: '',
    reason: '',
    targetAmount: '',
    monthlySave: '',
    targetDate: '',
    icon: 'fa fa-car',
    color: 'text-blue-600'
})

const iconOptions = [
    { icon: 'fa fa-car', color: 'text-blue-600' },
    { icon: 'fas fa-home', color: 'text-green-600' },
    { icon: 'fas fa-umbrella-beach', color: 'text-purple-600' },
    { icon: 'fas fa-graduation-cap', color: 'text-yellow-600' },
    { icon: 'fas fa-heart', color: 'text-red-500' },
    { icon: 'fas fa-plane', color: 'text-indigo-500' }
]

const source = ref([
    {
        active: true,
        goal: "new car",
        reason: "Saving for a down payment on a new vehicle",
        amount: "₦450,000 / ₦600,000",
        month: "dec 2024",
        secAmount: "₦25,000",
        icon: "fa fa-car",
        color: "text-blue-600",
        size: "text-[25px]",
        col: "text-blue-800 bg-blue-100 h-6 rounded",
        progress: 70
    },
    {
        active: true,
        goal: "House Down Payment",
        reason: "Saving for a down payment on a new home",
        amount: "₦1,200,000 / ₦2,500,000",
        month: "june 2024",
        secAmount: "₦50,000",
        icon: "fas fa-home",
        color: "text-green-600",
        size: "text-[25px]",
        col: "text-green-800 bg-green-100 h-6 rounded",
        progress: 80
    },
    {
        active: true,
        goal: "Europe Vacation",
        reason: "Saving for a dream vacation to Europe",
        amount: "₦350,000 / ₦800,000",
        month: "Aug 2024",
        secAmount: "₦20,000",
        icon: "fas fa-umbrella-beach",
        color: "text-purple-600",
        size: "text-[25px]",
        col: "text-purple-800 bg-purple-100 h-6 rounded",
        progress: 60
    },
    {
        active: false,
        goal: "MBA Program",
        reason: "Saving for MBA tuition fees",
        amount: "₦500,000 / ₦500,000",
        month: "june 2024",
        secAmount: "₦100,000",
        icon: "fas fa-graduation-cap",
        color: "text-yellow-600",
        size: "text-[25px]",
        col: "text-gray-800 bg-black-100 h-6 rounded",
        progress: 100
    },
])

function submitGoal() {
    // Create a new goal object
    const goal = {
        active: true,
        goal: newGoal.goal,
        reason: newGoal.reason,
        amount: `₦0 / ₦${parseInt(newGoal.targetAmount).toLocaleString()}`,
        month: newGoal.targetDate,
        secAmount: `₦${parseInt(newGoal.monthlySave).toLocaleString()}`,
        icon: newGoal.icon,
        color: newGoal.color,
        size: "text-[25px]",
        col: "text-blue-800 bg-blue-100 h-6 rounded",
        progress: 0
    }

    // Add to the source array
    source.value.push(goal)

    // Reset form
    resetForm()

    // Close modal
    showModal.value = false
}

function resetForm() {
    newGoal.goal = ''
    newGoal.reason = ''
    newGoal.targetAmount = ''
    newGoal.monthlySave = ''
    newGoal.targetDate = ''
    newGoal.icon = 'fa fa-car'
    newGoal.color = 'text-blue-600'
}
</script>

<style scoped>
/* Custom progress bar styles */
progress {
    height: 8px;
    border-radius: 4px;
}

progress::-webkit-progress-bar {
    background-color: #e5e7eb;
    border-radius: 4px;
}

progress::-webkit-progress-value {
    border-radius: 4px;
}

.progress-primary::-webkit-progress-value {
    background-color: #2563eb;
}

.progress-\[gray\]::-webkit-progress-value {
    background-color: #6b7280;
}

/* Modal animation */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>