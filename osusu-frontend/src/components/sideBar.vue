<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <!-- Page content here -->

        </div>
        <div class="drawer-side shadow-md">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu relative bg-white to-indigo-900 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                <div class="p-6 border-b border-gray-100 mb-7">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                            <i class="fas fa-piggy-bank text-white text-xl"></i>
                        </div>
                        <h1 class="text-xl font-bold text-gray-800">Osusu</h1>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-1 text-gray-500">
                    <sidenav label="Dashboard" href="/dashboard" icon="fas fa-chart-line" />
                    <sidenav label="Groups" href="/groups" icon="fas fa-users" />
                    <sidenav label="Notifications" href="/notifications" icon="fas fa-bell" />
                    <sidenav label="Transaction History" href="/transaction-history" icon="fas fa-clock-rotate-left" />
                    <sidenav label="Stash" href="/stash" icon="fas fa-sack-dollar" />
                </div>
                <div class="absolute bottom-6 w-[90%] flex flex-col ">
                    <sidenav class="text-red-500 hover:text-red-500" label="Logout" href="/logout"
                        icon="fas fa-arrow-right-from-bracket" />
                </div>
            </ul>
        </div>
    </div>
</template>

<script setup>
import sidenav from './sidenav.vue';


</script>

<style lang="scss" scoped></style>