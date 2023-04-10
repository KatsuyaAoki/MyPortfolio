<script setup lang="ts">
import { Works } from "~~/types/works";
import { dateFormat } from "~~/utils/dateFormat";
import { shortTitle } from "~~/utils/functions";

const { data } = await useMicroCMSGetList<Works>({
  endpoint: "works",
});
</script>
<template>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10">
  <li v-for="work in data?.contents" :key="work.id" 
  class=""
  >
    <NuxtLink
     :to="`/works/${ work.id }`"
     class="duration-300 hover:opacity-60"
     >
      <img
      :src="work.thumbnail?.url"
      :width="work.thumbnail?.width"
      :height="work.thumbnail?.height"
      :alt="`${ work.title }のサムネイル画像`"
      class="object-cover"
      />
      <div class="mt-2 tracking-wider">
        <h2 class="font-bold">
          {{ shortTitle(work.title) }}
        </h2>
        <time class="text-sm text-gray-700" :datetime="`${ work.release }`">
          リリース:{{ dateFormat( work.release ) }}
        </time>
      </div>
    </NuxtLink>
  </li>
</ul>
</template>