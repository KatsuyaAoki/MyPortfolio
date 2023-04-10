<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    limit: 3,
    offset: 0,
    orders: '-publishedAt',
  },
});
</script>
<template>
<ul class="grid grid-cols-1 gap-14 md:gap-10">
  <li v-for="blog in data?.contents" :key="blog.id">
    <NuxtLink 
    :to="`/blog/${blog.id}`"
    class="flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-center duration-300 hover:opacity-60"
    >
      <img
       :src="blog.eyecatch?.url"
       :width="blog.eyecatch?.width"
       :height="blog.eyecatch?.height"
       class="md:w-60 md:h-32 flex-none object-cover"
       alt=""
      />
      <div class="md:w-96">
        <div class="inline-block rounded border-2 px-1.5 py-0.5 text-sm font-semi-bold text-gray-500">
          {{ blog.category?.name }}
        </div>
        <div class="mt-2 text-lg font-bold ">
          {{ shortTitle(blog.title) }}
        </div>
        <div class="mt-1 text-sm text-gray-700">
          {{ dateFormat( blog.publishedAt ?? blog.createdAt ) }}
        </div>
      </div>
    </NuxtLink>
  </li>
</ul>
</template>