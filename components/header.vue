<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-sm w-full h-16">
    <div class="mx-auto max-w-6xl flex flex-row justify-between items-center h-full">
      <NuxtLink to="/" class="text-2xl font-bold">MyPortfolio</NuxtLink>
      <nav class="flex flex-row space-x-1">
        <NuxtLink to="/about" class="capitalize font-bold px-3">about</NuxtLink>
        <NuxtLink to="/works" class="capitalize font-bold px-3">works</NuxtLink>
        <NuxtLink to="/blog" class="capitalize font-bold px-3">blog</NuxtLink>
      </nav>
    </div>
  </header>
</template>