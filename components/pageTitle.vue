<script setup lang="ts">
type Props = {
    pageTitle: string,
};
const { pageTitle } = defineProps<Props>();
</script>
<template>
  <h1 class="py-20 text-center font-sans text-3xl font-bold capitalize bg-gray-100">
    {{ pageTitle }}
  </h1>
</template>