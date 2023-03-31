<script setup lang="ts">
type Props = {
    sectionTitle: string,
};
const { sectionTitle } = defineProps<Props>();
</script>
<template>
  <h2 class="text-center font-mono text-4xl font-bold capitalize tracking-widest pb-14">
    {{ sectionTitle }}
  </h2>
</template>