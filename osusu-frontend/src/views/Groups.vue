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
      <div class="w-full flex flex-col font-[500] px-[3%] text-[24px] mb-[40px]">
        <div class="flex flex-col md:flex-row w-full justify-between mb-5">
          <h1 class="mb-3 md:mb-0"><i class="fas fa-users"></i> My Groups</h1>
          <div class="flex gap-4 text-[13px] md:text-[15px]">
            <button @click="openCreateGroupModal"
              class="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors">
              <i class="fas fa-plus mr-2"></i> Create New Group
            </button>
            <button @click="showModal = true"
              class="border border-blue-600 cursor-pointer text-blue-600 px-4 py-2 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-colors">
              <i class="fas fa-user-plus mr-2"></i> Join Group
            </button>

            <!--  Modal (pops up when button is clicked) -->
            <div v-if="showModal"
              class="fixed inset-0 bg-black/50 backdrop-blur-[4px] flex items-center justify-center z-50">
              <JoinGroupModal @close="showModal = false" />
            </div>

          </div>
        </div>
        <!-- Create Group Modal -->
        <div ref="createGroupModal" class="fixed inset-0 z-50 hidden">
          <div
            class="modal-overlay bg-[#00000079] backdrop-blur-[4px] absolute inset-0 flex items-center justify-center p-4">
            <div class="modal-content bg-white rounded-2xl card-shadow w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <!-- Modal Header -->
              <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <div class="flex items-center">
                  <div class="w-10 h-10 text-[15px] bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-users text-blue-600"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-800">Create New Group</h3>
                    <p class="text-sm text-gray-500">Set up your savings group in minutes</p>
                  </div>
                </div>
                <button @click="closeCreateGroupModal"
                  class=" cursor-pointer text-[15px] w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <i class="fas fa-times text-gray-500"></i>
                </button>
              </div>

              <!-- Modal Body -->
              <div class="p-6">
                <form ref="createGroupForm">
                  <!-- Group Image Upload -->
                  <div class="mb-6">
                    <p v-for="groupCreationError in groupCreationErrors" class="text-red-500 text-[13px]">{{
                      groupCreationError.message }}</p>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Group Image</label>
                    <div ref="uploadArea"
                      class="border-2 border-dashed border-gray-300 transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-slate-50 rounded-lg p-6 text-center cursor-pointer"
                      @click="groupImage.click()">
                      <input ref="groupImage" type="file" accept="image/*" class="hidden" @change="handleImageUpload" />
                      <div ref="uploadPlaceholder">
                        <i class="fas fa-cloud-upload-alt text-[40px] text-gray-400 mb-3"></i>
                        <p class="text-gray-600 text-[15px] font-medium">Click to upload group image</p>
                        <p class="text-[12px] text-gray-500 mt-1">PNG, JPG, JPEG up to 5MB</p>
                      </div>
                      <img ref="imagePreview" class="image-preview w-full rounded-lg mt-3" />
                    </div>
                  </div>

                  <!-- Group Name -->
                  <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Group Name <span class="text-red-500">*</span>
                    </label>
                    <input v-model="groupName" type="text" placeholder="e.g., Family Savings, Rent Fund, Vacation 2023"
                      class="w-full text-[15px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required />
                    <p class="text-xs text-gray-500 mt-1">Choose a descriptive name for your group</p>
                  </div>

                  <!-- Contribution Settings -->
                  <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-4">
                      Contribution Settings <span class="text-red-500">*</span>
                    </label>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Contribution Amount -->
                      <div>
                        <label class="block text-sm text-gray-600 mb-2 ">
                          Contribution Amount <span class="text-red-500">*</span>
                        </label>
                        <div class="relative text-[15px]">
                          <span class="absolute left-3 top-3 text-gray-500">₦</span>
                          <input v-model="contributionAmount" type="number" placeholder="0.00" min="0" step="100"
                            class="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            required />
                        </div>
                      </div>

                      <!-- Contribution Frequency -->
                      <div>
                        <label class="block text-sm text-[15px] text-gray-600 mb-2">
                          Frequency <span class="text-red-500">*</span>
                        </label>
                        <select v-model="contributionFrequency"
                          class="w-full text-[15px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required>
                          <option value="">Select frequency</option>
                          <option value="weekly">Weekly</option>
                          <option value="bi-weekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="quarterly">Quarterly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Info Box -->
                  <div class="bg-blue-50 border text-[15px] border-blue-200 rounded-lg p-4 mb-6">
                    <div class="flex items-start">
                      <i class="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
                      <div>
                        <h4 class="font-medium text-blue-800 mb-1">Invite Code System</h4>
                        <p class="text-sm text-blue-700">
                          After creating your group, you'll receive a unique invite code. Share this code with
                          people you want to invite. They'll need to enter this code to request joining, and
                          you'll need to approve each member request.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Modal Footer -->
              <div
                class="text-[15px] flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <button type="button" @click="closeCreateGroupModal"
                  class="px-6 cursor-pointer py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="button" @click="createGroup"
                  class="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <i class="fas fa-plus mr-2"></i>
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Modal -->
        <div ref="successModal" class="fixed inset-0 z-50 hidden">
          <div
            class="modal-overlay bg-[#00000079] backdrop-blur-[4px] absolute inset-0 flex items-center justify-center p-4 text-[15px]">
            <div class="modal-content bg-white rounded-2xl card-shadow w-full max-w-md">
              <!-- Modal Header -->
              <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-check text-green-600"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-800">Group Created Successfully!</h3>
                    <p class="text-sm text-gray-500">Your group is now active</p>
                  </div>
                </div>
              </div>

              <!-- Modal Body -->
              <div class="p-6">
                <div class="text-center">
                  <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-users text-green-600 text-2xl"></i>
                  </div>
                  <h4 class="font-medium text-gray-800 mb-2">Your Group Invite Code</h4>
                  <div class="bg-gray-100 rounded-lg p-4 mb-4">
                    <div class="text-2xl font-bold text-blue-600 tracking-wider">
                      {{ generatedCode }}
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 mb-4">
                    Share this code with people you want to invite to your group. They'll need this code to
                    request joining.
                  </p>
                  <div class="flex space-x-2">
                    <button @click="copyInviteCode"
                      class="flex-1 cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <i class="fas fa-copy mr-2"></i>
                      Copy Code
                    </button>
                    <button @click="shareInviteCode"
                      class="flex-1 cursor-pointer border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                      <i class="fas fa-share-alt mr-2"></i>
                      Share
                    </button>
                  </div>
                </div>
              </div>

              <!-- Modal Footer -->
              <div class="flex justify-end p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <button @click="closeSuccessModal"
                  class="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Groups List -->
        <div class="bg-white rounded-xl card-shadow p-6">
          <div class="flex flex-col gap-4">

            <div v-if="groups.length > 0" class="flex flex-col gap-4">
              <!-- Group Item 1 -->
              <GroupCard v-for="group in groups" :key="group.id" :members="group.members"
                :contributionAmount="group.contributionAmount" :bgImage="group.bgImage" :groupName="group.groupName"
                :id="group.id" :activity="group.activity" :isAdmin="group.isAdmin" />
            </div>
            <div v-else class="w-full text-gray-500 flex justify-center items-center">Please Join or create a group
            </div>

          </div>
        </div>

      </div>

    </div>
    <!-- right side nav -->
    <!-- <div class="w-0 md:w-[23%] h-full bg-gray-300"></div> -->
  </div>
