<script setup lang="ts">
type Props = {
    pageTitle: string,
};
const { pageTitle } = defineProps<Props>();
</script>
<template>
  <h1 class="w-screen py-20 text-center font-mono text-4xl font-bold capitalize bg-gray-100">
    {{ pageTitle }}
  </h1>
</template>