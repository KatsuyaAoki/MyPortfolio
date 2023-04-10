<script setup lang="ts">
import { Blog } from "~~/types/blog";
import { dateFormat } from "~~/utils/dateFormat";
import { ARTICLE_PER_PAGE } from "~~/settings/siteSettings";
import { shortTitle } from "~~/utils/functions";

const { params } = useRoute();
const pageId = Number(params.id || 1);

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    limit: ARTICLE_PER_PAGE,
    offset: (pageId-1)*ARTICLE_PER_PAGE,
    orders: '-publishedAt',
  },
});

const totalPages = Math.ceil(data.value.totalCount / ARTICLE_PER_PAGE);
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
         :alt="`${ blog.title }のサムネイル画像`"
         class="md:w-60 md:h-32 flex-none object-cover"
        />
        <div class="md:w-96">
          <div class="inline-block rounded border-2 px-1.5 py-0.5 text-sm font-semi-bold text-gray-500">
            {{ blog.category?.name }}
          </div>
          <h2 class="mt-2 text-lg font-bold ">
            {{ shortTitle(blog.title) }}
          </h2>
          <time class="mt-1 text-sm text-gray-700" :datetime="`${ blog.publishedAt ?? blog.createdAt }`">
            {{ dateFormat( blog.publishedAt ?? blog.createdAt ) }}
          </time>
        </div>
      </NuxtLink>
    </li>
  </ul>
  <Pagination :total-pages="totalPages" :current-page="pageId"/>
</template>