</template>

<script setup>
import GroupCard from '@/components/cards/groupCard.vue';
import SideBar from '@/components/sideBar.vue';
import TopBar from '@/components/topBar.vue';
import { useGroupStore } from '@/stores/groups';
import { ref, onMounted, onUnmounted } from "vue"
import { useAuthStore } from '@/stores/auth';
import { useGroupAuthStore } from '@/stores/groupAuth';
import JoinGroupModal from "@/components/JoinGroup.vue"
const auth = useAuthStore();
const { fetchGroups } = useGroupStore();
const { createNewGroup } = useGroupAuthStore()
const groups = ref([])
let intervalId;


const showModal = ref(false)

onMounted(() => {
  // Initial fetch
  fetchAndUpdateGroups();

  // Poll every 5 seconds
  intervalId = setInterval(fetchAndUpdateGroups, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId); // clean up interval
});

async function fetchAndUpdateGroups() {
  try {
    const mygroups = await fetchGroups(auth.accessToken);
    if (mygroups) {
      groups.value = mygroups.sort((a, b) => b.isAdmin - a.isAdmin);
    }
  } catch (err) {
    console.error("Error fetching groups:", err);
  }
}


const createGroupModal = ref(null)
const successModal = ref(null)
const createGroupForm = ref(null)
const imagePreview = ref(null)
const uploadPlaceholder = ref(null)
const groupImage = ref(null)
const uploadArea = ref(null)
const groupName = ref('')
const contributionAmount = ref('')
const contributionFrequency = ref('')
const groupCreationErrors = ref([])

const generatedCode = ref("")

// Open & Close Create Group Modal
function openCreateGroupModal() {
  createGroupModal.value.classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function closeCreateGroupModal() {
  createGroupModal.value.classList.add("hidden")
  document.body.style.overflow = "auto"
  resetForm()
}

// Success Modal
function openSuccessModal(code) {
  successModal.value.classList.remove("hidden")
  generatedCode.value = code
}

function closeSuccessModal() {
  successModal.value.classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Image upload
function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value.src = e.target.result
      imagePreview.value.style.display = "block"
      uploadPlaceholder.value.style.display = "none"
    }
    reader.readAsDataURL(file)
  }
}

