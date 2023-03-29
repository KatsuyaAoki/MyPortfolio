<script setup lang="ts">
const { params } = useRoute();
const pageId = Number(params.id || 1);

const pageTitle = String("blog");
</script>

<template>
  <PageTitle :page-title="pageTitle"/>
  <div class="pt-20 pb-32 max-w-3xl m-auto">
    <ArticleList :page-id="pageId"/>
  </div>
</template>