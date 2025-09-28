<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <label for="my-drawer-2" class="btn text-black shadow-none drawer-button md:hidden">
                <i class="fas fa-bars"></i>
            </label>
        </div>
        <div class="flex gap-[30px] mr-[10px]">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle text-gray-300 hover:text-gray-500">
                    <div class="indicator ">
                        <i class="fas fa-bell text-[20px] "></i>
                        <span
                            class="badge badge-sm indicator-item border-none px-1.75 py-1.75 rounded-full bg-red-500 text-white">8</span>
                    </div>
                </div>
                <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-70 shadow">
                    <div class="card-body">
                        <!-- <span class="text-lg font-bold">8 Items</span>
                        <span class="text-info">Subtotal: $999</span>
                        <div class="card-actions">
                            <button class="btn btn-primary btn-block">View cart</button>
                        </div> -->
                        <div class="w-full justify-between flex font-[500] h-[30px] items-center">
                            <h1 class="text-[15px">Request Approved</h1>
                            <a
                                class="cursor-pointer hover:bg-gray-200 rounded-sm flex px-[8px] items-center justify-center h-full hover:text-blue-500">View
                                <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="/src/assets/images/user.png" />
                    </div>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>