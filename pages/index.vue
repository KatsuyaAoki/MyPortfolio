<script setup lang="ts">
import { Blog } from "~~/types/blog";
import { dateFormat } from "~~/utils/dateFormat";
import { shortTitle } from "~~/utils/functions";

interface Array {
    subtitle: string,
    link: string
}

const sections: Array[] = [
    //{ subtitle: 'section title', link: 'slug' }
    { subtitle: 'about', link: '' },
    { subtitle: 'works', link: '/works' },
    { subtitle: 'blog', link: '/blog' },
]

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
  <HeroImage />
  <section id="about" class="py-32">
    <div class="max-w-3xl mx-auto px-8">
        <SectionTitle :section-title="sections[0].subtitle"/>
        <Profile />
    </div>
  </section>
  <section id="works" class="py-32 bg-gray-50">
    <div class="max-w-3xl mx-auto px-8">
      <SectionTitle :section-title="sections[1].subtitle"/>
      <div class="mt-10 text-center">
        <NuxtLink
         :to="sections[1].link"
         class="font-mono capitalize tracking-widest inline-block w-60 py-4 text-lg border-2 border-solid border-gray-700 rounded"
        >
          view more
        </NuxtLink>
      </div>
    </div>
  </section>
  <section id="blog" class="py-32">
    <div class="max-w-3xl mx-auto px-8">
      <SectionTitle :section-title="sections[2].subtitle"/>
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
      <div class="mt-10 text-center">
        <NuxtLink
         :to="sections[2].link"
         class="font-mono capitalize tracking-widest inline-block w-60 py-4 text-lg border-2 border-solid border-gray-700 rounded"
        >
          view more
        </NuxtLink>
      </div>
    </div>
  </section>
</template>