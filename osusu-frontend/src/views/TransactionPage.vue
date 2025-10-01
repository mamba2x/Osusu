<template>
  <div class="w-full h-screen flex bg-gray-100">
    <!-- left side nav -->
    <div class="w-[0.1%] md:w-auto h-full bg-gray-300">
      <SideBar />
    </div>

    <!-- main content -->
    <div class="w-[100%] md:w-full min-h-[100%] flex flex-col items-center overflow-auto">
      <div class="w-full mb-[30px]">
        <TopBar />
      </div>

      <!-- user name -->
      <div class="w-full flex flex-col font-[500] px-[3%] text-[24px] mb-[40px]">
        <h1><i class="fas fa-clock-rotate-left"></i> Transaction History</h1>

        <!-- filter section -->
        <div
          class="flex flex-wrap justify-center items-center gap-4 bg-white p-4 rounded-lg shadow-xl my-6 text-[16px]"
        >
          <!-- Months Dropdown -->
          <select v-model="selectedMonth"
            class="border border-gray-300 rounded-lg px-6 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <!-- Transaction Type Dropdown -->
          <select v-model="selectedType"
            class="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">All Transactions</option>
            <option value="Deposit">Deposits</option>
            <option value="Withdrawal">Withdrawals</option>
            <option value="Interest">Interest</option>
          </select>

          <!-- Time Filter Dropdown -->
          <select v-model="selectedTime"
            class="border border-gray-300 rounded-lg px-8 lg:px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>

          <!-- Apply Filters Button -->
          <button @click="applyFilters"
            class="px-6 bg-blue-500 hover:bg-blue-600 text-white lg:ml-auto lg:px-6 py-2 rounded-lg shadow">
            <span class="fa fa-filter text-[18px]"></span> Apply Filters
          </button>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-md w-full">
          <div class="flex gap-7 lg:justify-between mb-4">
            <h1 class="font-[500]">Recent Transactions</h1>
            <p class="text-[grey] text-[20px]">
              showing {{ filteredTransactions.length }} of {{ transactions.length }} transactions
            </p>
          </div>

          <div class="overflow-x-auto max-h-[500px] overflow-y-auto rounded-2xl shadow-xl">
            <table class="min-w-full border border-gray-200">
              <thead class="bg-[white] sticky top-0">
                <tr class="text-[#808080bd] text-[16px] lg:text-[15px]  border-gray-200">
                  <th class="px-4 py-2 text-left">Date</th>
                  <th class="px-4 py-2 text-left">Type</th>
                  <th class="px-4 py-2 text-left">Amount</th>
                  <th class="px-4 py-2 text-left">Balance</th>
                  <th class="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(txn, index) in filteredTransactions" :key="index" class="border-t text-[15px] lg:text-[16px] border-gray-200">
                  <td class="px-4 py-2">{{ txn.date }}</td>
                  <td
                    class="px-4 py-2 font-semibold rounded"
                    :class="txn.type === 'Deposit' ? 'bg-green-100 text-green-700' 
                          : txn.type === 'Withdrawal' ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'"
                  >
                    {{ txn.type }}
                  </td>
                  <td :class="txn.type === 'Withdrawal' ? 'text-red-600' : 'text-green-600'" class="px-4 py-2 font-semibold">
                    {{ txn.amount }}
                  </td>
                  <td class="px-4 py-2">{{ txn.balance }}</td>
                  <td class="px-4 py-2 flex items-center gap-2">
                    <span
                      :class="txn.type === 'Withdrawal' ? 'fa fa-arrow-up text-[red] bg-red-300' : 'fa fa-arrow-down text-[green] bg-green-300'"
                      class="py-1 rounded-full"
                    ></span>
                    {{ txn.description }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "@/components/sideBar.vue";
import TopBar from "@/components/topBar.vue";

const selectedMonth = ref("");
const selectedType = ref("");
const selectedTime = ref("");

const transactions = ref([
  { date: "2025-09-25", type: "Deposit", amount: "+ ₦30,000.00", balance: "₦180,000", description: "Weekly savings" },
  { date: "2025-09-20", type: "Withdrawal", amount: "- ₦15,000.00", balance: "₦150,000", description: "Medical expense" },
  { date: "2025-09-15", type: "Deposit", amount: "+ ₦40,000.00", balance: "₦165,000", description: "Monthly plan" },
  { date: "2025-09-10", type: "Deposit", amount: "+ ₦50,000.00", balance: "₦125,000", description: "Group contribution" },
  { date: "2025-09-05", type: "Withdrawal", amount: "- ₦20,000.00", balance: "₦75,000", description: "Emergency" },
  { date: "2025-09-01", type: "Interest", amount: "+ ₦2,500.00", balance: "₦95,000", description: "Savings interest" },
]);

const filteredTransactions = ref([...transactions.value]);

function applyFilters() {
  let result = [...transactions.value];

  // Month filter
  if (selectedMonth.value) {
    result = result.filter(txn => new Date(txn.date).getMonth() + 1 === parseInt(selectedMonth.value));
  }

  // Type filter
  if (selectedType.value) {
    result = result.filter(txn => txn.type === selectedType.value);
  }

  // Time filter
  const today = new Date();
  if (selectedTime.value === "today") {
    result = result.filter(txn => txn.date === today.toISOString().split("T")[0]);
  } else if (selectedTime.value === "week") {
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - 7);
    result = result.filter(txn => new Date(txn.date) >= weekStart);
  } else if (selectedTime.value === "month") {
    result = result.filter(txn => new Date(txn.date).getMonth() === today.getMonth());
  }

  filteredTransactions.value = result;
}
</script>