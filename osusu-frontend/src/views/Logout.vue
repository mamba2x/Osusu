<template>
  <div class="w-full h-screen flex">
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"
import { onMounted } from "vue"
import { useAuthApi } from "@/composables/api/useAuthApi"

const auth = useAuthStore()
const router = useRouter()
const { logoutApi } = useAuthApi()

onMounted(async () => {
  const accessToken = auth.accessToken
  const refreshToken = auth.refreshToken

  async function tryLogout(token) {
    try {
      // attempt to log user out with token
      auth.logout()
      router.push({ name: "Login" })
    } catch (error) {
      const status = error.response?.status
      const message = error.response?.data?.message

      if (status === 400 || status === 404) {
        // already logged out or not found
        auth.logout()
        router.push({ name: "Login" })
        return
      }

      if (status === 403) {
        // token expired → try refreshing
        const refresh_response = await auth.tokenRefresh(refreshToken)
        if (!refresh_response.response) {
          // refresh worked → retry logout with new token
          const newAccessToken = refresh_response.data.access_token
          return tryLogout(newAccessToken)
        } else {
          // refresh failed → force logout
          auth.logout()
          router.push({ name: "Login" })
          return
        }
      }

      // fallback (500, network error, etc.)
      auth.logout()
      router.push({ name: "Login" })
    }
  }

  // run once on mount
  tryLogout(accessToken)
})

</script>


<style lang="scss" scoped></style>