// Create group (demo only)
async function createGroup(access_token = auth.accessToken) {
  if (!createGroupForm.value.checkValidity()) {
    createGroupForm.value.reportValidity();
    return;
  }

  const payload = {
    groupname: groupName.value,
    paymentAmount: contributionAmount.value,
    paymentCycle: contributionFrequency.value,
    groupImg: 'user.png', // replace with uploaded image if needed
  };

  try {
    const data = await createNewGroup(access_token, payload);

    if (data.error) {
      const status = data.response.status;
      const message = data.response.data?.message || data.response.message;

      // Token expired or invalid
      if (status === 403 && message === 'Token is not valid') {
        const refresh_response = await auth.tokenRefresh(auth.refreshToken);
        if (!refresh_response.response) {
          const newAccessToken = refresh_response.data.access_token;
          auth.accessToken = newAccessToken;
          return await createGroup(newAccessToken); // retry
        } else {
          console.log('Token refresh failed, logging out');
          return;
        }
      }
      if (status === 400) {
        const errors = ref([])
        errors.value = data.response.data.errors;
        groupCreationErrors.value = errors.value.map((err) => {
          return {
            message: err.msg
          }
        })
        console.log('Group Creation Errors:', groupCreationErrors.value);
        return;
      }

      // Other errors
      groupCreationErrors.value = [{ message }];
      console.log('Group Creation Errors:', groupCreationErrors.value);
      return;
    }

    // Success: update UI
    console.log('Group created:', data.groupInfo.group_code);
    // groups.value.push(data.groupInfo); // assuming backend returns groupInfo
    closeCreateGroupModal();
    openSuccessModal(data.groupInfo.group_code);

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}


// Reset form
function resetForm() {
  createGroupForm.value.reset()
  imagePreview.value.style.display = "none"
  uploadPlaceholder.value.style.display = "block"
}

// Copy/Share code
function copyInviteCode() {
  navigator.clipboard.writeText(generatedCode.value).then(() => {
    alert(`Invite code ${generatedCode.value} copied to clipboard!`)
  })
}

function shareInviteCode() {
  const text = `Join my Osusu savings group! Use invite code: ${generatedCode.value}`
  const sharelink = `http://localhost:5173/groups/join?code=${generatedCode.value}`
  if (navigator.share) {
    navigator.share({
      title: "Join my Osusu Group",
      text: text,
      url: sharelink,
    })
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert("Invite message copied to clipboard!")
    })
  }
}

// Drag & Drop for image upload
function preventDefaults(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight() {
  uploadArea.value.classList.add("dragover")
}

function unhighlight() {
  uploadArea.value.classList.remove("dragover")
}

function handleDrop(e) {
  const dt = e.dataTransfer
  const files = dt.files
  groupImage.value.files = files
  handleImageUpload({ target: { files: files } })
}

// lifecycle
let modalClick
let escListener

onMounted(() => {
  modalClick = (e) => {
    if (e.target === createGroupModal.value) closeCreateGroupModal()
    if (e.target === successModal.value) closeSuccessModal()
  }

  escListener = (e) => {
    if (e.key === "Escape") {
      closeCreateGroupModal()
      closeSuccessModal()
    }
  }

  document.addEventListener("click", modalClick)
  document.addEventListener("keydown", escListener)

    // drag events
    ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      uploadArea.value.addEventListener(eventName, preventDefaults, false)
    })
    ;["dragenter", "dragover"].forEach((eventName) => {
      uploadArea.value.addEventListener(eventName, highlight, false)
    })
    ;["dragleave", "drop"].forEach((eventName) => {
      uploadArea.value.addEventListener(eventName, unhighlight, false)
    })
  uploadArea.value.addEventListener("drop", handleDrop, false)
})

onUnmounted(() => {
  document.removeEventListener("click", modalClick)
  document.removeEventListener("keydown", escListener)

  if (uploadArea.value) {
    ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      uploadArea.value.removeEventListener(eventName, preventDefaults, false)
    })
      ;["dragenter", "dragover"].forEach((eventName) => {
        uploadArea.value.removeEventListener(eventName, highlight, false)
      })
      ;["dragleave", "drop"].forEach((eventName) => {
        uploadArea.value.removeEventListener(eventName, unhighlight, false)
      })
    uploadArea.value.removeEventListener("drop", handleDrop, false)
  }
})






</script>

<style scoped>
.dragover {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.image-preview {
  display: none;
  max-height: 120px;
  object-fit: cover;
}
</style>