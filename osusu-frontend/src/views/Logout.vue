<template>
  <div class="w-full h-screen flex">
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { onMounted, ref } from 'vue';
import { useAuthApi } from '@/composables/api/useAuthApi';

const auth = useAuthStore();
const router = useRouter();
const { logoutApi } = useAuthApi()
onMounted(
  async () => {
    const accessToken = auth.accessToken
    const refreshToken = auth.refreshToken;
    async function refresh(access_token) {
      try {
        // try to log user out
        const message = (await logoutApi(access_token)).message
        auth.logout()
        router.push({ name: "Login" });
      } catch (error) {
        const status = error.response.status
        const message = error.response.data.message
        const jwt_access_token = ref(null)
        // if user was already logged out
        if (status == 400) {
          auth.logout()
          router.push({ name: "Login" });
        }
        // if not logged out but access token has expired
        if (status == 403) {
          const data = await auth.tokenRefresh(refreshToken)
          // if user hass the correct refresh code
          if (!data.response) {
            jwt_access_token.value = data
            const newAccessToken = jwt_access_token.value.data.access_token
            refresh(newAccessToken)
          } else {
            // if not 
            auth.logout()
            router.push({ name: "Login" });
          }
        }
        if (status == 404) {
          auth.logout()
          router.push({ name: "Login" });
        }
      }
    } refresh(accessToken)
  }
)
</script>


<style lang="scss" scoped></style>