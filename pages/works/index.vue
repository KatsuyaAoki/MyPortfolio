<script setup lang="ts">
const pageTitle = String("works");
</script>
<template>
  <PageTitle :page-title="pageTitle"/>
  <div class="pt-20 pb-32 max-w-3xl m-auto px-8">
    <WorksList />
  </div>
</template>