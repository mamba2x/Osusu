<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <div class="flex justify-center items-center h-screen">
        Loading...
      </div>
    </template>
  </Suspense>
</template>
