<script setup lang="ts">
import { dateFormat } from "~~/utils/dateFormat";
import { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>
<template>
  <div class="pt-20 pb-32 max-w-3xl m-auto px-8 md:px-0">
    <template v-if="data">
      <h1 class="text-3xl font-bold">
        {{ data.title }}
      </h1>
      <img
        :src="data.eyecatch?.url"
        :width="data.eyecatch?.width"
        :height="data.eyecatch?.height"
        class="mt-10"
        alt=""
      />
      <div class="mt-4 flex gap-3 flex-row items-center">
        <div class="rounded border-2 px-1.5 py-0.5 text-sm font-semibold text-gray-500">
          {{ data.category?.name }}
        </div>
        <div class="text-sm text-gray-700">
          {{ dateFormat( data.publishedAt ?? data.createdAt )}}
        </div>
      </div>
      <div 
      v-html="data.content"
      class="prose mt-10"
      ></div>
    </template>
  </div>
</template>