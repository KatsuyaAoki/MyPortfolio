<script setup lang="ts">
import { dateFormat } from "~~/utils/dateFormat";
import { Blog } from "~~/.nuxt/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});

const shortTitle = (title: any) => {
  const MAX_LENGTH = 41;
  if(title.length > MAX_LENGTH) {
    return title.substring(0, MAX_LENGTH) + '...';
  } else {
    return title;
  }
}

</script>

<template>
  <h1 class="py-20 text-center font-sans text-3xl font-bold capitalize bg-gray-100">blog</h1>
  <div class="pt-20 pb-32 max-w-3xl m-auto">
    <ul class="grid grid-cols-1 gap-10">
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink 
        :to="`/blog/${blog.id}`"
        class="flex flex-row gap-8 items-center justify-center"
        >
          <img
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            class="w-60 h-32 flex-none object-cover"
            alt=""
          />
          <div class="w-96">
            <div class="inline-block rounded border-2 px-1.5 py-0.5 text-sm font-semi-bold text-gray-500">
              {{ blog.category?.name }}
            </div>
            <div class="mt-2 text-lg font-semi-bold ">
              {{ shortTitle(blog.title) }}
            </div>
            <div class="mt-1 text-sm text-gray-700">
              {{ dateFormat( blog.publishedAt ?? blog.createdAt ) }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>