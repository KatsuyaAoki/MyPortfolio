<script setup lang="ts">
import { dateFormat } from "~~/utils/dateFormat";
import { Blog } from "~~/types/blog";

const { params } = useRoute();
const pageId = Number(params.id || 1);
const ARTICLE_PER_PAGE = 5;
const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    limit: ARTICLE_PER_PAGE,
    offset: (pageId - 1)*ARTICLE_PER_PAGE,
    orders: '-publishedAt',
  },
});

const totalPages = Math.ceil(data.value.totalCount / ARTICLE_PER_PAGE);

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
    <div class="text-center pt-20 space-x-6">
        <NuxtLink
          class="py-1 px-2 text-gray-700 border border-solid border-gray-700 rounded"
          v-for="page in totalPages"
          :key="page"
          :to="`/blog/page/${page}`"
        >
            {{ page }}
        </NuxtLink>
    </div>
  </div>
</template>