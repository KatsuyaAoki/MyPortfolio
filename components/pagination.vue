<script setup lang="ts">
type Props = {
  totalPages: number,
  currentPage: number,
};

const { totalPages, currentPage } = defineProps<Props>();
</script>
<template>
  <div class="text-center pt-20 space-x-6">
    <NuxtLink
     class="py-1 px-2 text-gray-700"
     v-for="page in totalPages"
     :key="page"
     :to="`/blog/page/${page}`"
     :class="[page === currentPage ? 'pointer-events-none border border-solid border-gray-700 rounded' : 'hover:opacity-60']"
    >
      {{ page }}
    </NuxtLink>
  </div>
</template>