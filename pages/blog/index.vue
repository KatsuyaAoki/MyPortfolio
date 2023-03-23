<script setup lang="ts">
import { dateFormat } from "~~/utils/dateFormat";
import { Blog } from "../../.nuxt/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>

<template>
  <h1 class="text-center font-sans text-4xl font-semibold">記事一覧</h1>
  <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink 
      :to="`/blog/${blog.id}`"
      class="flex flex-row gap-4 items-center justify-center"
      >
        <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          class="w-1/3 flex-none"
          alt=""
        />
        <div class="p-2.5 pr-0">
          <div class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semi-bold text-indigo-600">
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semi-bold">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat( blog.publishedAt ?? blog.createdAt ) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>