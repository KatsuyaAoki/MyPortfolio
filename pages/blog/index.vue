<script setup lang="ts">
const pageTitle = String("blog");
</script>

<template>
  <PageTitle :page-title="pageTitle"/>
  <div class="pt-20 pb-32 max-w-3xl m-auto">
    <ArticleList />
  </div>
</template>