<script setup lang="ts">
type Props = {
    slug: string,
};
const { slug } = defineProps<Props>();
</script>
<template>
  <NuxtLink
   :to="slug"
   class="
    font-mono
    text-lg 
    capitalize
    tracking-widest
    inline-block
    w-60
    py-4 
    border-2 
    border-solid 
    border-gray-700 
    rounded
    duration-300
    hover:text-white
    hover:bg-gray-700
    "
  >
    view more
  </NuxtLink>
</template>