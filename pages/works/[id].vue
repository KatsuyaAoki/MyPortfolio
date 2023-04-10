<script setup lang="ts">
import { dateFormat } from "~~/utils/dateFormat";
import { Works } from "~~/types/works";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Works>({
  endpoint: "works",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>
<template>
  <div class="pb-32">
    <template v-if="data">
      <div class="px-8 md:px-0 py-20 flex flex-col md:flex-row justify-center gap-10 bg-gray-100">
        <div class="md:w-1/2 md:max-w-sm">
          <h1 class="text-3xl font-bold">
          {{ data.title }}
          </h1>
          <dl class="">
            <dt class="mt-4 font-bold">リリース</dt>
            <dd class="text-sm text-gray-700">
              <time :datetime="`${ data.release }`">
                {{ dateFormat( data.release )}}
              </time>
            </dd>
            <dt class="mt-4 font-bold">作業時間</dt>
            <dd>{{ data.term }}</dd>
          </dl>
          <p class="mt-4">{{ data.overview }}</p>
        </div>
        <img
          :src="data.thumbnail?.url"
          :width="data.thumbnail?.width"
          :height="data.thumbnail?.height"
          class="md:w-1/2 md:max-w-sm object-contain"
          alt=""
        />
      </div>
      <div class="max-w-3xl mx-auto mt-20 px-8">
        <dl class="mt-4">
          <dt class="text-lg font-bold">URL</dt>
          <dd class="mt-2">
            <NuxtLink :to="`${ data.url }`" target="blank" >{{ data.url }}</NuxtLink>
          </dd>
        </dl>
        <dl v-if="data.position" class="mt-4">
          <dt class="text-lg font-bold">ポジション</dt>
          <dd class="mt-2">{{ data.position }}</dd>
        </dl>
        <dl v-if="data.responsibility" class="mt-4">
          <dt class="text-lg font-bold">担当</dt>
          <dd class="mt-2">
            <span
             v-for="(res, resIndex) in data.responsibility"
             :key="resIndex"
             v-text="res"
             class="first:pl-0 first:before:content-none pl-2 before:content-['/'] before:font-normal before:pr-2"
            >
            </span>
          </dd>
        </dl>
        <dl v-if="data.skill" class="mt-4">
          <dt class="text-lg font-bold">技術</dt>
          <dd class="mt-2">
            <span
             v-for="(skill, skillIndex) in data.skill"
             :key="skillIndex"
             v-text="skill"
             class="first:pl-0 first:before:content-none pl-2 before:content-['/'] before:font-normal before:pr-2"
            >
            </span>
          </dd>
        </dl>
        <dl v-if="data.tool" class="mt-4">
          <dt class="text-lg font-bold">ツール</dt>
          <dd class="mt-2">
            <span
             v-for="(tool, toolIndex) in data.tool"
             :key="toolIndex"
             v-text="tool"
             class="first:pl-0 first:before:content-none pl-2 before:content-['/'] before:font-normal before:pr-2"
            >
            </span>
          </dd>
        </dl>
        <dl v-if="data.point" class="mt-4">
          <dt class="text-lg font-bold">アピールポイント</dt>
          <dd class="mt-2">{{ data.point }}</dd>
        </dl>
      </div>
    </template>
  </div>
</template>